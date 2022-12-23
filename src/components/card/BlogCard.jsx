import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ViewButton } from "../buttons/ButtonBox";

const BlogCard = (props) => {
  return (
    <>
      <div className={["d-grid align-self-stretch" , props.clsa].join(" ")}>
        <div className="card-blog d-grid align-self-stretch">
          <div className="date">
            <ViewButton name="Date" />
          </div>

          <div className="media-wrapper position-relative my-2">
            <Image src={props.imagepath} alt="loading" priority="false" sizes="(max-height: 208px)"  fill />
          </div>

          <h5>{props.title}</h5>

          <p dangerouslySetInnerHTML={{ __html: props.content }}>
          </p>

          <Link href={`/blog/${props.slug}`} className="text-primary-200">
            Read More
          </Link>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
