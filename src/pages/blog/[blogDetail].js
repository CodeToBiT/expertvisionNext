import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../../context/state";
import { FaRegCalendarAlt } from "react-icons/fa";

const BlogDetail = () => {
  const context = useAppContext();
  const router = useRouter();
  const blogDetail = router.query.blogDetail;
  const { blogs, fetchBlogs } = context;
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    if (blogs == null) {
      fetchBlogs();
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

      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{blog && blog.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12">
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
                  <div className="my-3">
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
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>More Blogs</h3>
                <ul>
                  {blogs &&
                    blogs.slice(0, 4).map((data, key) => {
                      if (data.slug != blogDetail) {
                        return (
                          <li key={key}>
                            <Link
                              href={`/blog/${data.slug}`}
                              className="more-link"
                              target="_blank"
                            >
                              {data.title}
                            </Link>
                          </li>
                        );
                      }
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
