import React, { Component, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

// export async function getServerSideProps() {
//   const responsePartners = await fetch([url, "partners"].join(""));
//   const partners = await responsePartners.json();

//   return {
//     props: {
//       partners,
//     },
//   };
// }

const PartnerSlider = () => {
  var partnerSettings = {
    infinite: true,
    autoplay: true,
    speech: 2000,
    autoplaySpeed: 2000,
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
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  const [partners, setPartners] = useState([]);
  const fetchPartners = () => {
    fetch("https://admin.evc.edu.np/api/partners")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPartners(data);
      });
  };
  useEffect(() => {
    fetchPartners();
  }, []);
  return (
    <>
      <Slider {...partnerSettings}>
        {partners.data?.map((data, key) => {
          return (
            <div className="d-flex justify-content-center" key={key}>
              <div className="media-wrapper position-relative" key={key}>
                <Link
                  href={data.link == null || data.link == "/"  ? "javascript:void(0)" : data.link}
                  target={data.link == null || data.link == "/"  ? "_self" : "_blank"}
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
