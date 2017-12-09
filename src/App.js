import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Introduction from './containers/introduction/introduction.jsx';

import styles from './styles/index.module.css';

class App extends Component {
  render() {
    console.log(styles);
    return (
      <Introduction></Introduction>
    );
  }
}

export default App;
