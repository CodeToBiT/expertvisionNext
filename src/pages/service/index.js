import Head from "next/head";
import Image from "next/image";
import ServiceCard from "../../components/card/ServiceCard";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";

const Services = () => {
  const context = useAppContext();
  const { services, fetchServices } = context;

  useEffect(() => {
    if (services == null) {
      fetchServices();
    }
  }, []);

  return (
    <>
      <Head>
        <title>Services | Expert Vision</title>
        <meta name="description" content="Services" />
      </Head>

      <section className="services mb-5">
        <div className="container">
          <div className="services-intro my-5">
            <h2>Here we provide the services you need</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
              cursus consectetur duis congue aenean vitae. Egestas vitae
              dignissim vulputate at volutpat{" "}
            </p>
          </div>
          <div className="row">
            <div className="col-md-10 m-auto col-sm-12 col-xs-12 shadow px-0">
              <div className="row">
                {services &&
                  services.slice(0, 9).map((data) => {
                    return (
                      <ServiceCard
                        slug={data.slug}
                        clsa="col-md-4 col-sm-6 col-xs-12"
                        title={data.title}
                        content={data.short_description}
                        key={data.id}
                      />
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

export default Services;
