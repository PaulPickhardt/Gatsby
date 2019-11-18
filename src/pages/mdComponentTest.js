import React, { Suspense } from "react";
import Header from "../components/header";
import { graphql, useStaticQuery } from "gatsby";

function extractQuery(query) {
  const filterData = {};
  for (const node of query) {
    const frontMatterData = {};
    const md = node.node;
    if (md.frontmatter && md.frontmatter.title) {
      for (const fmKey of Object.keys(md.frontmatter)) {
        frontMatterData[fmKey] = md.frontmatter[fmKey];
      }
      frontMatterData["excerpt"] = md.excerpt;
      frontMatterData["html"] = md.html;
      if (md.frontmatter.parent) {
        filterData[
          md.frontmatter.parent + "/" + md.frontmatter.title
        ] = frontMatterData;
      } else {
        filterData[md.frontmatter.title] = frontMatterData;
      }
    }
  }
  return filterData;
}

export default props => {
  const currentDirectory = document.location.pathname.replace(/\//g, "");
  console.log(currentDirectory);
  useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { id: { eq: "mdComponentTest" } } }
      ) {
        edges {
          node {
            id
            frontmatter {
              id
              title
              component
              order
              parent
            }
            excerpt
            html
          }
        }
      }
    }
  `);
  const fragment = [];
  if (props.data.allMarkdownRemark && props.data.allMarkdownRemark.edges) {
    const dataDict = extractQuery(props.data.allMarkdownRemark.edges);
    console.log(dataDict);
    const order = dataDict["master"]["order"].split(",");
    console.log(order);
    for (const component of order) {
      const tmp = dataDict[component];
      console.log(
        tmp["component"].substring(0, 1).toLowerCase() +
          tmp["component"].substring(1)
      );
      // gives us the react component
      const componentToLoad = React.lazy(() =>
        import(
          "../components/" +
            tmp["component"].substring(0, 1).toLowerCase() +
            tmp["component"].substring(1)
        )
      );

      let element = null;
      const childs = [];
      Object.keys(dataDict).forEach(md => {
        if (
          dataDict[md].parent &&
          dataDict[md].parent.localeCompare(tmp["title"]) === 0
        ) {
          childs.push(dataDict[md]);
        }
      });
      console.log(childs);
      if (childs.length > 0) {
        const props = {};
        for (const child of childs) {
          props[child["title"]] = child["html"];
        }
        element = React.createElement(componentToLoad, props, null);
      } else {
        element = React.createElement(
          componentToLoad,
          {
            data: tmp["html"]
          },
          null
        );
      }
      console.log(React.isValidElement(element));
      if (React.isValidElement(element)) {
        fragment.push(element);
      }
    }
    console.log(fragment);
  }

  return (
    <div className="container">
      <Header headerText={"MD Test"} />
      <Suspense fallback={<div>loading...</div>}>{fragment}</Suspense>
    </div>
  );
};
