import React from "react";
import Head from "next/head";
import CountriesCard from "../../components/card/CountriesCard";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";

const Countries = () => {
  const context = useAppContext();
  const { countries, fetchCountries } = context;

  useEffect(() => {
    if (countries == null) {
      fetchCountries();
    }
  }, []);
  return (
    <>
      <Head>
        <title>Countries | Expert Vision</title>
        <meta name="description" content="Home" />
      </Head>
      <section className="courses">
        <div className="container">
          <div className="courses-intro my-5">
            <h1>Over seven countries to choose from</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
              cursus consectetur duis congue aenean vitae. Egestas vitae
              dignissim vulputate at volutpat
            </p>
          </div>
          <div className="row">
            {countries &&
              countries.map((data, key) => {
                return (
                  <div className="col-md-3 col-sm-12" key={key}>
                    <CountriesCard
                      slug={data.slug}
                      imagepath={data.image}
                      country={data.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Countries;
