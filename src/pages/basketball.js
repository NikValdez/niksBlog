import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import vid from '../videos/ry-highlight.mp4'
import Typist from 'react-typist'

import Slideshow from '../components/Slideshow'

const Basketball = props => (
  <div>
    <Helmet>
      <title>My Basketball Career</title>
      <meta name="description" content="Basketball Page" />
    </Helmet>

    <div class="fullscreen-video-wrap">
      <h1>
        <Typist className="video-scroll">
          <Typist.Delay ms={200} />
          <span>Scroll at the bottom to see more videos</span>
        </Typist>
      </h1>
      <video muted autoPlay loop id="video">
        <source src={vid} autoPlay loop autoPlay />
      </video>

      <Slideshow />
    </div>
  </div>
)

export default Basketball
