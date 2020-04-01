import React, { useEffect } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import { Feed } from "../components/feed/feed"
import { Search } from "../components/search/search"
import SEO from "../components/seo/seo"
import "bootstrap/dist/css/bootstrap.min.css"
// import "./index.css"

const SearchPage = () => {
  // console.log({ httpState })

  const [searchTerms, setSearchTerms] = React.useState(undefined)
  return (
    <Layout>
      <SEO title="Home" />
      <Search setSearchTerms={setSearchTerms} />
      <Feed searchTerms={searchTerms} />
    </Layout>
  )
}

{
  /*  */
}
{
  /* <Link to="/page-2/">Go to page 2</Link> */
}

export default SearchPage
