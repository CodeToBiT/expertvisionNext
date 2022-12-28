import React from "react";
import Head from "next/head";
import CountriesCard from "../../components/card/CountriesCard";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";

const Countries = () => {
  const context = useAppContext();
  const { countries, fetchCountries, settings, fetchSettings} = context;

  useEffect(() => {
    if (countries == null) {
      fetchCountries();
    }
    if (countries == null) {
      fetchSettings();
    }
  }, []);

  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }
  return (
    <>
      <Head>
        <title>{settings && settings.countries_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.countries_meta_description}
        />
        <meta name="keywords" content={settings && settings.countires_meta_keywords} />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="courses">
        <div className="container">
          <div className="courses-intro my-5">
            <h1>Over seven countries to choose from</h1>
            <div dangerouslySetInnerHTML={{__html: settings && settings.homepage_country_section_description}}></div>
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
