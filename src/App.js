import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Introduction from './containers/introduction/introduction.jsx';
import Projects from './containers/projects/projects.jsx';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section>
          <Route exact path="/" component={ Introduction }/>
          <Route exact path="/projects" component={ Projects }/>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
