import React from "react";
import CourseCard from "../../components/card/CourseCard";

import { useAppContext } from "../../context/state";
import { useEffect } from "react";
const Courses = () => {
  const context = useAppContext();
  const {courses, fetchCourses} = context;

  useEffect(()=>{
    fetchCourses();
  })
  return (
    <div>
      <section className="courses">
        <div className="container">
          <div className="courses-intro my-5">
            <h2>Our Courses</h2>
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
    </div>
  );
};

export default Courses;
