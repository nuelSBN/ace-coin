import React from 'react';

export default function ExpiryDate({
  expiryDateMonth,
  expiryDateYear,
  setExpiryDateMonth,
  setExpiryDateYear,
}) {
  const handleMonthChange = (e) => {
    const input = e.target.value;
    const numericValue = input.replace(/\D/g, '');
    setExpiryDateMonth(numericValue);
  };

  const handleYearChange = (e) => {
    const input = e.target.value;
    const numericValue = input.replace(/\D/g, '');
    setExpiryDateYear(numericValue);
  };

  return (
    <div className="expiry-date">
      <div className="expiry-date-container">
        <div className="expiry-date-details">
          <h3>Expiry Date</h3>
          <small>Enter the expiration date on the card</small>
        </div>
      </div>
      <div className="expiry-date-container">
        <div className="expiry-date-input-container">
          <input
            type="text"
            placeholder="month"
            value={expiryDateMonth}
            maxLength={2}
            max={12}
            onChange={handleMonthChange}
          />
        </div>
        <span>/</span>
        <div className="expiry-date-input-container">
          <input
            type="text"
            placeholder="year"
            value={expiryDateYear}
            onChange={handleYearChange}
            maxLength={2}
          />
        </div>
      </div>
    </div>
  );
}
