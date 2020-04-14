import React from "react"
import { Helmet } from "react-helmet"
import "./reader.css"

export const Reader = ({}) => {
  return (
    <div>
      <Helmet>
        <script
          async="true"
          custom-element="amp-iframe"
          src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
        ></script>
      </Helmet>
      <iframe
        width="500"
        height="281"
        title="Netflix House of Cards branding: The Stack"
        layout="responsive"
        sandbox="allow-scripts allow-same-origin allow-popups"
        allowfullscreen
        frameborder="0"
        src="https://player.vimeo.com/video/140261016"
      />
    </div>
  )
}

export const ReaderParent = ({ children }) => {
  return <div>{children}</div>
}
