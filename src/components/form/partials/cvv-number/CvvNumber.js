import React from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

export default function CvvNumber({ cvvNumber, setCvvNumber }) {
  const handleCvvChange = (e) => {
    const input = e.target.value;
    const numericValue = input.replace(/\D/g, '');
    setCvvNumber(numericValue);
  };

  return (
    <div className="ccv-number">
      <div className="ccv-number-container">
        <div className="cvv-number-details">
          <h3>CVV number</h3>
          <small>Enter 3 or 4 number on the card</small>
        </div>
      </div>
      <div className="ccv-number-container">
        <div className="cvv-number-input-container">
          <input
            type="text"
            placeholder="875"
            value={cvvNumber}
            maxLength={4}
            onChange={handleCvvChange}
          />
          <span>
            <BsFillGrid3X3GapFill />
          </span>
        </div>
      </div>
    </div>
  );
}
