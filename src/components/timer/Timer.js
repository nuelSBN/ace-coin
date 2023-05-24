import React, { useEffect, useState } from 'react';
import './timer.css';

export default function Timer() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      setCurrentTime(date);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  return (
    <div className="timer">
      <span>{hours[0]}</span>
      <span>{hours[1]}</span>: <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
    </div>
  );
}
