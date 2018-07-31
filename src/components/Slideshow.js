import React from 'react'
import { Parallax } from 'react-spring'
import styles from '../assets/css/styles.css'
import Iframe from 'react-iframe'

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </Parallax.Layer>
  </React.Fragment>
)

class Slideshow extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <div>
        <Parallax
          className="container"
          ref="parallax"
          pages={3}
          horizontal
          scrolling={false}
        >
          <a href="nerdvestor.com" target="blank">
            <Page
              offset={0}
              gradient="pink"
              caption={<a href="nerdvestor.com">Test</a>}
              first="Lorem ipsum"
              second="dolor sit"
              onClick={() => this.scroll(1)}
            />
          </a>
          <Page
            offset={1}
            gradient="teal"
            caption="This is a test"
            second="adipiscing elit"
            onClick={() => this.scroll(2)}
          />
          <Page
            offset={2}
            gradient="tomato"
            caption="what we want"
            first="Morbi quis"
            second="est dignissim"
            onClick={() => this.scroll(0)}
          />
        </Parallax>
      </div>
    )
  }
}

export default Slideshow
