import React from 'react'
import Footer from './Footer'
import Iframe from 'react-iframe'

import { Parallax } from 'react-spring'
const url = (name, wrap = false) =>
  `${
    wrap ? 'url(' : ''
  }https://awv3node-homepage.surge.sh/build/assets/${name}.svg${
    wrap ? ')' : ''
  }`
const Pink = ({ children }) => (
  <span style={{ color: '#FF6AC1' }}>{children}</span>
)
const Yellow = ({ children }) => (
  <span style={{ color: '#EFF59B' }}>{children}</span>
)
const Lightblue = ({ children }) => (
  <span style={{ color: '#9AEDFE' }}>{children}</span>
)
const Green = ({ children }) => (
  <span style={{ color: '#57EE89' }}>{children}</span>
)
const Blue = ({ children }) => (
  <span style={{ color: '#57C7FF' }}>{children}</span>
)
const Gray = ({ children }) => (
  <span style={{ color: '#909090' }}>{children}</span>
)

class MainParallax extends React.Component {
  render() {
    return (
      <section>
        <Parallax ref={ref => (this.parallax = ref)} pages={3}>
          <Parallax.Layer
            offset={1}
            speed={1}
            style={{ backgroundColor: '#1d0621' }}
          />
          <Parallax.Layer
            offset={2}
            speed={1}
            style={{ backgroundColor: 'black' }}
          />

          <Parallax.Layer
            offset={0}
            speed={0}
            factor={3}
            style={{
              backgroundImage: url('stars', true),
              backgroundSize: 'cover',
            }}
          />

          <Parallax.Layer
            offset={1.3}
            speed={-0.3}
            style={{ pointerEvents: 'none' }}
          />

          <Parallax.Layer offset={1} speed={0.8} style={{ opacity: 0.1 }} />

          <Parallax.Layer offset={1.75} speed={0.5} style={{ opacity: 0.1 }} />

          <Parallax.Layer offset={1} speed={0.2} style={{ opacity: 0.2 }} />

          <Parallax.Layer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }} />

          <Parallax.Layer offset={2.6} speed={0.4} style={{ opacity: 0.6 }} />

          <Parallax.Layer
            offset={2.5}
            speed={-0.4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              pointerEvents: 'none',
            }}
          />

          <Parallax.Layer
            offset={2}
            speed={-0.3}
            style={{
              backgroundSize: '80%',
              backgroundPosition: 'center',
            }}
          />

          <Parallax.Layer
            offset={0}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(1)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Iframe
              url="https://www.youtube.com/embed/X5etBoimQMU?rel=0"
              width="50rem"
              height="30rem"
              id="myId"
              className="DsonIframe"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={1}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(2)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Iframe
              url="https://www.youtube.com/embed/gAAjQoq_nbE?rel=0"
              width="50rem"
              height="30rem"
              id="myId"
              className="DsonIframe"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={2}
            speed={0.1}
            onClick={() => this.parallax.scrollTo(3)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => this.parallax.scrollTo(0)}
          >
            <Iframe
              url="https://www.youtube.com/embed/X5etBoimQMU?rel=0"
              width="50rem"
              height="30rem"
              id="myId"
              className="DsonIframe"
              display="initial"
              position="relative"
              allowFullScreen
            />
          </Parallax.Layer>

          <Parallax.Layer
            offset={3}
            speed={-0}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onClick={() => this.parallax.scrollTo(0)}
          />
        </Parallax>
      </section>
    )
  }
}

export default MainParallax
