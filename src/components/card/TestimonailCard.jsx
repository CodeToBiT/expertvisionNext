import React from "react";
import Image from "next/image";
import { RiDoubleQuotesL, RiStarSFill } from "react-icons/ri";

const TestimonailCard = (props) => {
  return (
    <>
      <div className="card-testimonial d-grid align-self-stretch my-2">
        <div className="media-wrapper position-relative">
          <Image
            src={props.image}
            alt="loading"
            priority="false"
            sizes="(max-height:280px)"
            fill
          />
        </div>

        <div className="icon d-flex justify-content-center align-items-center">
          <RiDoubleQuotesL />
        </div>

        <div className="card-testimonial-content h-100">
          <div dangerouslySetInnerHTML={{ __html: props.description}}></div>

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
    </>
  );
};

export default TestimonailCard;
