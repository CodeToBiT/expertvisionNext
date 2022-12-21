import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CountriesCard from "../card/CountriesCard";

const CountriesSlider = (props) => {
  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const Countries = [
    { imagepath: "/images/country1.png", country: "USA" },
    { imagepath: "/images/country2.png", country: "Canada" },
    { imagepath: "/images/country3.png", country: "Australia" },
    { imagepath: "/images/country4.png", country: "United Kingdom" },
    { imagepath: "/images/country1.png", country: "USA" },
    { imagepath: "/images/country2.png", country: "Canada" },
    { imagepath: "/images/country3.png", country: "Australia" },
    { imagepath: "/images/country4.png", country: "United Kingdom" },
    { imagepath: "/images/country1.png", country: "USA" },
    { imagepath: "/images/country2.png", country: "Canada" },
    { imagepath: "/images/country3.png", country: "Australia" },
    { imagepath: "/images/country4.png", country: "United Kingdom" },
  ];

  return (
    <>
      <Slider {...settings}>
        {Countries &&
          Countries.map((item, key) => {
            return (
              <div key={key}>
                <CountriesCard
                  imagepath={item.imagepath}
                  country={item.country}
                />
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default CountriesSlider;
