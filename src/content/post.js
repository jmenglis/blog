import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

export default function Post({ data }) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html, excerpt } = markdownRemark
  return (
    <Layout>
      <SEO
        title={`${frontmatter.title}`}
        meta={[
          { name: "description", content: excerpt },
          { name: "twitter:title", content: frontmatter.title },
          { property: "og:description", content: excerpt },
          { name: "twitter:description", content: excerpt },
        ]}
      />
      <div>
        <h2>{frontmatter.title}</h2>
        <h4>{frontmatter.date}</h4>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
