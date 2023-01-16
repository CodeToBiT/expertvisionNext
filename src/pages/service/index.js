import Head from "next/head";
import Image from "next/image";
import ServiceCard from "../../components/card/ServiceCard";

import { useEffect } from "react";
const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseServices = await fetch([url, "services"].join(""));
  const services = await responseServices.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      services,
      settings,
    },
  };
}

const Services = ({ services, settings }) => {
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>
          {settings && settings.data?.services_seo_title
            ? settings && settings.data?.services_seo_title
            : "Expertvision - services"}
        </title>
        <meta
          name="description"
          content={settings && settings.data.services_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.data.services_meta_keywords}
        />
        <link rel="canonical" href={current_url} />
      </Head>

      <section className="services mb-5">
        <div className="container">
          <div className="services-intro my-5">
            <h2>Here we provide the services you need</h2>
            <div
              dangerouslySetInnerHTML={{
                __html: settings && settings.data.service_section_description,
              }}
            ></div>
          </div>
          <div className="row">
            <div className="col-md-10 m-auto col-sm-12 col-xs-12 shadow px-0">
              <div className="row">
                {services &&
                  services.data.slice(0, 9).map((data) => {
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
