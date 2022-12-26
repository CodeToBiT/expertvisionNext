import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import { ViewButton } from "../components/buttons/ButtonBox";
import ServiceCard from "../components/card/ServiceCard";
import Link from "next/link";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/header/NavigationBar";

import CountriesCard from "../components/card/CountriesCard";
import CountriesSlider from "../components/slider/CountriesSlider";
import { Container } from "react-bootstrap";
import CourseSlider from "../components/slider/CoursesSlider";
import BlogCard from "../components/card/BlogCard";
import Testimonials from "../components/layout/Testimonials";

import { useAppContext } from "../context/state";
import { useEffect } from "react";

export default function Home() {
  const context = useAppContext();
  const {
    services,
    fetchServices,
    blogs,
    fetchBlogs,
    partners,
    fetchPartners,
    settings,
    fetchSettings,
    sliders,
    fetchSliders,
  } = context;
  useEffect(() => {
    if(services == null){
      fetchServices();
    }
    if(blogs == null){
      fetchBlogs();
    }
    if(partners == null){
      fetchPartners();
    }
    if(settings == null){
      fetchSettings();
    }
    if(sliders == null){
      fetchSliders();
    }

  }, []);

  return (
    <>
      <Head>
        <title>Home | Expert Vision</title>
        <meta name="description" content="Home" />
      </Head>

      <main>
        {/* safe */}
        <section className="banner position-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-content text-align-center" >
                  {sliders &&
                    sliders.slice(0, 1).map((data, key) => {
                      return <h1 key={key}>{data.title}</h1>;
                    })}
                    {sliders &&
                      sliders.slice(0, 1).map((data, key) => {
                        return (
                          <div key={key}
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          ></div>
                        );
                      })}

                  <div className="explore my-4 d-flex gap-32">
                    <Link href="/" className="btn btn-explore">
                      Explore
                    </Link>
                    <Link href="/" className="btn btn-contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="media-wrapper position-relative">
                  {sliders &&
                    sliders.slice(0, 1).map((data, key) => {
                      return (
                        <Image
                          src={data.image}
                          alt="loading"
                          priority="false"
                          fill
                          sizes="(max-height: 664px)"
                          key={key}
                        />
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="bannerimg position-absolute top-0">
            <img src="/images/banner.png" alt="" />
          </div>
        </section>

        <section className="universities my-5">
          <div className="container">
            <div className="services-intro my-5">
              <h2>Our Partner Universities</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-8 col-sm-12">
                <div className="d-flex gap-4 justify-content-center">
                  {partners &&
                    partners.slice(0, 5).map((data, key) => {
                      return (
                        <div className="media-wrapper position-relative" key={key}>
                          <Link href="#">
                            <Image
                              src={data.image}
                              alt="loading"
                              priority="false"
                              sizes="(max-height: 125px)"
                              fill
                            />
                          </Link>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services position-relative">
          <div className="services-intro my-5">
            <h2>Here we provide the services you need</h2>
            <p>{settings && settings.service_section_description}</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-10 m-auto col-sm-12 col-xs-12 shadow position-relative px-0">
                <div className="row">
                  {services &&
                    services.slice(0, 5).map((data) => {
                      return (
                        <ServiceCard
                          clsa="col-md-4 col-sm-6 col-xs-12"
                          title={data.title}
                          content={data.short_description}
                          key={data.id}
                        />
                      );
                    })}
                  <div className="col-md-4 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                    <ViewButton name="View All" />
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay position-absolute top-0">
              <div className="media-wrapper">
                <img src="/images/overlay.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="countries">
          <div className="container">
            <div className="countries-intro my-5">
              <h2>Over seven countries to choose from</h2>
              <p>{settings && settings.homepage_country_section_description}</p>
            </div>
            <CountriesSlider />
            <div className="text-center mb-5">
              <ViewButton name="View All" />
            </div>
          </div>
        </section>

        <section className="courses">
          <div className="container">
            <div className="courses-intro my-5">
              <h2>Over Courses</h2>
              <p>{settings && settings.homepage_course_section_description}</p>
            </div>
            <CourseSlider />
            <div className="text-center mb-5">
              <ViewButton name="View All" />
            </div>
          </div>
        </section>

        <section className="testimonial position-relative">
          <div className="testimonial-intro">
            <h2>Testimonials</h2>
          </div>
          <div className="container ">
            <Testimonials />
          </div>
          <div className="overlay position-absolute top-0">
            <div className="media-wrapper">
              <img src="/images/overlay2.png" alt="" />
            </div>
          </div>
        </section>

        <section className="blogs my-5">
          <div className="container">
            <div className="blogs-intro my-5">
              <h2>Blogs and updates</h2>
              <p>{settings && settings.homepage_blog_section_description}</p>
            </div>
            <div className="row">
              {blogs &&
                blogs.slice(0, 3).map((data) => {
                  return (
                    <BlogCard
                      clsa="col-md-4 col-xs-12"
                      slug={data.slug}
                      title={data.title}
                      imagepath={data.image}
                      content={data.short_description}
                      key={data.id}
                    />
                  );
                })}
            </div>
            <div className="text-center mb-5">
              <ViewButton name="View All" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
