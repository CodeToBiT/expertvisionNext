import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  const Courses = [
    {
      imagepath: "/images/course.png",
      course: "IELTS",
      desc: "Lorem ipsum dolor sit amet consectetur. Iaculis erat tellus...",
    },
    {
      imagepath: "/images/course.png",
      course: "IELTS",
      desc: "Lorem ipsum dolor sit amet consectetur. Iaculis erat tellus...",
    },
    {
      imagepath: "/images/course.png",
      course: "IELTS",
      desc: "Lorem ipsum dolor sit amet consectetur. Iaculis erat tellus...",
    },
    {
      imagepath: "/images/course.png",
      course: "IELTS",
      desc: "Lorem ipsum dolor sit amet consectetur. Iaculis erat tellus...",
    },
    {
      imagepath: "/images/course.png",
      course: "IELTS",
      desc: "Lorem ipsum dolor sit amet consectetur. Iaculis erat tellus...",
    },
    {
      imagepath: "/images/course.png",
      course: "IELTS",
      desc: "Lorem ipsum dolor sit amet consectetur. Iaculis erat tellus...",
    },
    {
      imagepath: "/images/course.png",
      course: "IELTS",
      desc: "Lorem ipsum dolor sit amet consectetur. Iaculis erat tellus...",
    },
  ];

  return (
    <>
      <Slider {...settings}>
        {Courses &&
          Courses.map((item, key) => {
            return (
              <div key={key}>
                <CourseCard
                  imagepath={item.imagepath}
                  course={item.course}
                  desc={item.desc}
                />
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default CourseSlider;
