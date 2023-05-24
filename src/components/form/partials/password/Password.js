import React from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';

export default function Password({ password, setPassword }) {
  return (
    <div className="password">
      <div className="password-container">
        <div className="password-details">
          <h3>password</h3>
          <small>Enter your Dynamic password</small>
        </div>
      </div>
      <div className="password-container">
        <div className="password-input-container">
          <input
            type="password"
            placeholder="0000"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>
            <BsFillGrid3X3GapFill />
          </span>
        </div>
      </div>
    </div>
  );
}
