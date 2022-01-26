import React from 'react';
import './Animal.css';

export default function Animal({ animal }) {
  return (
    <div className='animal-card' style={{ top: animal.top, left: animal.left }}>
      <img src={`/animals/${animal.type}.svg`} />
      <p className='name'>{ animal.name }</p>
      <p>{ animal.says }</p>
    </div>
  );
}
