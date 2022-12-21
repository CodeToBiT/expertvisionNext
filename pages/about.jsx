import Image from "next/image";
import Head from "next/head";
import TeamsCard from "../components/card/TeamsCard";
import Footer from "../components/footer/Footer";
import NavigationBar from "../components/header/NavigationBar";
import Testimonails from "../components/layout/Testimonials";

const About = () => {
  const ourTeams = [
    {
      name: "Remilla Ty",
      image: "/images/profile.png",
      role: "Inspiring others to do their best work.",
      description: "The mask tool. It makes me feel like a magician.",
    },
    {
      name: "Remilla Ty",
      image: "/images/profile.png",
      role: "Inspiring others to do their best work.",
      description: "The mask tool. It makes me feel like a magician.",
    },
    {
      name: "Remilla Ty",
      image: "/images/profile.png",
      role: "Inspiring others to do their best work.",
      description: "The mask tool. It makes me feel like a magician.",
    },
  ];
  return (
    <>
      <Head>
        <title>About | Expert Vision</title>
        <meta name="description" content="Home - reasons edu" />
      </Head>

      <main>
        <section className="about">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 position-relative">
                <div className="h-100 d-flex align-items-center">
                  <div className="content">
                    <h1>About Us</h1>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Quis est lectus
                      vitae cursus consectetur duis congue aenean vitae. Egestas
                      vitae dignissim vulputate at volutpat odio purus tellus.
                      Scelerisque leo in et quisque sit lacus molestie massa.
                      Aliquet ut felis velit interdum auctor quam. Lorem ipsum
                      dolor sit amet consectetur. Quis est lectus vitae cursus
                      consectetur duis congue aenean vitae. Egestas vitae
                      dignissim vulputate at volutpat odio purus tellus.
                      Scelerisque leo in et quisque sit lacus molestie massa.
                      Aliquet ut felis velit interdum auctor quam.
                    </p>
                  </div>
                  <div className="overlay">
                    <div className="overlay-right">
                      <img src="/images/aboutdots.png" alt="" />
                    </div>
                    <div className="overlay-left">
                      <img src="/images/aboutdots.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="media-wrapper position-relative">
                  <Image
                    src="/images/about.png"
                    alt="loading"
                    priority="false"
                    fill
                  />
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
                  <Image
                    src="/images/vision.png"
                    alt="loading"
                    priority="false"
                    fill
                  />
                </div>
              </div>

              <div className="col-sm-12 col-md-6">
                <div className="d-flex align-items-center h-100">
                  <div className="content">
                    <h2>Our Vision</h2>
                    <p>
                      Lorem ipsum dolor sit amet consectetur. Id lectus quis
                      feugiat suscipit venenatis. Lacus tristique auctor feugiat
                      diam tellus et amet. Gravida consectetur feugiat turpis
                      porta erat cursus fames velit turpis. Dictumst pharetra
                      scelerisque vitae sed pharetra.tristique auctor feugiat
                      diam tellus et amet. Gravida consectetur feugiat turpis
                      porta erat cursus fames velit turpis. Dictumst pharetra
                      scelerisque vitae sed pharetra.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlay">
            <div className="overlay-right">
              <img src="/images/dots.png" alt="" />
            </div>
            <div className="overlay-left">
              <img src="/images/dots.png" alt="" />
            </div>
          </div>
        </section>

        <section className="teams">
          <div className="container">
            <div className="teams-intro my-5">
              <h2>Our Team</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
                cursus consectetur duis congue aenean vitae. Egestas vitae
                dignissim vulputate at volutpat
              </p>
            </div>
            <div className="row">
              {ourTeams &&
                ourTeams.slice(0, 3).map((item, key) => {
                  return (
                    <TeamsCard
                      clsa="col-md-4 col-xs-12"
                      name={item.name}
                      role={item.role}
                      image={item.image}
                      description={item.description}
                      key={key}
                    />
                  );
                })}
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
      </main>
    </>
  );
};

export default About;
