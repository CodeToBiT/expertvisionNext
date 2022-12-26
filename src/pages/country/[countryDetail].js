import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useAppContext } from "../../context/state";

import Image from "next/image";
import Link from "next/link";

const countryDetail = () => {
  const router = useRouter();
  const context = useAppContext();
  const countryDetail = router.query.countryDetail;
  const [country, setCountry] = useState();
  const { countries, fetchCountries } = context;
  const fetchCountry = async () => {
    const response = await fetch(
      [`https://admin.evc.edu.np/api/`, `country/${countryDetail}`].join(""),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();

    setCountry(json.data);
  };

  useEffect(() => {
    if (countries == null) {
      fetchCountries();
    }
    if (country == null) {
      fetchCountry();
    }
  });

  return (
    <>
      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{country && country.name}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12 pe-5">
              <div className="media-wrapper position-relative">
                <Image
                  src={country && country.image}
                  fill
                  alt="loading"
                  priority="false"
                  sized="(max-height: 445px)"
                />
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
                  dangerouslySetInnerHTML={{
                    __html: country && country.description,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>More Countries</h3>
                <ul>
                  {countries &&
                    countries.map((data, key) => {
                      return (
                        <li>
                          <Link
                            href={`/country/${data.slug}`}
                            className="more-link"
                          >
                            {data.name}
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

export default countryDetail;
