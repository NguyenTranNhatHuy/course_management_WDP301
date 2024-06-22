import React, { useEffect, useState } from "react";
import Breadcrumb from "./layouts/Breadcrumb";

import { getAllCourses } from "../services/CourseServices";
import Course from "./Course";

export default function CoursesPage() {
  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (getAuthToken()) {
      console.log("Have token:", getAuthToken());
      getAllCourses(getAuthToken())
        .then((response) => {
          setCourses(response.data);
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
        });
    } else {
      console.log("No token found");
    }
  }, [getAuthToken()]);

  return (
    <div>
      <Breadcrumb name={"Courses"} numOfImage={2} />
      {/* Start Popular Courses */}
      <div className="popular-courses default-padding bottom-less without-carousel">
        <div className="container">
          <div className="row">
            <div className="popular-courses-items">
              {courses.map((course) => (
                <Course
                  id={course._id}
                  key={course._id}
                  price={course.price}
                  name={course.name}
                  description={course.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Courses */}
    </div>
  );
}
