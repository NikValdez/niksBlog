import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Banner from '../components/Banner'
import SimpleParallax from '../components/SimpleParallax'
import Footer from '../components/Footer'

class HomeIndex extends React.Component {
  render() {
    const siteTitle = 'Nik Cochran'
    const siteDescription = this.props.data.site.siteMetadata.description

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>

        <Banner />

        <div id="main">
          <SimpleParallax />
        </div>

        <Footer />
      </div>
    )
  }
}

export default HomeIndex

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
