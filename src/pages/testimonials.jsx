import React from "react";
import Head from "next/head";
import TestimonailCard from "../components/card/TestimonailCard";

const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseTestimonials = await fetch([url, "testimonials"].join(""));
  const testimonials = await responseTestimonials.json();

  return {
    props: {
      testimonials,
    },
  };
}

const testimonials = ({ testimonials }) => {
  return (
    <>
      <Head>
        <title>"Expertvision - testimonials"</title>
      </Head>

      <section className="testimonial">
        <div className="container">
          <div className="testimonial-intro my-5">
            <h2>Testimonials</h2>
          </div>
          <div className="row">
            {testimonials &&
              testimonials.data?.map((data, key) => {
                return (
                  <div className="col-md-3 col-sm-12 col-xs-12" key={key}>
                    <TestimonailCard
                      image={data.image}
                      description={data.description}
                      name={data.name}
                      position={data.position}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default testimonials;
