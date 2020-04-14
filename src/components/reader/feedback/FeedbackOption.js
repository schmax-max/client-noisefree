import React from 'react';
import styled from 'styled-components';

export class FeedbackOption extends React.Component {
  constructor() {
      super();
      this.state = {
          opacity: 1,
      }
  }

  componentDidUpdate (prevProps) {

      const {feedbackOptionText, feedbackOptionSelected} = this.props

      if (feedbackOptionSelected !== prevProps.feedbackOptionSelected) {
          let opacity = 1
          if (
            feedbackOptionSelected
            && (feedbackOptionSelected !== feedbackOptionText.toLowerCase())
          ) {
            opacity = 0.2
          }
          this.setState({
            opacity
          })
      }

  }

  render () {
    const {
      clickOnFeedbackOption,
      feedbackOptionText,
      fontSize,
      fontSizeIcon,
      feedbackOptionIcon,
    } = this.props

    return (
      <FeedbackOptionDiv opacity={this.state.opacity} onClick={() => clickOnFeedbackOption(feedbackOptionText.toLowerCase())}>
          <FeedbackOptionIcon fontSizeIcon={fontSizeIcon}>
              {feedbackOptionIcon}
          </FeedbackOptionIcon>
          <FeedbackOptionText fontSize={fontSize}>
              {feedbackOptionText}
          </FeedbackOptionText>
      </FeedbackOptionDiv>
    )
  }
}


const FeedbackOptionDiv = styled.div`
    opacity: ${props => props.opacity};
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    cursor: pointer;
`

const FeedbackOptionIcon = styled.div`
    /* width: 25px; */
    font-size: ${props => props.fontSizeIcon}px;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`


const FeedbackOptionText = styled.text`
    font-size: ${props => props.fontSize}px;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom: 0;

`
