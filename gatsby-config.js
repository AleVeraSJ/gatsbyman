module.exports = {
  siteMetadata: {
    title: "Mi primer sitio como programador web",
    //siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [  
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      }
    },
    "gatsby-plugin-mdx",
  ],
}
