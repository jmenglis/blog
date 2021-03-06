import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql, Link } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data

  const BlogPostList = edges
    .sort(
      (a, b) =>
        new Date(b.node.frontmatter.date) - new Date(a.node.frontmatter.date)
    )
    .map(post => {
      const {
        node: {
          frontmatter: { date, title, path },
        },
      } = post
      console.log(post)
      return (
        <>
          <Link to={`${path}`} className="links">
            <li
              key={title}
              style={{ listStyleType: "none", marginBottom: "0" }}
            >
              {date} - {title}
            </li>
          </Link>
        </>
      )
    })

  return (
    <Layout>
      <SEO title="Josh English's Blog" />
      <ul>{BlogPostList}</ul>
    </Layout>
  )
}
export const pageQuery = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

export default IndexPage
