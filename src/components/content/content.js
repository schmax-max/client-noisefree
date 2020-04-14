import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Image } from "react-bootstrap"
import "./content.css"
import { Loader } from "../loader/loader"
import { Link } from "gatsby"

export const ContentList = ({ data, loading }) => {
  return (
    <div className="contentList feedWidth centering" data-test="feed">
      {loading && <Loader loading={loading} />}
      {data &&
        data.length > 0 &&
        data.map((item, index) => {
          return <Content key={item._id} item={item} />
        })}
    </div>
  )
}

export const Content = ({ item }) => {
  const url = item.amp_url || item.content_url
  return (
    <Link
      className="verticalSpacing card standardWidth centering"
      to={`reader?${url}`}
      data-test="content"
    >
      <Image
        className="cardImage standardWidth"
        fluid
        alt=""
        src={item.body.core.image}
      ></Image>
      <div className="textBox">
        <text className="textTitle">{item.body.core.title}</text>
        <br />
        <div className="textBoxBottom">
          <text className="textBottom">{item.body.core.publisher}</text>
          <text className="textBottom">
            {item.body.core.content_minutes} mins
          </text>
        </div>
      </div>
    </Link>
  )
}

Content.propTypes = {
  item: PropTypes.object.isRequired,
}

// const data = useStaticQuery(graphql`
//     query {
//       allItemImages {
//         nodes {
//           featuredImg {
//             childImageSharp {
//               fluid(maxWidth: 600) {
//                 ...GatsbyImageSharpFluid
//               }
//             }
//           }
//         }
//       }
//     }
//   `)

// <Img fluid={data.markdownRemark.featuredImg.childImageSharp.fixed} /> */
// fluid={item.body.core.image}
