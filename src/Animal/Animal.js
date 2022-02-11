import React, { Component } from 'react';
import './Animal.css';

// export default function Animal({ animal }) {
//   return (
//     <div className='animal-card' style={{ top: animal.top, left: animal.left }}>
//       <img src={`/animals/${animal.type}.svg`} />
//       <p className='name'>{ animal.name }</p>
//       <p>{ animal.says }</p>
//     </div>
//   );
// }

export default class Animal extends Component {
  render() {

    return (
      <div className='animal-card' style={{ top: this.props.animal.top, left: this.props.animal.left }}>
        <img src={`/animals/${this.props.animal.type}.svg`} />
        <p className='name'>{this.props.animal.name}</p>
        <p>{this.props.animal.says}</p>
      </div>
    );
  }
}
