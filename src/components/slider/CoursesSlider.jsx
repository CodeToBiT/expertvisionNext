import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";

import CourseCard from "../card/CourseCard";

const CourseSlider = (props) => {
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
  const { courses, fetchCourses } = context;

  useEffect(() => {
    if (courses == null) {
      fetchCourses();
    }
  }, []);

  return (
    <>
      <Slider {...settings}>
        {courses &&
          courses.map((data, key) => {
            return (
              <div key={key}>
                <CourseCard
                  slug={data.slug}
                  imagepath={data.image}
                  course={data.name}
                  desc={data.description}
                />
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default CourseSlider;
