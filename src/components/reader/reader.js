import React from "react"
import styled from "styled-components"
import moment from "moment"

import ReaderBody from "./ReaderBody"
import ReaderHeader from "./ReaderHeader"
import ReaderFeedback from "./ReaderFeedback"

export default class Reader extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      startReadingTime: 0,
      readingProgress: 0,
      articleFeedback: null,
      submitFeedbackOpacity: 0,
      height: 1000,
    }
    this.handleScroll = this.handleScroll.bind(this)
    this.clickOnFeedbackOption = this.clickOnFeedbackOption.bind(this)
  }

  componentWillUnmount() {
    window.scrollTo(0, this.props.previousScrollPosition)
  }

  componentDidUpdate() {
    const { innerHeight } = window
    const height =
      document.getElementById("readerBody").offsetHeight - innerHeight
    if (height !== this.state.height) {
      this.setState({
        height,
      })
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0)
    const startReadingTime = moment().toISOString()
    const { innerHeight } = window
    const height =
      document.getElementById("readerBody").offsetHeight - innerHeight
    this.setState({
      startReadingTime,
      height,
    })
  }

  handleScroll() {
    let scrollPosition = window.pageYOffset
    let readingProgress = scrollPosition / this.state.height
    this.setState({
      readingProgress,
    })
  }

  clickOnFeedbackOption(articleFeedback) {
    this.setState({
      articleFeedback,
      submitFeedbackOpacity: 1,
    })
  }

  render() {
    return (
      <ReaderDiv>
        <ReaderHeader {...this.state} />
        <ReaderBody
          handleScroll={this.handleScroll}
          clickOnFeedbackOption={this.clickOnFeedbackOption}
          feedbackOptionSelected={this.state.articleFeedback}
          {...this.state}
          {...this.props}
        />
      </ReaderDiv>
    )
  }
}

const ReaderDiv = styled.div`
  top: 0;
  position: absolute;
  z-index: 1000;
  width: 100%;
  background: #e6e6e6;
  display: flex;
  flex-direction: column;
  justify-items: center;
`
