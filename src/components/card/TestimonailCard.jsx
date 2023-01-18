import React from "react";
import Image from "next/image";
import { RiDoubleQuotesL, RiStarSFill } from "react-icons/ri";

const TestimonailCard = (props) => {
  return (
    <>
      <div className="card-testimonial my-2 d-grid align-self-stretch">
        <div className="media-wrapper position-relative">
          <Image
            src={props.image}
            alt="loading"
            priority="false"
            sizes="(max-height:280px)"
            fill
          />
          <div className="icon d-flex justify-content-center align-items-center">
            <RiDoubleQuotesL />
          </div>
        </div>

        <div className="card-testimonial-content">
          <div dangerouslySetInnerHTML={{ __html: props.description }}></div>
          <div className="bottom mt-auto">
            <h6>{props.name}</h6>
            <h7>{props.position}</h7>
            <div className="rating d-flex gap-1 mt-2">
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
              <RiStarSFill />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonailCard;
