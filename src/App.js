import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './containers/introduction/introduction.jsx';

import styles from './styles/Index.module.css';

class App extends Component {
  render() {
    console.log(styles);
    return (
      <div className="App">
        <header className={styles.AppHeader}>
          <img src={logo} className="App-logo " alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Introduction></Introduction>
      </div>
    );
  }
}

export default App;
