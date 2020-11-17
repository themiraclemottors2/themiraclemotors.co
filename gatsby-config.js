const path = require("path")

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `The Miracle Motors`,
    description: ``,
    author: `@thedammyking`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        custom: {
          families: ["Helvetica Neue"],
          urls: ["src/assets/fonts/stylesheet.css"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `The Miracle Motors`,
        short_name: `the-miracle-motors`,
        start_url: `/`,
        background_color: `#425486`,
        theme_color: `#425486`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cache`,
    "gatsby-plugin-react-svg",
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: path.join(__dirname, "src/components"),
        assets: path.join(__dirname, "src/assets"),
        store: path.join(__dirname, "src/store"),
        lib: path.join(__dirname, "src/lib"),
        services: path.join(__dirname, "src/services"),
      },
    },
  ],
}
