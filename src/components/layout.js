import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Massimo Palmieri - Front-end developer' },
            { name: 'keywords', content: 'front-end, development, engineer, london, react, javascript' },
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500" rel="stylesheet" />
        </Helmet>
        <div>
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
