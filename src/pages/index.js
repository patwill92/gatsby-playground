import React from 'react'
import inject from 'react-jss'
import Link from 'gatsby-link'

const styles = theme => ({
    button: {
        color: theme.color
    }
});

const IndexPage = ({classes}) => (
  <div>
    <h1 className={classes.button}>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default inject(styles)(IndexPage)
