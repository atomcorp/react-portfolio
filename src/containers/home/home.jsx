import React, { Component } from 'react';
import Introduction from '../introduction/introduction.jsx';
import Projects from '../projects/projects.jsx';
import Experience from '../../components/experience/experience.jsx';
import Skills from '../../components/skills/skills.jsx';
import Contact from '../../components/contact/contact.jsx';
import Page from '../page/page.jsx';
import { BrowserRouter, Route } from 'react-router-dom';

export default class Home extends Component {

  returnSections() {
    const sections = [
      { component: <Projects />, path: "/projects" },
      { component: <Experience />, path: "/experience" },
      { component: <Skills />, path: "/skills" },
      { component: <Contact />, path: "/contact" }
    ];
    return sections;
  }

  returnPages() {
    const sections = this.returnSections();
    const pages = sections.map((section, id) => {
      return (
        <Route key={ id } exact path={ section.path } render={
          () => <Page> { section.component } </Page>
        } />
      );
    })
    return pages;
  }

  render() {
    
    return (
      <BrowserRouter>
        <section className="home">
          <Route exact path="/" component={ Introduction }/>
          { this.returnPages() }
        </section>
      </BrowserRouter>
    );
  }
}