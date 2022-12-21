import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
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
import Testimonails from "../components/layout/Testimonials";

export default function Home() {
  const services = [
    {
      title: "Service title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae cursus consectetur duis congue...",
    },
    {
      title: "Service title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae cursus consectetur duis congue...",
    },
    {
      title: "Service title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae cursus onsectetur duis congue...",
    },
    {
      title: "Service title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae lectus vitae cursus consectetur duis cursus consectetur duis congue...",
    },
    {
      title: "Service title",
      content:
        "Lorem ipsum dolor sit amet consectetur. Quis est lectsdus vitae cursus consectetur duis congue...",
    },
  ];

  const blog = [
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog2.png",
      content:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
    {
      title: "Blog title",
      imagepath: "/images/blog1.png",
      content:
        " Lorem ipsuppp ppppppfpppppm dolor sit amet, consectetur adipiscing elit. Nibh vivamusit amet, consectetur adipiscing elit. Nibh vivam nulla ...",
    },
  ];

  return (
    <>
      <Head>
        <title>Home | Expert Vision</title>
        <meta name="description" content="About" />
      </Head>

      <main>
        <section className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="banner-content text-align-center">
                  <h1>
                    Expert Vision <br /> Educational Consultancy
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur. Quis est lectus
                    vitae cursus consectetur duis congue aenean vitae. Egestas
                    vitae dignissim vulputate at volutpat odio purus tellus.
                    Scelerisque leo in et quisque sit lacus molestie massa.
                    Aliquet ut felis velit interdum auctor quam.
                  </p>

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
                  <Image
                    src="/images/bannerimg.png"
                    alt="loading"
                    priority="false"
                    fill
                    sizes
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services">
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
              <div className="col-md-10 m-auto col-sm-12 col-xs-12">
                <div className="row">
                  {services &&
                    services.slice(0, 5).map((item, key) => {
                      return (
                        <ServiceCard
                          clsa="col-md-4 col-sm-6 col-xs-12"
                          title={item.title}
                          content={item.content}
                          key={key}
                        />
                      );
                    })}
                  <div className="col-md-4 col-sm-12 col-xs-12 d-flex align-items-center justify-content-center">
                    <ViewButton name="View All" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="countries">
          <div className="container">
            <div className="countries-intro my-5">
              <h2>Over seven countries to choose from</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
                cursus consectetur duis congue aenean vitae. Egestas vitae
                dignissim vulputate at volutpat
              </p>
            </div>
            <CountriesSlider />
            <div className="text-center my-5">
              <ViewButton name="View All" />
            </div>
          </div>
        </section>

        <section className="courses">
          <div className="container">
            <div className="courses-intro my-5">
              <h2>Over Courses</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
                cursus consectetur duis congue aenean vitae. Egestas vitae
                dignissim vulputate at volutpat
              </p>
            </div>
            <CourseSlider />
            <div className="text-center my-5">
              <ViewButton name="View All" />
            </div>
          </div>
        </section>

        <section className="testimonial">
          <div className="testimonial-intro">
            <h2>Testimonials</h2>
          </div>
          <div className="container">
            <Testimonails />
          </div>
        </section>

        <section className="blogs my-5">
          <div className="container">
            <div className="blogs-intro my-5">
              <h2>Blogs and updates</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
                cursus consectetur duis congue aenean vitae. Egestas vitae
                dignissim vulputate at volutpat
              </p>
            </div>
            <div className="row">
              {blog &&
                blog.map((item, key) => {
                  return (
                    <BlogCard
                      clsa="col-md-4 col-xs-12"
                      title={item.title}
                      imagepath={item.imagepath}
                      content={item.content}
                      key={key}
                    />
                  );
                })}
            </div>
            <div className="text-center my-5">
              <ViewButton name="View All" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
