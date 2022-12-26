import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useAppContext } from "../../context/state";

import Image from "next/image";
import Link from "next/link";

const SinglePage = () => {
  const router = useRouter();
  const context = useAppContext();
  const singlePage = router.query.singlePage;
  const [single, setSingle] = useState();
  const {blogs, fetchBlogs} = context;
  const fetchSingle = async () => {
    const response = await fetch(
      [`https://admin.evc.edu.np/api/`, `page/${singlePage}`].join(""),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept" : "application/json"
        },
      }
    );

    const json = await response.json();

    setSingle(json.data);
  };

  useEffect(() => {
    if (single == null) {
      fetchSingle();
    }
    if (blogs == null){
        fetchBlogs();
    }
  });

  return (
    <>
      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{single && single.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12 pe-5">
              <div className="media-wrapper position-relative">
                <Image
                  src={single && single.image?single.image:"/images/logo.png"}
                  fill
                  alt="loading"
                  priority="false"
                  sized="(max-height: 445px)"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>Check our Blogs</h3>
                <ul>
                  {blogs &&
                    blogs.map((data, key) => {
                      return (
                        <li key={key}>
                          <Link
                            href={`/blog/${data.slug}`}
                            className="more-link"
                          >
                            {data.title}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="single-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 sub">
              <div className="my-3">
                <div
                  dangerouslySetInnerHTML={{ __html: single && single.description }}
                ></div>
              </div>
            </div>
           
          </div>
        </div>
      </section>
    </>
  );
};

export default SinglePage;
