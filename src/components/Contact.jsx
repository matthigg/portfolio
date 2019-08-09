import React, { Component } from 'react'

import IconCopy from '../img/svg-components/icon-copy'
import IconEmail from '../img/svg-components/icon-email'
import IconGitHub from '../img/svg-components/icon-github'
import IconLinkedIn from '../img/svg-components/icon-linkedin'

class Contact extends Component {
  render() {
    return (
      <div>
        <span id="anchor-contact"></span>
        <div className="page">
          <h1 className="page-header">Contact</h1>
          <div className="row contact-row">

            <div className="col-md-6">
              <form action="" method="POST">
                <div className="contact-input">
                  <input name="contact_name" id="contact-name-input" className="contact-input-field" type="text" required placeholder="name" />
                  <label htmlFor="contact-name" className="floating-placeholder">Name</label>
                </div>
                <div className="contact-input">
                  <input name="contact_email" id="contact-email-input" className="contact-input-field" type="text" required placeholder="email" />
                  <label htmlFor="contact-email" className="floating-placeholder">Email</label>
                </div>
                <div className="contact-input">
                  <textarea name="contact_message" 
                            id="contact-message-input" 
                            className="contact-input-field" 
                            cols="10" rows="5"
                            required placeholder="message"></textarea>
                  <label htmlFor="contact-message" className="floating-placeholder">Message</label>
                </div>
              </form>
              <button id="contact-button-send" className="btn">Send Message</button>
            </div>

            <div className="col-md-6">
              <div className="contact-link-wrapper">
                <button className="btn contact-icon-wrapper contact-link-email">
                  <IconEmail /> 
                  <span className="contact-text-email"></span>
                </button>
                <button className="contact-ctc contact-ctc-email"><IconCopy /></button>
              </div>
              <div className="contact-link-wrapper">
                <button className="btn contact-icon-wrapper contact-link-github">
                  <IconGitHub /> 
                  <span className="contact-text-github"></span>
                </button>
                {/* <span className="contact-ctc contact-ctc-github"><IconCopy /></span> */}
              </div>
              <div className="contact-link-wrapper">
                <button className="btn contact-icon-wrapper contact-link-linkedin">
                  <IconLinkedIn /> 
                  <span className="contact-text-linkedin"></span>
                </button>
                {/* <span className="contact-ctc contact-ctc-linkedin"><IconCopy /></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Contact