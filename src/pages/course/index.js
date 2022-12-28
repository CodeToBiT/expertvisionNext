import React from "react";
import Head from "next/head";
import CourseCard from "../../components/card/CourseCard";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";
const Courses = () => {
  const context = useAppContext();
  const { courses, fetchCourses, settings, fetchSettings } = context;

  useEffect(() => {
    if (courses == null) {
      fetchCourses();
    }
    if (courses == null) {
      fetchSettings();
    }
  }, []);

  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  return (
    <>
      <Head>
        <title>{settings && settings.courses_seo_title}</title>
        <meta
          name="description"
          content={settings && settings.courses_meta_description}
        />
        <meta
          name="keywords"
          content={settings && settings.courses_meta_keywords}
        />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="courses">
        <div className="container">
          <div className="courses-intro my-5">
            <h1>Our Courses</h1>
            <div dangerouslySetInnerHTML={{__html: settings && settings.homepage_course_section_description}}>
          </div>
          </div>
          <div className="row">
            {courses &&
              courses.map((data, key) => {
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
