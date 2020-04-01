module.exports = {
  siteMetadata: {
    title: `BBall Heaven`,
    tagline: `for the love of the game`,
    description: `your heavenly portal to the divine realm of basketball`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        async: true,
        "custom-element": "amp-iframe",
        src: "https://cdn.ampproject.org/v0/amp-iframe-0.1.js",
      },
    },
    {
      resolve: `gatsby-plugin-remote-images`,
      options: {
        nodeType: "myNodes",
        imagePath: "imageUrl",
        name: "allItemImages",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#003D8F`,
        theme_color: `#003D8F`,
        display: `minimal-ui`,
        icon: `src/images/backboard_orange.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
