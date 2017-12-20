import React, { Component } from 'react';
import Introduction from '../introduction/introduction.jsx';
import Projects from '../projects/projects.jsx';
import Experience from '../../components/experience/experience.jsx';
import Skills from '../../components/skills/skills.jsx';
import Contact from '../../components/contact/contact.jsx';

export default class Home extends Component {

  render() {
    return (
      <section>
        <Introduction />        
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </section>
    );
  }
}