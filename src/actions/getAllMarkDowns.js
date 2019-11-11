import { graphql } from "gatsby"
// something with await
const getAllMarkDowns = graphql`
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
`

export default getAllMarkDowns
