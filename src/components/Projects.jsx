import React, { Component } from 'react';

// import ProjectsRCPW from './ProjectsRCPW.jsx';
// import ProjectsPinocchios from './ProjectsPinocchios.jsx';
// import ProjectsMicroChat from './ProjectsMicroChat.jsx';
// import ProjectsBookReviews from './ProjectsBookReviews.jsx';

class Projects extends Component {

  render() {

    // Destructure this.props
    // const { IconAWS, IconBootstrap, IconDjango, IconFlask, IconHeroku, IconPostgres } = this.props;

    return (
      <div>
        <span id="anchor-projects"></span>
        <div className="page">
          <h1 className="page-header">Projects</h1>
        </div>
      </div>
    )
  }
}

export default Projects;

// River City Pro Wash, Pinocchio's Pizza & Subs
// <div className="row">
//   <ProjectsRCPW IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconPostgres={ IconPostgres} IconAWS={ IconAWS} />
//   <ProjectsPinocchios IconBootstrap={ IconBootstrap } IconDjango={ IconDjango } IconPostgres={ IconPostgres} IconHeroku={ IconHeroku} />
// </div>

// microChat, Book Reviews w/Goodreads
// <div className="row">
//   <ProjectsMicroChat IconBootstrap={ IconBootstrap } IconFlask={ IconFlask } IconHeroku={ IconHeroku} />
//   <ProjectsBookReviews IconBootstrap={ IconBootstrap } IconFlask={ IconFlask } IconPostgres={ IconPostgres} IconHeroku={ IconHeroku} />
// </div>