import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import BannerLanding from '../components/BannerLanding'
import MainParallax from '../components/MainParallax'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

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
