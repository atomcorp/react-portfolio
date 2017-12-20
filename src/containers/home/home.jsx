import React, { Component } from 'react';
import Introduction from '../introduction/introduction.jsx';
import Projects from '../projects/projects.jsx';
import Experience from '../../components/experience/experience.jsx';
import Skills from '../../components/skills/skills.jsx';
import Contact from '../../components/contact/contact.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

export default class Home extends Component {

  render() {
    return (
      <section>
        <BrowserRouter>
          <section className="router">
            <Route exact path="/" component={ Introduction }/>
            <Route exact path="/projects" component={ Projects } />
            <Route exact path="/experience" component={ Experience }/>
            <Route exact path="/skills" component={ Skills }/>
            <Route exact path="/contact" component={ Contact }/>
          </section>
        </BrowserRouter>
      </section>
    );
  }
}