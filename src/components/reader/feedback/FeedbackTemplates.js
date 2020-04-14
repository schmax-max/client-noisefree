import React from "react"
import styled from "styled-components"

export const FeedbackText = styled.text`
  font-size: 26px;
  font-style: italic;
`

export const FeedbackButton = styled.button`
  font-size: 20px;
  font-weight: bold;
  color: #fad69a;
  padding: 1rem;
  border: none;
  border-radius: 15px;
  background: #1f0138;
  opacity: ${props => props.submitFeedbackOpacity};
`
