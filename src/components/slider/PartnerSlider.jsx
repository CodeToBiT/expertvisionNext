import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";

const PartnerSlider = () => {
  const context = useAppContext();
  const { partners, fetchPartners } = context;

  useEffect(() => {
    if (partners == null) {
      fetchPartners();
    }
  }, [partners]);
  var settings = {
    infinite: true,
    autoplay: true,
    speech: 1000,
    autoplaySpeed: 1500,
    slidesToShow: 6,
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
  return (
    <>
      <Slider {...settings}>
        {partners &&
          partners.map((data, key) => {
            return (
              <div className="d-flex justify-content-center">
                <div className="media-wrapper position-relative" key={key}>
                  <Link
                    href={data.link == null ? "#" : data.link}
                    target="_blank"
                  >
                    <Image
                      src={data.image}
                      alt="loading"
                      priority="false"
                      sizes="(max-height: 125px)"
                      fill
                    />
                  </Link>
                </div>
              </div>
            );
          })}
      </Slider>
    </>
  );
};

export default PartnerSlider;
