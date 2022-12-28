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
  let current_url;
  if (typeof window !== "undefined") {
    current_url = window.location.href;
  }

  useEffect(() => {
    if (courses == null) {
      fetchCourses();
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
      <section className="single-banner">
        <div className="container">
          <div className="title">
            <h1>{course && course.name}</h1>
          </div>
          <div className="row">
            <div className="col-md-9 col-sm-12">
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
            <div className="col-md-3 col-sm-12">
              <div className="more p-4">
                <h3>More Courses</h3>
                <ul>
                  {courses &&
                    courses.map((data, key) => {
                      return (
                        <li key={key}>
                          <Link
                            href={`/course/${data.slug}`}
                            className="more-link"
                            target="_blank"
                          >
                            {data.name}
                          </Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseDetail;
