import React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import { useAppContext } from "../../context/state";

import Image from "next/image";
import Link from "next/link";

const CourseDetail = () => {
  const router = useRouter();
  const context = useAppContext();
  const courseDetail = router.query.courseDetail;
  const [course, setCourse] = useState();
  const { courses, fetchCourses } = context;
  const { countries, fetchCountries } = context;
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  useEffect(() => {
    fetchCourses();

    if (countries == null) {
      fetchCountries();
    }

    courses &&
      courses.map((item) => {
        if (item.slug == courseDetail) {
          setCourse(item);
        }
      });
  }, [courses]);

  return (
    <>
      <Head>
        <title>
          {course && course.seo_title
            ? course && course.seo_title
            : course && course.title}
        </title>
        <meta name="description" content={course && course.meta_description} />
        <meta name="keywords" content={course && course.meta_keywords} />
        <link rel="canonical" href={current_url} />
      </Head>
      <section className="single-banner mt-4">
        <div className="container">
          <div className="title">
            <h1>{course && course.name}</h1>
          </div>
          <div className="row">
            <div className="col-md-8 col-sm-12">
              <div className="pe-5">
                <div className="media-wrapper position-relative">
                  <Image
                    src={
                      course && course.image ? course.image : "/images/logo.png"
                    }
                    fill
                    alt="loading"
                    priority="false"
                    sized="(max-height: 445px)"
                  />
                </div>
              </div>
              <div className="single-content">
                <div className="sub">
                  <div className="my-3">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: course && course.description,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="more my-3">
                <h3 className="mb-1">More Courses</h3>
                {courses &&
                  courses.slice(0, 4).map((data, key) => {
                    if (data.slug != courseDetail) {
                      return (
                        <div className="card-more">
                          <div className="row">
                            <div className="col-md-4 col-sm-12">
                              <div className="media-wrapper position-relative">
                                <Image src={data.image} fill />
                              </div>
                            </div>
                            <div className="col-md-8 col-sm-12">
                              <h5>{data.name}</h5>
                              <p
                                dangerouslySetInnerHTML={{
                                  __html: data.short_description,
                                }}
                              ></p>
                            </div>
                          </div>
                          <a href={`/course/${data.slug}`}  className="stretched-link"></a>
                        </div>
                      );
                    }
                  })}
                <h3 className="mt-5">Featured Destinations</h3>
                {countries &&
                  countries.slice(0, 4).map((data, key) => {
                    return (
                      <div className="card-more">
                        <div className="row">
                          <div className="col-md-4 col-sm-12">
                            <div className="media-wrapper position-relative">
                              <Image src={data.image} fill />
                            </div>
                          </div>
                          <div className="col-md-8 col-sm-12">
                            <h5>{data.name}</h5>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: data.short_description,
                              }}
                            ></p>
                          </div>
                        </div>
                        <a href={`/country/${data.slug}`}  className="stretched-link"></a>
                      </div>
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

export default CourseDetail;
