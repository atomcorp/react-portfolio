import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Introduction from './containers/introduction/introduction.jsx';
import Projects from './containers/projects/projects.jsx';
import ProjectPage from './components/project--page/project--page.jsx';
import Experience from './components/experience/experience.jsx';
import Skills from './components/skills/skills.jsx';
import { content } from './content.js';

class App extends Component {

  returnProductPageRoutes() {
    const routes = content.projects.map((project) => {
      const link = `/projects${project.link}`;
      return (
        // https://github.com/ReactTraining/react-router/issues/4105#issuecomment-291834881
        <Route key={ link } exact path={ link } render={()=><ProjectPage project={project} />}/>
      );
    })
    return routes;
  }

  render() {
    return (
      <BrowserRouter>
        <section className="router">
          <Introduction />
          <Projects />
          <Experience />
          <Skills />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
