import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { MdClose } from "react-icons/md"
import ReaderProgress from "./ReaderProgress"
import { PaddingDiv, CenteringDivReader } from "./framing"
import "./reader.css"

const Header = props => (
  <HeaderDiv className={"paddingStyle"}>
    <Link to="/" className={"centeringReader"}>
      <SpacingDiv>
        <ReaderProgressDiv>
          <ReaderProgress readingProgress={props.readingProgress} />
        </ReaderProgressDiv>
        <IconDiv>
          <MdClose />
        </IconDiv>
      </SpacingDiv>
    </Link>
  </HeaderDiv>
)

export default Header

//

const SpacingDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  top: 0;
`

const HeaderDiv = styled.div`
  height: 40px;
  position: -webkit-sticky;
  position: sticky !important;
  top: 0;
  display: flex;
  z-index: 200;
  background: #1f0138;
  color: #adadad !important;
  @media (max-width: 1024px) {
    /* padding-left: 2%;
        padding-top: 2%; */
  }
  @media (max-width: 767px) {
    /* padding-left: 2rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem; */
  }
`

const IconDiv = styled.div`
  color: #adadad !important;
  margin: 0;
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 28px;
  @media (max-width: 767px) {
    font-size: 28px;
  }
`

const ReaderProgressDiv = styled.div`
  top: 0px;
  height: 12px;
  width: 90%;
  @media (max-width: 767px) {
    /* width: 85%; */
    height: 12px;
  }
`
