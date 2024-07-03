import React, { useEffect, useState } from "react";
import Breadcrumb from "./layouts/Breadcrumb";
import { useNavigate } from "react-router-dom";
import { getAllCourses } from "../services/CourseServices";
import Course from "./Course";
import {
  getAccountById,
  updateWalletByAccountId,
} from "../services/AccountServices";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import GPT from "./popup/App";
import "../style/coursePage.css";

const courseImages = [
  "assets/img/courses/1.jpg",
  "assets/img/courses/2.jpg",
  "assets/img/courses/3.jpg",
  "assets/img/courses/4.jpg",
  "assets/img/courses/5.jpg",
  "assets/img/courses/6.jpg",
];

const authorImages = [
  "assets/img/team/1.jpg",
  "assets/img/team/2.jpg",
  "assets/img/team/3.jpg",
  "assets/img/team/4.jpg",
  "assets/img/team/5.jpg",
  "assets/img/team/6.jpg",
  "assets/img/team/7.jpg",
  "assets/img/team/8.jpg",
  "assets/img/team/9.jpg",
];

const getRandomIndex = (array) => Math.floor(Math.random() * array.length);

export default function CoursesPage() {
  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }
  const navigate = useNavigate();

  function getAccountId() {
    const accountId = localStorage.getItem("accountid");
    return accountId;
  }
  const [courses, setCourses] = useState([]);
  const [originalCourses, setOriginalCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [account, setAccount] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const itemsPerPage = 6;

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      console.log("Have token:", token);

      const accountId = getAccountId();
      if (accountId) {
        getAccountById(accountId, token)
          .then((response) => {
            setAccount(response.data);
            console.log("account: ", response.data);
          })
          .catch((error) => {
            console.error("Error fetching account:", error);
          });
      }

      getAllCourses(token)
        .then((response) => {
          const coursesWithImages = response.data.map((course) => ({
            ...course,
            randomCourseImage: courseImages[getRandomIndex(courseImages)],
            randomAuthorImage: authorImages[getRandomIndex(authorImages)],
          }));
          setCourses(coursesWithImages);
          setOriginalCourses(coursesWithImages);
          console.log("data :", response.data);
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
        });
    } else {
      console.log("No token found");
    }

    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedEnrolledCourses);
  }, []);

  const handleCollectionClick = (course) => {
    if (enrolledCourses.includes(course._id)) {
      navigate(`/course/${course._id}`);
    } else {
      const confirmEnroll = window.confirm(
        `Are you sure you want to enroll in "${course.name}"?`
      );
      if (confirmEnroll) {
        if (account.wallet >= course.price) {
          const newWalletAmount = account.wallet - course.price;
          updateWalletByAccountId(
            getAccountId(),
            newWalletAmount,
            getAuthToken()
          )
            .then((response) => {
              setAccount(response.data);
              console.log("Wallet updated successfully");

              const updatedEnrolledCourses = [...enrolledCourses, course._id];
              setEnrolledCourses(updatedEnrolledCourses);
              localStorage.setItem(
                "enrolledCourses",
                JSON.stringify(updatedEnrolledCourses)
              );
              toast.success("Enroll Collection Successfully!");
              navigate(`/course/${course._id}`);
            })
            .catch((error) => {
              console.error("Error updating wallet:", error);
            });
        } else {
          toast.error("Not enough money in the wallet");
        }
      }
    }
  };

  const searchByName = (event) => {
    const searchByName = event.target.value.trim();
    if (searchByName) {
      const filteredCourses = originalCourses.filter((course) =>
        course.name.toLowerCase().includes(searchByName.toLowerCase())
      );
      setCourses(filteredCourses);
    } else {
      setCourses(originalCourses);
    }
    setCurrentPage(0);
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = courses.slice(offset, offset + itemsPerPage);

  return (
    <div>
      <Breadcrumb name={"Courses"} numOfImage={2} />
      <div className="popular-courses default-padding bottom-less without-carousel">
        <div className="container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for courses..."
              id="searchByName"
              className="form-control"
              onChange={searchByName}
            />
            <button
              onClick={() =>
                searchByName({
                  target: { value: document.getElementById("searchByName").value },
                })
              }
            >
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="row">
            <div className="popular-courses-items">
              {currentItems.length > 0 ? (
                currentItems.map((course) => (
                  <Course
                    id={course._id}
                    key={course._id}
                    price={course.price}
                    name={course.name}
                    description={course.description}
                    enrolled={enrolledCourses.includes(course._id)}
                    onLearnNowClick={() => handleCollectionClick(course)}
                    author={course.userId ? course.userId.username : "Unknown"}
                    randomCourseImage={course.randomCourseImage}
                    randomAuthorImage={course.randomAuthorImage}
                  />
                ))
              ) : (
                <h3 className="text-danger">No courses found</h3>
              )}
            </div>
          </div>
          {courses.length > 0 && (
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
          )}
        </div>
      </div>
      <GPT />
    </div>
  );
}
