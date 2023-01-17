import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import Image from "next/image";
import Link from "next/link";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox.css";

const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseBlogs = await fetch([url, "blogs"].join(""));
  const blogs = await responseBlogs.json();
  const responseCountries = await fetch([url, "countries"].join(""));
  const countries = await responseCountries.json();
  const responseRequirement = await fetch([url, "requirement"].join(""));
  const requirement = await responseRequirement.json();
  const responseSuccessgallery = await fetch([url, "successgallery"].join(""));
  const successgallery = await responseSuccessgallery.json();

  return {
    props: {
      blogs,
      countries,
      requirement,
      successgallery,
    },
  };
}

const CountryDetail = ({ countries, blogs, requirement, successgallery }) => {
  const router = useRouter();
  const countryDetail = router.query.countryDetail;
  const [country, setCountry] = useState([]);

  useEffect(() => {
    countries &&
      countries.data.map((item) => {
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
              <div className="pad">
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
                    <Tabs
                      defaultActiveKey="overview"
                      id="justify-tab-example"
                      className="mb-3"
                      justify
                    >
                      <Tab eventKey="overview" title="Overview">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: country && country.description,
                          }}
                        ></div>
                      </Tab>
                      <Tab eventKey="requirements" title="Required Documents">
                        <div className="download">
                          <table class="download-table col-lg-12 col-md-12">
                            <thead class="download-head">
                              <tr>
                                <th rowSpan="4">Name</th>
                                <th>Control</th>
                              </tr>
                            </thead>
                            <tbody class="download-body">
                              {requirement.data.map((data, key) => {
                                if (data.country_id == country.id) {
                                  return (
                                    <tr key={key}>
                                      <td>{data.name}</td>
                                      <td>
                                        <a
                                          className="btn btn-primary"
                                          data-fancybox="gallery"
                                          data-src={data.file}
                                          download={data.name}
                                        >
                                          Download
                                        </a>
                                      </td>
                                    </tr>
                                  );
                                }
                              })}
                            </tbody>
                          </table>
                        </div>
                      </Tab>
                      <Tab eventKey="sucess" title="Sucess Story">
                        <div className="row success mt-4">
                          {successgallery.data.map((data, key) => {
                            if (data.country_id == country.id) {
                              return (
                                <div className="col-md-4 col-xs-12 mb-3">
                                  <div className="media-wrapper position-relative">
                                    <a
                                      data-fancybox="gallery"
                                      data-src={data.image}
                                    >
                                      <Image
                                        src={data.image}
                                        priority={false}
                                        fill
                                      />
                                    </a>
                                  </div>
                                </div>
                              );
                            }
                          })}
                        </div>
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="more my-3">
                <h3 className="mt-5">Featured Destinations</h3>
                {countries &&
                  countries.data.slice(0, 4).map((data, key) => {
                    if (data.slug != countryDetail) {
                      return (
                        <div className="card-more position-relative">
                          <div className="row">
                            <div className="col-md-4 col-5">
                              <div className="media-wrapper position-relative">
                                <Image src={data.image} fill />
                              </div>
                            </div>
                            <div className="col-md-8 col-7">
                              <h5>{data.name}</h5>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: data.short_description,
                                }}
                              ></p>
                            </div>
                            <Link
                              href={`/country/${data.slug}`}
                              className="stretched-link"
                            ></Link>
                          </div>
                        </div>
                      );
                    }
                  })}
                <h3 className="mb-1">Check Our Blogs</h3>
                {blogs &&
                  blogs.data.slice(0, 4).map((data, key) => {
                    return (
                      <div className="card-more position-relative">
                        <div className="row">
                          <div className="col-md-4 col-5">
                            <div className="media-wrapper position-relative">
                              <Image src={data.image} fill />
                            </div>
                          </div>
                          <div className="col-md-8 col-7">
                            <h5>{data.title}</h5>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: data.short_description,
                              }}
                            ></p>
                          </div>
                          <Link
                            href={`/blog/${data.slug}`}
                            className="stretched-link"
                          ></Link>
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

export default CountryDetail;
