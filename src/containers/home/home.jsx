import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Introduction from '../introduction/introduction.jsx';
import Projects from '../projects/projects.jsx';
import Experience from '../../components/experience/experience.jsx';
import Skills from '../../components/skills/skills.jsx';
import Contact from '../../components/contact/contact.jsx';
import Page from '../page/page.jsx';

export default class Home extends Component {

  constructor(props) {
    super(props);
    this.returnPages = this.returnPages.bind(this);
    this.returnSections = this.returnSections.bind(this);
  }

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
    const pages = sections.map((section) => {
      return (
        <Route key={ section.path } exact path={ section.path } render={
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