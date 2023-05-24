import React from 'react';
import './form.css';
import CardNumber from './partials/card-number/CardNumber';
import CvvNumber from './partials/cvv-number/CvvNumber';
import ExpiryDate from './partials/expiry-date/ExpiryDate';
import Password from './partials/password/Password';
import { useGlobalContext } from '../../context';

export default function Form() {
  const {
    formData,
    updateCardNumber,
    updateCvvNumber,
    updateExpiryMonth,
    updateExpiryYear,
    updatePassword,
  } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem('cardNumber', formData.cardNumber);
    localStorage.setItem('cvvNumber', formData.cvvNumber);
    localStorage.setItem('expiryDateMonth', formData.expiryDateMonth);
    localStorage.setItem('expiryDateYear', formData.expiryDateYear);
    localStorage.setItem('password', formData.password);

    updateCardNumber(['', '', '', '']);
    updateCvvNumber('');
    updateExpiryMonth('');
    updateExpiryYear('');
    updatePassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardNumber
        cardNumber={formData.cardNumber}
        setCardNumber={updateCardNumber}
      />
      <CvvNumber
        cvvNumber={formData.cvvNumber}
        setCvvNumber={updateCvvNumber}
      />
      <ExpiryDate
        expiryDateMonth={formData.expiryDateMonth}
        expiryDateYear={formData.expiryDateYear}
        setExpiryDateMonth={updateExpiryMonth}
        setExpiryDateYear={updateExpiryYear}
      />
      <Password password={formData.password} setPassword={updatePassword} />
      <div className="submit-btn">
        <button>pay now</button>
      </div>
    </form>
  );
}
