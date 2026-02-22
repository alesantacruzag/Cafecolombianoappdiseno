import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MastercardBanner } from './banners/MastercardBanner';
import { FreeShippingBanner } from './banners/FreeShippingBanner';
import { ExperienceBanner } from './banners/ExperienceBanner';

export function BannerCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ bottom: "-30px" }}>
        <ul className="m-0 p-0 flex justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i: number) => (
      <div className="w-2 h-2 rounded-full bg-[#E5E5E5] transition-colors slick-active:bg-[#4B5563]" />
    )
  };

  return (
    <div className="relative mb-10 px-4">
      <Slider {...settings} className="banner-slider">
        <div className="outline-none">
          <MastercardBanner />
        </div>
        <div className="outline-none">
          <FreeShippingBanner />
        </div>
        <div className="outline-none">
          <ExperienceBanner />
        </div>
      </Slider>
      <style>{`
        .banner-slider .slick-dots li {
          width: 8px;
          height: 8px;
          margin: 0 4px;
        }
        .banner-slider .slick-dots li div {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #E0E0E0;
        }
        .banner-slider .slick-dots li.slick-active div {
          background: #4A4A4A;
        }
      `}</style>
    </div>
  );
}
