import React from 'react';
import './banner.css';
import Header from '../header/Header';
import Form from '../form/Form';
import RightBannerTop from './partials/right-banner-top/RightBannerTop';
import RightBannerBottom from './partials/right-banner-bottom/RightBannerBottom';

export default function Banner() {
  return (
    <main>
      <div className="left-banner">
        <Header />
        <Form />
      </div>
      <div className="right-banner">
        <RightBannerTop />
        <RightBannerBottom />
      </div>
    </main>
  );
}
