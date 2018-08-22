import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import MainParallax from '../components/MainParallax'

const Landing = props => (
  <div>
    <Helmet>
      <title>Nik Cochran</title>
      <meta name="description" content="Landing Page" />
    </Helmet>

    <div id="main">
      <section id="one">
        <MainParallax />
      </section>
    </div>
  </div>
)

export default Landing
