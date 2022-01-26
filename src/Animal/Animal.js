import React from 'react';

export default function Animal({ animal }) {
  return (
    <div className='animal-card' style={{ top: animal.top, left: animal.left }}>
      <img src={`/images/${animal.type}.svg`} />
      <p className='name'>{ animal.name }</p>
      <p>{ animal.says }</p>
    </div>
  );
}
