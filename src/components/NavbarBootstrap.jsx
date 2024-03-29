import React, { Component } from 'react'

import IconHamburger from '../img/svg-components/icon-hamburger'

class NavbarBootstrap extends Component {
  render() {
    return (
      <nav className="navbar">
        
        <a className="navbar-brand" href="www.matthigg.com">Brand</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-bootstrap" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
          <IconHamburger />
        </button>

        <div className="collapse navbar-collapse" id="nav-bootstrap">
        {/* <div className="collapse-left navbar-collapse-left" id="nav-bootstrap"> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#anchor-projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#anchor-contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.matthigg.com">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.matthigg.com">GitHub</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="www.matthigg.com">LinkedIn</a>
            </li>
          </ul>
        </div>

      </nav>
    )
  }
}

export default NavbarBootstrap