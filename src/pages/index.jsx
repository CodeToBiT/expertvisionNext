import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
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
import PartnerSlider from "../components/slider/PartnerSlider";
import Slider from "react-slick";

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
    if (services == null) {
      fetchServices();
    }
    if (blogs == null) {
      fetchBlogs();
    }
    if (partners == null) {
      fetchPartners();
    }
    if (settings == null) {
      fetchSettings();
    }
    if (sliders == null) {
      fetchSliders();
    }
  }, []);
  const bannerslider = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>{settings && settings.homepage_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.homepage_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.homepage_meta_keywords}
        />
        <link rel="canonical" href={current_url} />
      </Head>

      <main>
        {/* safe */}
        <section className="banner position-relative">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="banner-content text-align-center">
                  {sliders &&
                    sliders.map((data, key) => {
                      if (data.id == "2") {
                        return <h1 key={key}>{data.title}</h1>;
                      }
                    })}
                  {sliders &&
                    sliders.map((data, key) => {
                      if (data.id == "2") {
                        return (
                          <div
                            key={key}
                            dangerouslySetInnerHTML={{
                              __html: data.description,
                            }}
                          ></div>
                        );
                      }
                    })}

                  <div className="explore my-4 d-flex gap-32">
                    <Link href="/" className="btn btn-explore">
                      Explore
                    </Link>
                    <Link href="/contact" className="btn btn-contact">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <Slider {...bannerslider}>
                  {sliders &&
                    sliders.map((data, key) => {
                      return (
                        <div className="media-wrapper position-relative">
                          <Image
                            src={data.image}
                            alt="loading"
                            priority="false"
                            fill
                            sizes="(max-height: 664px)"
                            key={key}
                          />
                        </div>
                      );
                    })}
                </Slider>
              </div>
            </div>
          </div>
          <div className="bannerimg position-absolute top-0">
            <Image
              src="/images/banner.png"
              width={100}
              height={750}
              alt="loading"
              sizes="(max-height: 750px)"
              priority="false"
            />
            ;
          </div>
        </section>

        <section className="universities my-5">
          <div className="container">
            <div className="services-intro my-5">
              <h2>Our Partner Universities</h2>
            </div>
            <PartnerSlider />
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
                          slug={data.slug}
                          title={data.title}
                          content={data.short_description}
                          key={data.id}
                        />
                      );
                    })}
                  <div className="col-md-4 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                    <Link
                      href="/service"
                      className="btn btn-secondary py-2 px-5 br-0 text-white"
                    >
                      View All
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay position-absolute top-0">
              <div className="media-wrapper">
                <Image
                  src="/images/overlay.png"
                  width={100}
                  height={450}
                  alt="loading"
                  sizes="(max-height: 500px)"
                  priority="false"
                />
                ;
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
              <Link
                href="/country"
                className="btn btn-secondary py-2 px-5 br-0 text-white"
              >
                View All
              </Link>
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
              <Link
                href="/course"
                className="btn btn-secondary py-2 px-5 br-0 text-white"
              >
                View All
              </Link>
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
                      date={data.date}
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
              <Link
                href="/blog"
                className="btn btn-secondary py-2 px-5 br-0 text-white"
              >
                View All
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
