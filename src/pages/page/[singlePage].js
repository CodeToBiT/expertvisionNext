import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useAppContext } from "../../context/state";

import Image from "next/image";
import Link from "next/link";

const SinglePage = () => {
  const router = useRouter();
  const context = useAppContext();
  const singlePage = router.query.singlePage;
  const [single, setSingle] = useState();
  const { blogs, fetchBlogs } = context;
  const { pages, fetchPages } = context;

  useEffect(() => {

      fetchPages();

    if (blogs == null) {
      fetchBlogs();
    }

    pages &&
      pages.map((item) => {
        if (item.slug == singlePage) {
          setSingle(item);
        }
      });
  }, []);

  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>
          {single && single.seo_title
            ? single && single.seo_title
            : single && single.title}
        </title>
        <meta name="description" content={single && single.meta_description} />
        <meta name="keywords" content={single && single.meta_keywords} />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{single && single.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <div className="pe-5">
                <div className="media-wrapper position-relative">
                  <Image
                    src={
                      single && single.image ? single.image : "/images/logo.png"
                    }
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
                    <div
                      dangerouslySetInnerHTML={{
                        __html: single && single.description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>Check our Blogs</h3>
                <ul>
                  {blogs &&
                    blogs.slice(0,4).map((data, key) => {
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
    </>
  );
};

export default SinglePage;
