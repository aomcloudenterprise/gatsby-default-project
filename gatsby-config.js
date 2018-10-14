module.exports = {
  siteMetadata: {
    title: `AOM Cloud Enterprise`,
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
      resolve: `gatsby-source-vimeo`,
      options: {
        clientID: 'INSERT_YOUR_CLIENT_IDENTIFIER',
        clientSecret: 'INSERT_YOUR_CLIENT_SECRET',
        userID: 'INSERT_VIMEO_USER_ID_TO_FETCH_VIDEOS',
        searchQuery: 'INSERT_SEARCH_QUERY [OPTIONAL]',
        transformer (video) {
        // Transform the video data [OPTIONAL]
        // i.e. Add extra fields or alter existing field
        video.newField = 'value'
        return video
    },
  },  
},
