import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import vid from '../videos/kansasShot.mp4'

class SimpleParallax extends React.Component {
  render() {
    const styles = {
      fontFamily: 'Menlo-Regular, Menlo, monospace',
      fontSize: 14,
      lineHeight: '10px',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }
    return (
      <Parallax ref="parallax" pages={3}>
        <Parallax.Layer
          offset={0}
          speed={1}
          style={{ backgroundColor: '#243B4A' }}
        />
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: '#243B4A' }}
        />
        <Parallax.Layer
          offset={2}
          speed={1}
          style={{ backgroundColor: '#243B4A' }}
        />

        <Parallax.Layer
          offset={0}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(1)}
          className="lanky-background"
        >
          <div class="btn-wrapper">
            <div class="btn-wrapper__container">
              <div class="btn-inner">
                <a class="btn-inner__text" href="#main">
                  Onward!
                </a>
              </div>
            </div>
          </div>
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={-0.1}
          onClick={() => this.refs.parallax.scrollTo(2)}
        >
          <div className="fullscreen-video-wrap">
            <video muted autoPlay loop id="video-main-page">
              <source src={vid} autoPlay loop autoPlay />
            </video>
          </div>
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={0.5}
          style={styles}
          onClick={() => this.refs.parallax.scrollTo(0)}
        >
          The end.
        </Parallax.Layer>
      </Parallax>
    )
  }
}

export default SimpleParallax
