import React, { useEffect, useState } from "react";
import Breadcrumb from "../layouts/Breadcrumb";
import Course from "../generals/Course";
import { getCollectionsByCurrentUser } from "../../services/CourseServices";
import { useAuth } from "../../context/authContext";

export default function MyCoursesPage() {
  const { token } = useAuth();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    if (token) {
      console.log("Have token:", token);
      getCollectionsByCurrentUser(token)
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
  }, [token]);

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
