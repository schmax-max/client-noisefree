import React from "react"
export function onRenderBody({ setHeadComponents }) {
  setHeadComponents([
    <script
      key="amp-iframe"
      async
      custom-element="amp-iframe"
      src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
    />,
  ])
}
