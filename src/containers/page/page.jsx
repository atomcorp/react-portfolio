import React, { Component } from 'react';

import Header from '../../components/header/header.jsx';

export default class Page extends Component {

  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <section className="page">
        <Header />
        { this.props.children }
      </section>
    );
  }
}