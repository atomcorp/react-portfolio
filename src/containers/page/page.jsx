import React, { Component } from 'react';
import Header from '../../components/header/header.jsx';

export default class Page extends Component {

  constructor(props) {
    super(props);
    this.loaded = false;
  }

  componentWillMount() {
    console.log(this.page);
  }

  render() {
    console.log('Run')
    return (
      <section>
        <Header />
        { this.props.children }
      </section>
    );
  }
}