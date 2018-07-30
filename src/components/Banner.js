import React from 'react'
import Typing from './Typing'

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
              <li>
                <a href="#one" className="button next scrolly">
                  Get Started
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
}

export default Banner
