import React, { Component } from 'react';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';

// export default function Main({ animals }) {
//   return (
//     <main style={{ backgroundImage: `url(${backgroundImg})` }}>
//       <AnimalList animals={animals} />
//     </main>
//   );
// }

export default class Main extends Component {
  render() {
    return (
      <main>
        <AnimalList animals={this.props.animals} />
      </main>
    );
  }
}
