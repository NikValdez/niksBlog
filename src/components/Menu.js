import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'

const Menu = props => (
  <nav id="menu">
    <div className="inner">
      <ul className="links">
        <li>
          <Link onClick={props.onToggleMenu} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/basketball">
            Basketball
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/generic">
            Generic
          </Link>
        </li>
        <li>
          <Link onClick={props.onToggleMenu} to="/elements">
            Elements
          </Link>
        </li>
      </ul>
      <ul className="actions vertical">
        <li>
          <a href="#" className="button special fit">
            Get Started
          </a>
        </li>
        <li>
          <a href="#" className="button fit">
            Log In
          </a>
        </li>
      </ul>
    </div>
    <a className="close" onClick={props.onToggleMenu} href="javascript:;">
      Close
    </a>
  </nav>
)

Menu.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Menu
