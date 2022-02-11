import React, { Component } from 'react';
import './Footer.css';

// export default function Footer({ email }) {
//   return (
//     <footer>{ email }</footer>
//   );
// }


export default class Footer extends Component {
  render() {
    return (
      <footer>{ this.props.email }</footer>
    );
  }
}
