import React, { useEffect, useState } from "react";
import Breadcrumb from "../layouts/Breadcrumb";
import Course from "../generals/Course";
import { getAllCourses } from "../../services/CourseServices";
import { useAuth } from "../../context/authContext";

export default function CoursesPage() {
  const { token } = useAuth(); // Ensure useAuth is correctly imported and used
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (token) {
      console.log("Have token:", token);
      getAllCourses(token)
        .then(response => {
          setCourses(response.data);
        })
        .catch(error => {
          console.error('Error fetching courses:', error);
        });
    } else {
      console.log("No token found");
    }
  }, [token]);

  return (
    <div>
       <Breadcrumb name={"Courses"} numOfImage={2} />
      {/* Start Popular Courses */}
      <div className="popular-courses default-padding bottom-less without-carousel">
        <div className="container">
          <div className="row">
            <div className="popular-courses-items">
              {courses.map(course => (
                <Course
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
