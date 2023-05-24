import React, { useRef } from 'react';
import { BsFillPenFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';

export default function CardNumber({ cardNumber, setCardNumber }) {
  const inputRefs = useRef([]);

  const handleInputChange = (e, index) => {
    const inputValue = e.target.value;
    const numericValue = inputValue.replace(/\D/g, '');
    const newValues = [...cardNumber];
    newValues[index] = numericValue;
    setCardNumber(newValues);

    if (numericValue.length === 4 && index < newValues.length - 1) {
      setTimeout(() => {
        inputRefs.current[index + 1].focus();
      }, 0);
    }
  };

  const handleInputRef = (ref, index) => {
    inputRefs.current[index] = ref;
  };

  return (
    <div className="card-number-container">
      <div className="card-number">
        <div className="card-number-details">
          <h3>card number</h3>
          <small>Enter the 16-digit number on the card</small>
        </div>
        <div className="card-number-option">
          <span>
            <BsFillPenFill />
          </span>
          <span>edit</span>
        </div>
      </div>
      <div className="card-number-input-container">
        <div className="card-number-inputs">
          <img
            src="https://th.bing.com/th/id/R.19b26a981afda41575d775f6c0a2aebd?rik=yamkFiPAQqqucw&pid=ImgRaw&r=0"
            alt=""
          />
          {cardNumber.map((value, index) => (
            <React.Fragment key={index}>
              <input
                type="text"
                placeholder="XXXX"
                maxLength={4}
                onChange={(e) => handleInputChange(e, index)}
                value={value}
                ref={(ref) => handleInputRef(ref, index)}
              />
              {index < cardNumber.length - 1 && <span>-</span>}
            </React.Fragment>
          ))}
        </div>
        <div className="card-number-check">
          <span>
            <GoVerified />
          </span>
        </div>
      </div>
    </div>
  );
}
