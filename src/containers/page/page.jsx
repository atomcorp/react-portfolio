import React, { Component } from 'react';
import Header from '../../components/header/header.jsx';

export default class Page extends Component {

  constructor(props) {
    super(props);
    this.loaded = false;
  }

  render() {
    return (
      <section>
        <Header />
        { this.props.children }
      </section>
    );
  }
}