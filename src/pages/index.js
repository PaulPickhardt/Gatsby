import React from "react";
import Header from "../components/header";
import { graphql } from "gatsby";
import getAllMarkDowns from "../actions/getAllMarkDowns";
import getAllMarkDowns2 from "../actions/getAllMarkDowns2";

export default ({ data }) => {
  console.log(data);
  const test = getAllMarkDowns;
  const test2 = getAllMarkDowns2();
  console.log(test);
  console.log(test2);
  return (
    <div>
      <Header headerText={"Hello Gatsby!"} />
      <div>
        <h4> Markdown files: </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} style={{ marginLeft: 10 }}>
            <p>------------------------------------------</p>
            <p>
              {node.frontmatter.title} {node.frontmatter.date}
            </p>
            <p>{node.excerpt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;
