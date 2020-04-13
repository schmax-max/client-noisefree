import React from "react"
import { css } from "@emotion/core"
import { BounceLoader } from "react-spinners"
import "./loader.css"

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 10rem;
`

export const Loader = ({ loading }) => {
  return (
    <div className="centering">
      <BounceLoader
        css={override}
        sizeUnit={"px"}
        size={150}
        color={"#adadad"}
        loading={loading}
      />
    </div>
  )
}
