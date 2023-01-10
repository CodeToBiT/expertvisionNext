import Image from "next/image";
import Head from "next/head";
import TeamsCard from "../components/card/TeamsCard";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/header/NavigationBar";
import Testimonails from "../components/layout/Testimonials";

import { useEffect, useState } from "react";
const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseOurteams = await fetch([url, "ourteams"].join(""));
  const ourteams = await responseOurteams.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();
  const responsePages = await fetch([url, "pages"].join(""));
  const pages = await responsePages.json();

  return {
    props: {
      ourteams,
      settings,
      pages,
    },
  };
}

const About = ({ ourteams, settings, pages }) => {
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>{settings && settings.data.about_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.data.about_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.data.about_meta_keywords}
        />
        <title>About Us - ExpertVision</title>
        <link rel="canonical" href={current_url} />
      </Head>

      <main>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 position-relative">
                <div className="h-100 d-flex align-items-center">
                  <div className="content">
                    <h1>About Us</h1>

                    {pages &&
                      pages.data.map((data, key) => {
                        if (data.id == "6") {
                          return (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.description,
                              }}
                            ></div>
                          );
                        }
                      })}
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="media-wrapper position-relative">
                  {pages &&
                    pages.data.map((data, key) => {
                      if (data.id == "6") {
                        return (
                          <Image
                            src={data.image}
                            alt="loading"
                            priority="false"
                            sizes="(max-height: 629px)"
                            fill
                          />
                        );
                      }
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vision my-4">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-5">
                <div className="media-wrapper position-relative">
                  {pages &&
                    pages.data.map((data, key) => {
                      if (data.id == "7") {
                        return (
                          <Image
                            src={data.image}
                            alt="loading"
                            priority="false"
                            sizes="(max-height: 576px)"
                            fill
                          />
                        );
                      }
                    })}
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="d-flex align-items-center h-100">
                  <div className="content">
                    <h2 className="mb-4">Our Vision</h2>
                    {pages &&
                      pages.data.map((data, key) => {
                        if (data.id == "7") {
                          return (
                            <div
                              dangerouslySetInnerHTML={{
                                __html: data.description,
                              }}
                            ></div>
                          );
                        }
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="teams">
          <div className="container">
            <div className="teams-intro my-5">
              <h2>Our Team</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html:
                    settings && settings.data?.ourteam_section_description,
                }}
              ></p>
            </div>
            <div className="row">
              {ourteams &&
                ourteams.data.slice(0,3).map((data, key) => {
                  return (
                    <TeamsCard
                      clsa="col-md-4 col-xs-12"
                      name={data.name}
                      role={data.position}
                      image={data.image}
                      description={data.description}
                      key={key}
                    />
                  );
                })}
            </div>
          </div>
        </section>

        <section className="testimonial position-relative">
          <div className="testimonial-intro">
            <h2>Testimonials</h2>
          </div>
          <div className="container position-relative">
            <Testimonails />
          </div>
          <div className="overlay position-absolute top-0">
            <div className="media-wrapper">
              <Image
                src="/images/overlay2.png"
                width={150}
                height={61.05}
                alt="loading"
                sizes="(max-height: 500px)"
                priority="false"
              />
              ;
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
