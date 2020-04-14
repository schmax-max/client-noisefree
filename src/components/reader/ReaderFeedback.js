import React from "react"
import styled from "styled-components"
import { FeedbackBox } from "./feedback/_FeedbackBox"
import { FeedbackText, FeedbackButton } from "./feedback/FeedbackTemplates"

export const ReaderFeedback = props => (
  <ReaderFeedbackDiv>
    <FeedbackText>how was this article?</FeedbackText>
    <FeedbackBox fontSize={18} fontSizeIcon={30} {...props} />
    <FeedbackButton
      {...props}
      onClick={() =>
        props.showSelection(
          true,
          props.startReadingTime,
          props.readingProgress,
          props.feedbackOptionSelected
        )
      }
    >
      submit feedback
    </FeedbackButton>
  </ReaderFeedbackDiv>
)

export const ReaderFeedbackDiv = styled.div`
  align-self: centre;
  width: 100%;
  height: 100%;
  opacity: 0.95;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  padding-top: 2rem;
  padding-bottom: 6rem;
`
