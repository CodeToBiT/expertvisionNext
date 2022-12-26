import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import Image from "next/image";
import Link from "next/link";
import { useAppContext } from "../../context/state";


const BlogDetail = () => {
  const context = useAppContext();
  const { blogs, fetchBlogs } = context;
  const router = useRouter();
  const blogDetail = router.query.blogDetail;
  const [blog, setBlog] = useState();
  const fetchBlog = async () => {
    const response = await fetch(
      [`https://admin.evc.edu.np/api/`, `blog/${blogDetail}`].join(""),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
      }
    );

    const json = await response.json();

    setBlog(json.data);
  };

  useEffect(() => {
    if (blog == null) {
      fetchBlog();
    }
    if (blogs == null) {
      fetchBlogs();
    }
  }, []);

  return (
    <>
      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{blog && blog.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12 pe-5">
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
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>More Blogs</h3>
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
                  dangerouslySetInnerHTML={{ __html: blog && blog.description }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetail;
