import React from "react"
import styled from "styled-components"
import { PaddingDiv, CenteringDivReader } from "./framing"
import { Loader } from "../loader/loader"
import { ReaderText } from "./ReaderText"
import "./reader.css"

export default class ReaderBody extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.props.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.handleScroll)
  }

  render() {
    return (
      <div id="readerBody" className={"paddingStyle centeringReader"}>
        <ReaderText url={this.props.url} />
      </div>
    )
  }
}

const ReaderBodyDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: black;
`
