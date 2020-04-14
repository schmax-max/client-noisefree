import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Reader from "../components/reader/reader"
import SEO from "../components/seo/seo"
import "bootstrap/dist/css/bootstrap.min.css"
// import "./index.css"

const IndexPage = props => {
  // console.log({ httpState })

  return (
    <>
      <SEO title="Reader" />
      <Reader url={props.location.search} />
    </>
  )
}

{
  /*  */
}
{
  /* <Link to="/page-2/">Go to page 2</Link> */
}

export default IndexPage
