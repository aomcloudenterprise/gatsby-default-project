module.exports = {
  siteMetadata: {
    title: `AOM Cloud Enterprise Blog`,
    siteUrl: `https://www.aomcloudenterprise.com`,
    description: `An affiliate online marketing platform thats teaches you the tips and tricks of online marketing and how to make money marketing other people's products.'`,
    pathPrefix: '/gatsby-default-project',
  },
  plugins: [`gatsby-plugin-react-helmet`],
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/../docs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
      resolve: `gatsby-source-youtube`,
      options: {
        channelId: '<<UCoRYrVmWjNJ0WpbBFXMgtig >>',
        apiKey: '<< AIzaSyDFHLjdkiDw239llTFdjSqd3lNexj_Gkhs>>',
        maxVideos: '50', // Defaults to 50
    },
  },  
},
