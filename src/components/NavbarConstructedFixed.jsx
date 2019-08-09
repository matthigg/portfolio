// Navbar Constructed Fixed
import React, { Component } from 'react'

import IconResume from '../img/svg-components/icon-resume'

class NavbarConstructedFixed extends Component {
  render() {
    return (
      <nav className="nav-fixed scraps-collected nav-fixed-vanish">
        <div className="scrap-collected fixed brand">      
          Mustachio the Pistachio
          <span className="brand-sub">Web Developer</span>
        </div>
        <div className="scrap-collected fixed links">
          <button className="scrap-collected fixed link-projects">Projects</button>
          <button className="scrap-collected fixed link-contact">Contact</button>
          <button className="scrap-collected fixed link-resume"><IconResume /></button>
        </div>
      </nav>
    )
  }
}

export default NavbarConstructedFixed