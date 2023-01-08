import React from "react";
import Head from "next/head";
import CountriesCard from "../../components/card/CountriesCard";

import { useEffect } from "react";

const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseCountries = await fetch([url, "countries"].join(""));

  const countries = await responseCountries.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      countries,
      settings,
    },
  };
}

const Countries = ({ countries, settings }) => {
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }
  return (
    <>
      <Head>
        <title>{settings && settings.data.countries_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.data.countries_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.data.countires_meta_keywords}
        />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="courses">
        <div className="container">
          <div className="courses-intro my-5">
            <h1>Over seven countries to choose from</h1>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  settings &&
                  settings.data.homepage_country_section_description,
              }}
            ></div>
          </div>
          <div className="row">
            {countries.data.map((data, key) => {
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
