import React from "react";
import Head from "next/head";
import CourseCard from "../../components/card/CourseCard";
import { useEffect } from "react";
const url = "https://admin.evc.edu.np/api/";

export async function getServerSideProps() {
  const responseCourses = await fetch([url, "courses"].join(""));
  const courses = await responseCourses.json();
  const responseSettings = await fetch([url, "settings"].join(""));
  const settings = await responseSettings.json();

  return {
    props: {
      courses,
      settings,
    },
  };
}


const Courses = ({courses, settings}) => {


  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>{settings && settings.data.courses_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.data.courses_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.data.courses_meta_keywords}
        />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="courses">
        <div className="container">
          <div className="courses-intro my-5">
            <h1>Our Courses</h1>
            <div dangerouslySetInnerHTML={{__html: settings && settings.data.homepage_course_section_description}}>
          </div>
          </div>
          <div className="row">
            {courses &&
              courses.data.map((data, key) => {
                return (
                  <div className="col-md-3 col-sm-12" key={key}>
                    <CourseCard
                      slug={data.slug}
                      imagepath={data.image}
                      course={data.name}
                      desc={data.description}
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

export default Courses;
