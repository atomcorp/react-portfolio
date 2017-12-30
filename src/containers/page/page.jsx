import React, { Component } from 'react';
import Header from '../../components/header/header.jsx';
import Footer from '../../components/footer/footer.jsx';

export default class Page extends Component {

  constructor(props) {
    super(props);
    this.loaded = false;
  }

  componentWillMount() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <section>
        <Header />
        { this.props.children }
        <Footer />
      </section>
    );
  }
}