import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          tagline
        }
      }
    }
  `)

  return (
    <>
      <Header siteMetadata={data.site.siteMetadata} />
      <div>
        <main className="sidePadding">{children}</main>
      </div>
    </>
  )
}

{
  /* <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer> */
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
