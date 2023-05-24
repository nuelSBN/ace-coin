import React from 'react';
import './logo.css';
import { AiFillCreditCard } from 'react-icons/ai';

export default function Logo() {
  return (
    <figure>
      <span className="logo_icon_container">
        <AiFillCreditCard className="logo_icon" />
      </span>
      <h1 className="logo_text">
        AceCoin<span>Pay</span>
      </h1>
    </figure>
  );
}
