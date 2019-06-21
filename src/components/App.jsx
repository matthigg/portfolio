import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Footer from './Footer';

import IconAWS from '../img/aws.svg';
import IconBootstrap from '../img/bootstrap - symbol.svg';
import IconCopy from '../img/custom-copy.svg';
import IconCSS from '../img/custom-css.svg';
import IconDjango from '../img/djangoproject-icon2.svg';
import IconEmail from '../img/custom-email-043546.svg';
import IconFlask from '../img/flask-icon.svg';
import IconGitHub from '../img/GitHub-043546.svg';
import IconHackerRank from '../img/HackerRank_logo.svg';
import IconHeroku from '../img/heroku-icon.svg';
import IconHTML from '../img/custom-html5.svg';
import IconJavaScript from '../img/custom-javascript.svg';
import IconLinkedIn from '../img/LinkedIn-043546.svg';
import IconPostgres from '../img/postgresql-icon.svg';
import IconPython from '../img/custom-python.svg';
import IconReact from '../img/React-icon2.svg';
import IconResume from '../img/custom-resume-043546.svg';
import IconSass from '../img/Sass_Logo_Color.svg';

import '../js/external_links';

class App extends Component {
  state = {

  }

  toggleHamburger = () => {
    let navbar_toggler = document.querySelector('.navbar-toggler');
    if (navbar_toggler.classList.contains('close-navbar-toggler')) {
      navbar_toggler.classList.remove('close-navbar-toggler');
    } else {
      navbar_toggler.classList.add('close-navbar-toggler');
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar toggleHamburger={ this.toggleHamburger } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume } />
        <Main IconAWS={ IconAWS } IconBootstrap={ IconBootstrap } IconCopy={ IconCopy } IconCSS={ IconCSS } IconDjango={ IconDjango } IconEmail={ IconEmail } IconFlask={ IconFlask } IconGitHub={ IconGitHub } IconHackerRank={ IconHackerRank } IconHeroku={ IconHeroku } IconHTML={ IconHTML } IconJavaScript={ IconJavaScript} IconLinkedIn={ IconLinkedIn } IconPostgres={ IconPostgres } IconPython={ IconPython } IconReact={ IconReact } IconResume={ IconResume } IconSass={ IconSass } />
        <Footer IconEmail={ IconEmail } IconGitHub={ IconGitHub } IconHackerRank={ IconHackerRank } IconLinkedIn={ IconLinkedIn } IconResume={ IconResume } />
      </div>
    );
  }
}

export default App;