import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './containers/home/home.jsx';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <section className="router">
          <Route exact path="/" render={() => <Home /> }/>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
