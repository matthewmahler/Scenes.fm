module.exports = {
  siteMetadata: {
    title: `Scenes.FM`,
    description: `A music streaming service built by artists.`,
    author: `Matt Mahler`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-scenes-placeholder`,
        short_name: `scenes.fm`,
        start_url: `/`,
        background_color: `#2d2d2d`,
        _color: `#2d2d2d`,
        display: `minimal-ui`,
        // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Pacifico`,
            variants: [`400`],
          },
          {
            family: `Open Sans`,
            variants: [`400`],
          },
        ],
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
