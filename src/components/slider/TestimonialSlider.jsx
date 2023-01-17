import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";

import { useEffect } from "react";

import TestimonailCard from "../card/TestimonailCard";

const TestimonialSlider = (props) => {
  var testimonialSettings = {
    infinite: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  const [testimonials, setTestimonials] = useState([]);
  const fetchTestimonials = () => {
    fetch("https://admin.evc.edu.np/api/testimonials")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTestimonials(data);
      });
  };
  useEffect(() => {
    fetchTestimonials();
  }, []);
  return (
    <>
      <Slider {...testimonialSettings}>
        {testimonials &&
          testimonials.data?.map((data, key) => {
            return (
              <div key={key}>
                <TestimonailCard
                  image={data.image}
                  description={data.description}
                  name={data.name}
                  position={data.position}
                />
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default TestimonialSlider;
