import React from 'react';
import './Main.css';
import AnimalList from '../AnimalList/AnimalList';
const backgroundImg = './background.png';

export default function Main({ animals }) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      <AnimalList animals={animals} />
    </main>
  );
}