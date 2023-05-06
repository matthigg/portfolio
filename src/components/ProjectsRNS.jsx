import React, { Component } from 'react'
import ThumbnailRNS from '../img/thumbnail-rns.jpg'

class ProjectsRNS extends Component {
  render() {
    const { IconAWS, IconExternalLink, LogoBootstrap, LogoDjango, LogoPostgreSQL } = this.props;
    return (
      <div className="row projects-row">

        <div className="col-lg-5">
          <figure className="ext-link-rns">
            <img className="projects-thumbnail" alt="R & S Pressure Washing" src={ ThumbnailRNS } />
          </figure>
        </div>

        <div className="col-lg-7 projects-col">
          <div className="projects-col-top">
            <h2 className="projects-thumbnail-header ext-link-rns">R & S Pressure Washing</h2>
            <p className="projects-thumbnail-description">
              This is a business website for a pressure washing company hosted on 
              Amazon Web Services that uses AWS Simple Email Service (SES) to handle 
              contact form submissions which are backed up using Amazon RDS and 
              PostgreSQL, and it incorporates reCAPTCHA v3 to monitor contact form 
              submissions.
            </p>
            <p className="projects-thumbnail-description">
              It also features image uploading through Django's admin panel 
              which allows the owner to resize, rotate, and adjust the quality of uploaded 
              images using Python's Pillow library.
            </p>
          </div>
          <div className="projects-col-bottom">
            <button className="btn btn-view ext-link-rns">
              <IconExternalLink />
              View Site
            </button>
            <button className="btn btn-source ext-link-rns-github">
              <IconExternalLink />
              Source Code
            </button>
            <div className="projects-tech">
              <button className="btn ext-link-bootstrap"><LogoBootstrap /></button>
              <button className="btn ext-link-django"><LogoDjango /></button>
              <button className="btn ext-link-postgresql"><LogoPostgreSQL /></button>
              <button className="btn ext-link-aws"><IconAWS /></button>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

export default ProjectsRNS