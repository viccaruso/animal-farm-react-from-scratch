import React, { Component } from 'react';
import Animal from '../Animal/Animal';
import './AnimalList.css';

// export default function AnimalList({ animals }) {
//   return (
//     <div className='animal-container'>
//       {
//         animals.map((animal, i) => <Animal key={`${animal.name + i}`} animal={animal} />)
//       }
//     </div>
//   );
// }


export default class AnimalList extends Component {
  render() {
    return (
      <div className='animal-container'>
        {
          this.props.animals.map((animal, i) => <Animal key={`${animal.name + i}`} animal={animal} />)
        }
      </div>
    );
  }
}
