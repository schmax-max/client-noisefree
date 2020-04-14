import React from "react"
import styled from "styled-components"
import { FiExternalLink } from "react-icons/fi"
import { GiTwoCoins } from "react-icons/gi"

const CircleDiv = styled.div`
  padding: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: ${props => props.size};
  height: ${props => props.size};
  cursor: pointer;
  /* display: none; */
`

export const ReaderViewToggle = props => {
  return (
    <Wrapper>
      <Disclaimer />
      <LinkBoxes>
        <OpenPatreonBox />
        <OpenOriginalUrlBox {...props} />
      </LinkBoxes>
    </Wrapper>
  )
}

const Disclaimer = () => {
  return <DisclaimerText></DisclaimerText>
}

const OpenOriginalUrlBox = ({ articleUrl, articleAmpUrl }) => {
  const { innerWidth } = window
  const isDesktop = innerWidth > 1024
  if (isDesktop) {
    articleAmpUrl = undefined
  }
  let originalUrl = articleAmpUrl || articleUrl

  return (
    <BoxDiv onClick={() => window.open(originalUrl)}>
      <CircleDiv size={"30px"} style={circleStyle}>
        <FiExternalLink />
      </CircleDiv>
      read original article
    </BoxDiv>
  )
}

const OpenPatreonBox = () => {
  return (
    <BoxDiv onClick={() => window.open("https://www.patreon.com/theFarticle")}>
      <CircleDiv size={"30px"} style={circleStyle}>
        <GiTwoCoins />
      </CircleDiv>
      tip the cleaners
    </BoxDiv>
  )
}

const circleStyle = {
  margin: "20",
  right: "1rem",
  top: "0.5rem",
  background: `#1F0138`,
  marginRight: "1rem",
}

const DisclaimerText = styled.text`
  font-size: 80%;
  padding-bottom: 1rem;
  font-style: italic;
`

const LinkBoxes = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  padding-bottom: 1rem;
  @media (max-width: 767px) {
    flex-direction: row;
  }
`

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  font-style: italic;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const BoxDiv = styled.div`
  height: 40px;
  width: 100%;
  /* max-width: 300px; */
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 1rem;
  cursor: pointer;
`

const Paragraph = styled.p`
  padding-bottom: 0.2rem;
`
