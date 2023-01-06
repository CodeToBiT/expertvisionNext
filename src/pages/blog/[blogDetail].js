import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../../context/state";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogDetail = () => {
  const router = useRouter();
  const context = useAppContext();
  const blogDetail = router.query.blogDetail;
  const { blogs, fetchBlogs } = context;
  const { countries, fetchCountries } = context;
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetchBlogs();
    if (countries == null) {
      fetchCountries();
    }

    blogs &&
      blogs.map((item) => {
        if (item.slug == blogDetail) {
          setBlog(item);
        }
      });
  }, [blogs]);
  let current_url;

  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>
          {blog && blog.seo_title ? blog && blog.seo_title : blog && blog.title}
        </title>
        <meta name="description" content={blog && blog.meta_description} />
        <meta name="keywords" content={blog && blog.meta_keywords} />
        <link rel="canonical" href={current_url} />
      </Head>

      <section className="single-banner mt-4">
        <div className="container">
          <div className="title">
            <h1>{blog && blog.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="pe-5">
                <div className="media-wrapper position-relative">
                  <Image
                    src={blog && blog.image ? blog.image : "/images/logo.png"}
                    fill
                    alt="loading"
                    priority="false"
                    sized="(max-height: 445px)"
                  />
                </div>
              </div>
              <div className="single-content">
                <div className="sub">
                  <div className="my-5">
                    <h2 className="date d-flex gap-2 align-items-baseline">
                      <FaRegCalendarAlt />
                      {blog && blog.date}
                    </h2>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: blog && blog.description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
            <div className="more my-3">
                <h3 className="mb-1">More Blogs</h3>
                {blogs &&
                  blogs.slice(0, 4).map((data, key) => {
                    if (data.slug != blogDetail) {
                      return (
                        <div className="card-more">
                          <div className="row">
                            <div className="col-md-4 col-sm-12">
                              <div className="media-wrapper position-relative">
                                <Image src={data.image} fill />
                              </div>
                            </div>
                            <div className="col-md-8 col-sm-12">
                              <h5>{data.title}</h5>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: data.short_description,
                                }}
                              ></p>
                            </div>
                          </div>
                          <a href="" className="stretched-link"></a>
                        </div>
                      );
                    }
                  })}
                <h3 className="mt-5">Featured Destinations</h3>
                {countries &&
                  countries.slice(0, 4).map((data, key) => {
                      return (
                        <div className="card-more">
                          <div className="row">
                            <div className="col-md-4 col-sm-12">
                              <div className="media-wrapper position-relative">
                                <Image src={data.image} fill />
                              </div>
                            </div>
                            <div className="col-md-8 col-sm-12">
                              <h5>{data.name}</h5>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: data.short_description,
                                }}
                              ></p>
                            </div>
                          </div>
                          <a href="" className="stretched-link"></a>
                        </div>
                      );
                    
                  })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
