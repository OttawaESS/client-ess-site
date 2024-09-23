const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        },
        {
            resolve: 'gatsby-plugin-i18n',
            options: {        
                langKeyDefault: 'en',
                useLangKeyLayout: false,
            }
        },
        {
            resolve: `gatsby-omni-font-loader`,
            options: {
              enableListener: true,
              preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
              web: [
                {
                  name: `Tinos`,
                  file: `https://fonts.googleapis.com/css2?family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap`,
                },
              ],
            },
          },
    ]
};
