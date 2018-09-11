import React from 'react'
import { Parallax } from 'react-spring'
import styles from '../assets/css/styles.css'
import Iframe from 'react-iframe'

class Slideshow extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <div className="paralax-background">
        <Parallax
          className="parallax-container"
          ref="parallax"
          pages={3}
          horizontal
          scrolling={true}
        >
          <Iframe
            url="https://www.youtube.com/embed/X5etBoimQMU?rel=0"
            width="45rem"
            height="25rem"
            id="zags-game"
            className="DsonIframe"
            display="initial"
            position="relative"
            allowFullScreen
          />
          <Iframe
            url="https://www.youtube.com/embed/gAAjQoq_nbE?rel=0"
            width="45rem"
            height="25rem"
            id="zags-game"
            className="DsonIframe"
            display="initial"
            position="relative"
            allowFullScreen
          />
          <Iframe
            url="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FTwoPointsBball%2Fvideos%2F866447253368803%2F&show_text=0"
            width="45rem"
            height="30rem"
            id="spain-highlight"
            className="DsonIframe"
            display="initial"
            position="relative"
            allowFullScreen
          />
          <Iframe
            url="https://www.youtube.com/embed/CERn7ftKQEM?rel=0"
            width="45rem"
            height="25rem"
            id="zags-game"
            className="test"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </Parallax>
      </div>
    )
  }
}

export default Slideshow
