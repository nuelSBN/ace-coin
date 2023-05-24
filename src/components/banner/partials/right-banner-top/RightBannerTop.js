import React from 'react';
import { AiOutlineWifi } from 'react-icons/ai';
import { BsSim } from 'react-icons/bs';
import { useGlobalContext } from '../../../../context';

export default function RightBannerTop() {
  const { formData } = useGlobalContext();

  const { cardNumber, expiryDateMonth, expiryDateYear } = formData;

  const fullname = 'emmanuel igwenagu';
  const lastNum = cardNumber[3] || '0000';
  const dateMonth = expiryDateMonth || '00';
  const dateYear = expiryDateYear || '00';

  return (
    <div className="right-banner-top">
      <div className="right-banner-top-heading">
        <span>
          <BsSim />
        </span>
        <span>
          <AiOutlineWifi />
        </span>
      </div>
      <div className="right-banner-top-below">
        <div className="right-banner-top-details">
          <h4>{fullname}</h4>
          <div className="card-num">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <b>{lastNum}</b>
          </div>
        </div>
        <div className="right-banner-bottom-details">
          <b className="right-banner-bottom-date">
            {dateMonth}/{dateYear}
          </b>
          <img
            src="https://cdn0.erstegroup.com/content/sites/rs/ebs/www_erstebank_rs/en/Stanovnistvo/Kartice/Mastercard/jcr:content/configuration/pageTeasers/default/image.fitIn.w1200.png/15385696194461486473327516.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
