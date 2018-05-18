const theme = {
    fontSize: 16,
    color: "#ff2a25",
};

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: "gatsby-plugin-jss",
          options: { theme },
      }
  ],
};
