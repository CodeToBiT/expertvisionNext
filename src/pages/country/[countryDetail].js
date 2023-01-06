import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useAppContext } from "../../context/state";

import Image from "next/image";
import Link from "next/link";

const CountryDetail = () => {
  const router = useRouter();
  const context = useAppContext();
  const countryDetail = router.query.countryDetail;
  const [country, setCountry] = useState();
  const { countries, fetchCountries } = context;
  const { blogs, fetchBlogs } = context;

  useEffect(() => {
    fetchCountries();
    if (blogs == null) {
      fetchBlogs();
    }
    countries &&
      countries.map((item) => {
        if (item.slug == countryDetail) {
          setCountry(item);
        }
      });
  }, [countries]);

  let current_url;

  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>
          {country && country.seo_title
            ? country && country.seo_title
            : country && country.title}
        </title>
        <meta
          name="description"
          content={country && country.meta_description}
        />
        <meta name="keywords" content={country && country.meta_keywords} />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="single-banner mt-4">
        <div className="container">
          <div className="title">
            <h1>{country && country.name}</h1>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="pe-5">
                <div className="media-wrapper position-relative">
                  <Image
                    src={
                      country && country.image
                        ? country.image
                        : "/images/logo.png"
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
                        __html: country && country.description,
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
                  countries.slice(0, 4).map((data, key) => {
                    if(data.slug != countryDetail){
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
                          <a href={`/country/${data.slug}`}  className="stretched-link"></a>
                        </div>
                      );
                              }
                  })}
                  <h3 className="mb-1">Check Our Blogs</h3>
                {blogs &&
                  blogs.slice(0, 4).map((data, key) => {
                 
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
                          <a href={`/blog/${data.slug}`}  className="stretched-link"></a>
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

export default CountryDetail;
