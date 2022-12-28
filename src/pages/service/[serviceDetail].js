import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useAppContext } from "../../context/state";

import Image from "next/image";
import Link from "next/link";

const ServiceDetail = () => {
  const router = useRouter();
  const context = useAppContext();
  const serviceDetail = router.query.serviceDetail;
  const [service, setService] = useState();
  const { services, fetchServices } = context;
  const fetchService = async () => {
    const response = await fetch(
      [`https://admin.evc.edu.np/api/`, `service/${serviceDetail}`].join(""),
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    const json = await response.json();

    setService(json.data);
  };

  useEffect(() => {
    if (service == null) {
      fetchService();
    }
    if (services == null) {
      fetchServices();
    }
  }, []);

  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>
          {service && service.seo_title
            ? service && service.seo_title
            : service && service.title}
        </title>
        <meta
          name="description"
          content={service && service.meta_description}
        />
        <meta name="keywords" content={service && service.meta_keywords} />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{service && service.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12 pe-5">
              <div className="media-wrapper position-relative">
                <Image
                  src={
                    service && service.image
                      ? service.image
                      : "/images/logo.png"
                  }
                  fill
                  alt="loading"
                  priority="false"
                  sized="(max-height: 445px)"
                />
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>More Content</h3>
                <ul>
                  {services &&
                    services.map((data, key) => {
                      if (data.slug != serviceDetail) {
                        return (
                          <li key={key}>
                            <Link
                              href={`/service/${data.slug}`}
                              className="more-link"
                            >
                              {data.title}
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

      <section className="single-content">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-sm-12 sub">
              <div className="my-3">
                <div
                  dangerouslySetInnerHTML={{
                    __html: service && service.description,
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
