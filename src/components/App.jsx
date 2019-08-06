import React, { Component } from 'react'

import NavbarDeconstructed from './NavbarDeconstructed'
import NavbarConstructedFixed from './NavbarConstructedFixed'
import Main from './Main'

// import IconAWS from '../img/aws.svg'
// import IconBootstrap from '../img/bootstrap-symbol.svg'
// import IconCopy from '../img/custom-copy.svg'
// import IconCSS from '../img/custom-css.svg'
// import IconDjango from '../img/djangoproject-icon2.svg'
// import IconEmail from '../img/custom-email-043546.svg'
// import IconFlask from '../img/flask-icon.svg'
// import IconGitHub from '../img/GitHub-043546.svg'
// import IconHackerRank from '../img/HackerRank_logo.svg'
// import IconHeroku from '../img/heroku-icon.svg'
// import IconHTML from '../img/custom-html5.svg'
// import IconJavaScript from '../img/javascript-icon2.svg'
// import IconLinkedIn from '../img/LinkedIn-043546.svg'
// import IconPostgres from '../img/postgresql-icon.svg'
// import IconPython from '../img/custom-python.svg'
// import IconReact from '../img/React-icon2.svg'
// import IconResume from '../img/custom-resume-043546.svg'
// import IconSass from '../img/Sass_Logo_Color.svg'

// import CustomJS from '../js/custom'
// import ExternalJS from '../js/external_links'

// Import custom JavaScript functions
import { addLinkHrefs } from '../js/add-link-hrefs'
import { getNavNetScrapsLocations } from '../js/get-nav-net-scraps-locations'
import { handleScroll } from '../js/handle-scroll'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      nav_net_loc: 0,
      nav_tripwire_loc: 0,
      scrap_brand_loc: 0,
      scrap_links_loc: 0,
    }

    this.handleScroll = handleScroll.bind(this)
  }

  componentDidMount() {

    // Add link locations to 'Projects' and 'Contact' navbar links
    addLinkHrefs()

    // Handle scrolling, navbar net, & scraps (*.setState() is asynchronous, so
    // it's better to attach the scroll event listener -after- the required
    // variables have been set).
    this.setState({
      nav_net_loc: getNavNetScrapsLocations().nav_net_loc,
      nav_tripwire_loc: getNavNetScrapsLocations().nav_tripwire_loc,
      scrap_brand_loc: getNavNetScrapsLocations().scrap_brand_loc,
      scrap_links_loc: getNavNetScrapsLocations().scrap_links_loc,
    }, () => {
      const main = document.querySelector('.main')
      document.querySelector('.main').addEventListener('scroll', () => {
        this.handleScroll(main)
      })
    })

    

  }

  // componentWillUnmount() {
  //   document.querySelector('.main').removeEventListener('scroll', handleScroll)
  // }

  render() {
    return (
      <div className="App">
        {/* <CustomJS /> */}
        <NavbarDeconstructed />
        <NavbarConstructedFixed />
        <Main />

        {/* <ExternalJS /> */}
        {/* <Navbar toggleHamburger={ this.toggleHamburger } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume } /> */}
        {/* <Main IconAWS={ IconAWS } IconBootstrap={ IconBootstrap } IconCopy={ IconCopy } IconCSS={ IconCSS } IconDjango={ IconDjango } IconEmail={ IconEmail } IconFlask={ IconFlask } IconGitHub={ IconGitHub } IconHackerRank={ IconHackerRank } IconHeroku={ IconHeroku } IconHTML={ IconHTML } IconJavaScript={ IconJavaScript} IconLinkedIn={ IconLinkedIn } IconPostgres={ IconPostgres } IconPython={ IconPython } IconReact={ IconReact } IconResume={ IconResume } IconSass={ IconSass } /> */}
        {/* <Footer IconEmail={ IconEmail } IconGitHub={ IconGitHub } IconHackerRank={ IconHackerRank } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume } /> */}
      </div>
    )
  }
}

export default App