import React from "react";
import Header from "../components/header";
import { graphql, useStaticQuery } from "gatsby";

export default props => {
  console.log(props);
  const { data } = useStaticQuery(graphql`
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
  `);
  console.log(data);
  return (
    <div>
      <Header headerText={"MD Test"} />
    </div>
  );
};
