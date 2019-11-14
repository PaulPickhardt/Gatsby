import React, { Suspense } from "react";
import Header from "../components/header";
import { graphql, useStaticQuery } from "gatsby";

function extractQuery(query) {
  const filterData = {};
  for (const node of query) {
    const frontMatterData = {};
    const md = node.node;
    if (md.frontmatter && md.frontmatter.title && md.excerpt) {
      for (const fmKey of Object.keys(md.frontmatter)) {
        frontMatterData[fmKey] = md.frontmatter[fmKey];
      }
      frontMatterData["excerpt"] = md.excerpt;
      filterData[md.frontmatter.title] = frontMatterData;
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
            }
            excerpt
          }
        }
      }
    }
  `);
  const fragment = [];
  if (props.data.allMarkdownRemark && props.data.allMarkdownRemark.edges) {
    const dataDict = extractQuery(props.data.allMarkdownRemark.edges);
    console.log(dataDict);
    const order = dataDict["master"]["excerpt"].split("-");
    for (const component of order) {
      const tmp = dataDict[component];
      React.lazy(() =>
        import(
          "../components/" +
            tmp["component"].substring(0, 1).toLowerCase() +
            tmp["component"].substring(1)
        )
      );
      const element = React.createElement(tmp["component"], {
        data: tmp["excerpt"]
      });
      console.log(React.isValidElement(element));
      fragment.push({ __html: element });
    }
    console.log(fragment);
  }

  return (
    <div>
      <Header headerText={"MD Test"} />
      <Suspense fallback={<div>loading...</div>}>
        {fragment &&
          fragment.map((component, index) => {
            console.log(component);
            return <div key={index} dangerouslySetInnerHTML={component} />;
          })}
      </Suspense>
    </div>
  );
};
