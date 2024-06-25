import React, { useEffect, useState } from "react";
import Breadcrumb from "./layouts/Breadcrumb";
import Course from "./Course";
import { getCollectionsByCurrentUser } from "../services/CourseServices";

export default function MyCoursesPage() {
  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }
  
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (getAuthToken()) {
      console.log("Have token:", getAuthToken());
      getCollectionsByCurrentUser(getAuthToken())
        .then(response => {
          console.log(response.data)
          setCourses(response.data);
        })
        .catch(error => {
          console.error('Error fetching collections:', error);
        });
    } else {
      console.log("No token found");
    }
  }, [getAuthToken()]);

  return (
    <div>
      <Breadcrumb name={"My Courses"} numOfImage={9} />
      {/* Start User's Courses */}
      <div className="popular-courses default-padding bottom-less without-carousel">
        <div className="container">
          <div className="row">
            <div className="popular-courses-items">
              {courses.map(course => (
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
      {/* End User's Courses */}
    </div>
  );
}
