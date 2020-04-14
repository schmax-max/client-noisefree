import React from "react"
import { useHttp } from "../../hooks"
import styled from "styled-components"
import { ReaderFeedback } from "./ReaderFeedback"
import { ReaderViewToggle } from "./ReaderViewToggle"
import { Loader } from "../loader/loader"

export const ReaderText = ({ url }) => {
  const { httpState, sendRequest, clearHttpState } = useHttp()
  const { loading, data, error, identifier } = httpState

  const api = "cleaner"
  const body = { url }
  console.log({ data })
  React.useEffect(() => {
    sendRequest({ body, api })
  }, [sendRequest, url])

  return (
    <>
      {loading && (
        <GreyDiv>
          <Loader loading={loading} />
        </GreyDiv>
      )}
      {data && (
        <>
          <ReaderTextDiv>
            {data.split("\n").map((item, i) => {
              if (item.includes("://")) {
                return <Image key={i} alt={""} src={item} />
              } else if (item.includes("<b>")) {
                return <Headline key={i}>{item.split("<b>")[1]}</Headline>
              } else {
                return <Paragraph key={i}>{item}</Paragraph>
              }
            })}
            <EmptyDiv />
          </ReaderTextDiv>
        </>
      )}
    </>
  )
}

{
  /* <ReaderFeedback {...this.props} /> */
}
const ReaderTextDiv = styled.div`
  width: 100%;
  margin-top: 2rem;
`

const Paragraph = styled.p`
  padding-bottom: 0.2rem;
`

const EmptyDiv = styled.div`
  height: 300px;
`
const Headline = styled.p`
  font-weight: bold;
  padding-bottom: 0.2rem;
`

const Image = styled.img`
  max-width: 100%;
  height: auto;
  align-self: center;
`

const GreyDiv = styled.div`
  width: 100%;
  height: 1000px;
  z-index: 100;
  background: #e6e6e6;
`

{
  /* {showViewToggle && <ReaderViewToggle {...this.props} />} */
}

// {data &&
//   data.length > 0 &&
//   data.map((item, index) => {
//     return <Content key={item._id} item={item} />
//   })}

// {/*  */} */}

// {/* <GreyDiv>
// {this.props.showReaderLoader && (
//   <Loader loading={loading} />
// )}
// </GreyDiv> */}
