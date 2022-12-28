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

  useEffect(() => {
    if (countries == null) {
      fetchCountries();
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
      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{country && country.name}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12">
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
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>More Countries</h3>
                <ul>
                  {countries &&
                    countries.slice(0, 4).map((data, key) => {
                      if (data.slug != countryDetail) {
                        return (
                          <li key={key}>
                            <Link
                              href={`/country/${data.slug}`}
                              className="more-link"
                              target="_blank"
                            >
                              {data.name}
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

export default CountryDetail;
