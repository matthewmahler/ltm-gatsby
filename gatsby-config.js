const dotenv = require('dotenv');
const path = require('path');

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Loyalty To Me',
    description:
      "Self-proclaimed 'Radio Emo Band' Loyalty To Me released their first single, Radio Off, in December 2018. Just one month later, the Central Jersey rockers solidified a permanent five-piece lineup",
    author: 'Matt Mahler',
    siteUrl: 'https://loyaltytome.com/',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Loyalty To Me`,
        short_name: `LTM`,
        start_url: `/`,
        background_color: `#c64274`,
        theme_color: `#6780de`,
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
        fonts: [`Merriweather Sans`, `Mr Dafoe`],
        display: 'swap',
      },
    },
    {
      resolve: 'gatsby-plugin-load-script',
      options: {
        src: 'https://platform.twitter.com/widgets.js',
      },
    },
  ],
};
