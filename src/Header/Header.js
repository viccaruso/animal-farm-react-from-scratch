import React from 'react';
import './Header.css';

export default function Header({ greeting }) {
  return (
    <h1>{ greeting }</h1>
  );
}