import React, { useEffect, useState } from "react";
import Breadcrumb from "./layouts/Breadcrumb";
import CourseCard from "./CourseCard";
import { getCollectionsByCurrentUser } from "../services/CourseServices";
import GPT from "./popup/App";
import ReactPaginate from "react-paginate";
import "../style/coursePage.css"; // Assuming you have some CSS for pagination


export default function MyCoursesPage() {
  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }


  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6;


  useEffect(() => {
    if (getAuthToken()) {
      getCollectionsByCurrentUser(getAuthToken())
        .then((response) => {
          setCourses(response.data);
        })
        .catch((error) => {
          console.error("Error fetching collections:", error);
        });
    } else {
      console.log("No token found");
    }
  }, [getAuthToken()]);


  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };


  const offset = currentPage * itemsPerPage;
  const currentItems = courses.slice(offset, offset + itemsPerPage);


  return (
    <div>
      <Breadcrumb name={"My Courses"} numOfImage={9} />
      <div className="popular-courses default-padding bottom-less without-carousel">
        <div className="container">
          <div className="row">
            <div className="popular-courses-items">
              {currentItems.map((course) => (
                <CourseCard
                  id={course._id}
                  key={course._id}
                  price={course.price}
                  name={course.name}
                  description={course.description}
                  author={course.userId ? course.userId.username : "Unknown"}
                />
              ))}
            </div>
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={Math.ceil(courses.length / itemsPerPage)}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
      <GPT />
    </div>
  );
}





