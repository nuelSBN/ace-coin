import React from 'react';
import './header.css';
import Logo from '../logo/Logo';
import Timer from '../timer/Timer';

export default function Header() {
  return (
    <header>
      <Logo />
      <Timer />
    </header>
  );
}
