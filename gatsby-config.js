module.exports = {
  siteMetadata: {
    title: `Código QR`,
    description: `Don't skip security. Come and learn how to make your websites secure and aesthetically pleasing.`,
    author: `@JoselsonDias`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
