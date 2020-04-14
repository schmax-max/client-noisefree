import React from "react"
import styled from "styled-components"

const ReaderProgress = props => (
  <ProgressBarContainer>
    <ProgressBarFiller readingProgress={props.readingProgress} />
  </ProgressBarContainer>
)
export default ReaderProgress

const ProgressBarFiller = styled.div`
  flex: ${props => props.readingProgress};
  background-color: #adadad;
  border-style: solid;
  border-color: #adadad;
  border-width: 3px;
  /* border-radius: 20px; */
`

// width: ;
const ProgressBarContainer = styled.div`
  height: 100%;
  width: 100%;
  top: 0;
  display: flex;
  border-style: solid;
  border-color: #adadad;
  border-width: 3px;
  /* border-radius: 20px; */
  opacity: 0.5;
`
