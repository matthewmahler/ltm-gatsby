const dotenv = require('dotenv');
const path = require('path');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Feeny || Between The Bookends',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Loyalty To Me`,
        short_name: `LTM`,
        start_url: `/`,
        background_color: `#8A9CA2`,
        theme_color: `#427ACA`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.jpg`, // This path is relative to the root of the site.
        include_favicon: true, // Include favicon
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: 'xid9jsv980j5',
        accessToken: 'Lltu1841ye23rCk4DaS9Kgm4M82Js0klc90hufYcRrM',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Lobster`, `Mr Dafoe`],
        display: 'swap',
      },
    },
  ],
};
