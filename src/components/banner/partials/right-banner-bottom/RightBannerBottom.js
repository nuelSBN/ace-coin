import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import { BsBookmarkCheck } from 'react-icons/bs';

export default function RightBannerBottom() {
  return (
    <div className="right-banner-bottom">
      <div className="right-banner-details-top">
        <div className="right-banner-box">
          <span>company</span>
          <b>
            <AiFillApple />
            apple
          </b>
        </div>
        <div className="right-banner-box">
          <span>order number</span>
          <b>8897898</b>
        </div>
        <div className="right-banner-box">
          <span>product</span>
          <b>MacBook air</b>
        </div>
        <div className="right-banner-box">
          <span>VAT(20%)</span>
          <b>${100}.00</b>
        </div>
      </div>
      <div className="right-banner-details-bottom">
        <div>
          <span>You have to pay</span>
          <b>$549.99</b>
        </div>
        <div>
          <BsBookmarkCheck />
        </div>
      </div>
    </div>
  );
}
