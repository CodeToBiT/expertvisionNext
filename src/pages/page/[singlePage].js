import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";

const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseBlogs = await fetch([url, "blogs"].join(""));
  const blogs = await responseBlogs.json();
  const responseCountries = await fetch([url, "countries"].join(""));
  const countries = await responseCountries.json();
  const responsePages = await fetch([url, "pages"].join(""));
  const pages = await responsePages.json();

  return {
    props: {
      blogs,
      countries,
      pages,
    },
  };
}

const SinglePage = ({ blogs, countries, pages }) => {
  const router = useRouter();

  const singlePage = router.query.singlePage;
  const [single, setSingle] = useState();

  useEffect(() => {
    pages &&
      pages.data.map((item) => {
        if (item.slug == singlePage) {
          setSingle(item);
        }
      });
  }, [pages]);

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
            <div className="col-md-8 col-sm-12">
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
            <div className="col-md-4 col-sm-12">
              <div className="more my-3">
                <h3 className="mt-5">Featured Destinations</h3>
                {countries &&
                  countries.data.slice(0, 4).map((data, key) => {
                    return (
                      <div className="card-more">
                        <div className="row">
                          <div className="col-md-4 col-sm-12">
                            <div className="media-wrapper position-relative">
                              <Link
                                href={`/country/${data.slug}`}
                                className="stretched-link"
                              >
                                <Image src={data.image} fill />
                              </Link>
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

export default SinglePage;
