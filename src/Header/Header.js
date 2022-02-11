import React, { Component } from 'react';
import './Header.css';

// export default function Header({ greeting }) {
//   return (
//     <h1>{ greeting }</h1>
//   );
// }

export default class Header extends Component {
  render() {
    return (
      <h1>{ this.props.greeting }</h1>
    );
  }
}
