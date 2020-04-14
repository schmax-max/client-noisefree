import React from "react"
import styled from "styled-components"
import { MdThumbDown, MdStar, MdStarBorder, MdStarHalf } from "react-icons/md"
import {
  TiThumbsDown,
  TiThumbsOk,
  TiThumbsUp,
  TiStarOutline,
} from "react-icons/ti"
import { FaRegHandRock } from "react-icons/fa"
import { FeedbackOption } from "./FeedbackOption"

export const FeedbackBox = props => (
  <FeedbackBoxDiv>
    <FeedbackOption
      {...props}
      feedbackOptionIcon={<TiThumbsDown />}
      feedbackOptionText={"crap"}
    />
    <FeedbackOption
      {...props}
      feedbackOptionIcon={<TiThumbsOk />}
      feedbackOptionText={"ok"}
    />
    <FeedbackOption
      {...props}
      feedbackOptionIcon={<TiThumbsUp />}
      feedbackOptionText={"good"}
    />
    <FeedbackOption
      {...props}
      fontSizeIcon={props.fontSizeIcon * 0.8}
      feedbackOptionIcon={<FaRegHandRock />}
      feedbackOptionText={"great"}
    />
  </FeedbackBoxDiv>
)

const GreatIcon = props => {
  return <GreatIconDiv></GreatIconDiv>
}

const GreatIconDiv = styled.div`
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
`

const FeedbackBoxDiv = styled.div`
  padding-top: 0.4rem;
  padding-bottom: 2rem;
  width: 80%;
  max-width: 350px;
  display: flex;
  font-size: 20px;
  align-self: center;
  align-items: bottom;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 350px;
  }
`
