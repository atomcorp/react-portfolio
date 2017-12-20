import React, { Component } from 'react';

export default class Page extends Component {

  render() {
    return (
      <section className="router">
        { this.props.children }
        <div>footer</div>
      </section>
    );
  }
}