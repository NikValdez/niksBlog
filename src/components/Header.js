import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import NikLogo from '../assets/images/NikLogo.png'

const Header = props => (
  <header id="header" className="alt">
    <img src={NikLogo} className="nik-logo" />
    <Link to="/" className="logo">
      <strong>Nik</strong> <span>Cochran</span>
    </Link>
    <nav>
      <a className="menu-link" onClick={props.onToggleMenu} href="javascript:;">
        Menu
      </a>
    </nav>
  </header>
)

Header.propTypes = {
  onToggleMenu: PropTypes.func,
}

export default Header
