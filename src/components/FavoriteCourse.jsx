import React, { useEffect, useState } from "react";
import Breadcrumb from "./layouts/Breadcrumb";
import { getAllFavoriteCourses } from "../services/AccountServices";
import Course from "./Course";

export default function CoursesPage() {
  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  function getAccountId() {
    const accountId = localStorage.getItem("accountid");
    return accountId;
  }

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchFavoriteCollections = async () => {
      const token = getAuthToken();
      if (token) {
        console.log("Have token:", token);
        try {
          const response = await getAllFavoriteCourses(getAccountId(), token);
          setCourses(response.data.favoriteCollections);
          console.log(response.data.favoriteCollections);
        } catch (error) {
          console.error("Error fetching collections:", error);
        }
      } else {
        console.log("No token found");
      }
    };

    fetchFavoriteCollections();
  }, []);

  return (
    <div>
      <Breadcrumb name={"Favorite Collections"} numOfImage={2} />
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
    </div>
  );
}
