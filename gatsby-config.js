module.exports = {
  siteMetadata: {
    title: 'AOM Cloud Enterprise Blog',
  },
  plugins: [
    // You can have multiple instances of this plugin
    // to read source nodes from different locations on your
    // filesystem.
    //
    // The following sets up the Jekyll pattern of having a
    // "pages" directory for Markdown files and a "data" directory
    // for `.json`, `.yaml`, `.csv`.
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
  ],
  plugins: ['gatsby-plugin-react-helmet'],
    resolve: `gatsby-source-youtube`,
    options: {
      channelId: '<<UCoRYrVmWjNJ0WpbBFXMgtig >>',
      apiKey: '<< AIzaSyDFHLjdkiDw239llTFdjSqd3lNexj_Gkhs>>',
      maxVideos: 50 // Defaults to 50
    },
  },  
 
