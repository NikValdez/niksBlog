import React from 'react'
import Typing from './Typing'
import { Parallax } from 'react-spring'
import DownArrow from '../assets/images/down-arrow.png'

class Banner extends React.Component {
  render() {
    return (
      <section id="banner" className="major">
        <div className="inner">
          <header className="major">
            <h1 className="typing-title">
              <Typing />
            </h1>
          </header>
          <div className="content">
            <ul className="actions">
              <div class="btn-wrapper">
                <div class="btn-wrapper__container">
                  <div class="btn-inner">
                    <a class="btn-inner__text" href="#main">
                      Onward!
                    </a>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner
