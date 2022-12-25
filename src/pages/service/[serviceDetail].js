import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

import { useAppContext } from "../../context/state";

import Image from "next/image";
import Link from "next/link";

const serviceDetail = () => {
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
        },
      }
    );

    const json = await response.json();

    setService(json.data);
  };

  useEffect(() => {
    fetchService();
    fetchServices();
  });



  return (
    <>
      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{service && service.title}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12 pe-5">
              <div className="media-wrapper position-relative">
                <Image
                  src={service && service.image}
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
                    __html: service && service.description,
                  }}
                ></div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>More Content</h3>
                <ul>
                  {services &&
                    services.map((data, key) => {
                      return (
                        <li>
                          <Link href={`/service/${data.slug}`} className="more-link">
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

export default serviceDetail;
