import React from "react";
import Head from "next/head";
import CourseCard from "../../components/card/CourseCard";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";
const Courses = () => {
  const context = useAppContext();
  const { courses, fetchCourses } = context;

  useEffect(() => {
    if (courses == null) {
      fetchCourses();
    }
  });
  return (
    <>
      <Head>
        <title>Courses | Expert Vision</title>
        <meta name="description" content="Courses" />
      </Head>
      <section className="courses">
        <div className="container">
          <div className="courses-intro my-5">
            <h1>Our Courses</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Quis est lectus vitae
              cursus consectetur duis congue aenean vitae. Egestas vitae
              dignissim vulputate at volutpat
            </p>
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
