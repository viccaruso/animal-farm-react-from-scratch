import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <h1>{props.text}</h1>
  );
}