import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import CountriesCard from "../card/CountriesCard";
import { useState } from "react";

import { GetServerSideProps } from "next";

import { useEffect } from "react";

const CountriesSlider = (props) => {
  var countriesSettings = {
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
  const [countries, setCountries] = useState([]);
  const fetchCountries = () => {
    fetch("https://admin.evc.edu.np/api/countries")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      });
  };
  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <Slider {...countriesSettings}>
        {countries &&
          countries.data?.map((data) => {
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
