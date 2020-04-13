import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Image from "./image"
import "./header.css"

const Header = ({ siteMetadata }) => (
  <header className={"header"}>
    <div className="sidePadding">
      <h1 className={"fontPrimary"}>{siteMetadata.title}</h1>
      <h2 className={"fontSecondary"}>{siteMetadata.tagline}</h2>
    </div>
  </header>
)

{
  /* <MDBSticky></MDBSticky> */
  // <div className={"backboard"}>
  //     <Image />
  //   </div>
}

{
  /* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */
}
{
  /* <Link to="/">
    </Link> */
}

Header.propTypes = {
  siteMetadata: PropTypes.object.isRequired,
}

Header.defaultProps = {
  siteMetadata: {},
}

export default Header
