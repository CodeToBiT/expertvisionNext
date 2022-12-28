import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CountriesCard from "../card/CountriesCard";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";

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

  const context = useAppContext();
  const { countries, fetchCountries } = context;

  useEffect(() => {
    if (countries == null) {
      fetchCountries();
    }
  }, []);

  return (
    <>
      <Slider {...settings}>
        {countries &&
          countries.map((data) => {
            return (
              <div key={data.id}>
                <CountriesCard
                  slug={data.slug}
                  imagepath={data.image}
                  country={data.name}
                /> 
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default CountriesSlider;
