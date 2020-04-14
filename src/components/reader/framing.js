import React, { Component } from "react"
import styled from "styled-components"

const widthLimits = {
  cardPhone: "100%",
  cardTablet: "30.5%",
  cardDesktop: "28%",
  maxWidthPhone: "450px",
  maxWidthTablet: "550px",
  maxWidthDesktop: "100%",
}

const margins = {
  phone: "1rem",
  tablet: "5%",
  desktop: "7%",
}

export const CenteringDiv = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: ${widthLimits.maxWidthDesktop};
`

export const CenteringDivReader = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-self: center;
  width: ${widthLimits.maxWidthTablet};
  @media (max-width: 1024px) {
    width: ${widthLimits.maxWidthTablet};
  }
  @media (max-width: 767px) {
    width: ${widthLimits.maxWidthPhone};
  }
`

export const PaddingDiv = styled.div`
  overflow: hidden;
  padding-left: ${margins.desktop};
  padding-right: ${margins.desktop};
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  @media (max-width: 1024px) {
    padding-left: ${margins.tablet};
    padding-right: ${margins.tablet};
  }
  @media (max-width: 767px) {
    padding-left: ${margins.phone};
    padding-right: ${margins.phone};
  }
`

export const TrippleSegment = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`

export const ThirdSegment = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  @media (max-width: 1024px) {
    width: 100%;
  }
`
