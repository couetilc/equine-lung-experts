/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable max-classes-per-file */
import Link from 'next/link';
import { Component } from 'react';

class ListHeader extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <li>
        <h1>{this.state.text}</h1>
      </li>
    );
  }
}


class ListLink extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <li>
        <Link href={this.state.link}>{this.state.text}</Link>
      </li>
    );
  }
}

export default class FooterListing extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  renderAllLinks() {
    return this.state.links
      .map((link, idx) => <ListLink key={idx} {...link} />);
  }

  render() {
    return (
      <ul className="footer-listing col-4">
        <ListHeader {...this.state.header} />
        { this.renderAllLinks()}
      </ul>
    );
  }
}
