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
import GPT from "./popup/App";
import "../style/coursePage.css";

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
  const [originalCourses, setOriginalCourses] = useState([]); // New state to hold original courses
  const [account, setAccount] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      console.log("Have token:", token);

      // Gọi API lấy thông tin tài khoản
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
          setCourses(response.data);
          console.log("data check :", response.data);
          setOriginalCourses(response.data); // Store original courses
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
        });
    } else {
      console.log("No token found");
    }
    // Load enrolled courses from localStorage
    const storedEnrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    setEnrolledCourses(storedEnrolledCourses);
  }, []);

  const handleCollectionClick = (course) => {
    if (enrolledCourses.includes(course._id)) {
      // Nếu khóa học đã được enroll, chuyển hướng đến trang chi tiết
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
  };

  return (
    <div>
      <Breadcrumb name={"Courses"} numOfImage={2} />
      {/* Start Popular Courses */}
      <div className="popular-courses default-padding bottom-less without-carousel">
        <div className="container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search for courses..."
              id="searchByName"
              className="form-control"
              onChange={searchByName} // Call searchByName on input change
            />
            <button onClick={() => searchByName({ target: { value: document.getElementById("searchByName").value } })}>
              <i className="fas fa-search" />
            </button>
          </div>
          <div className="row">
            <div className="popular-courses-items">
              {courses.map((course) => (
                <Course
                  id={course._id}
                  key={course._id}
                  price={course.price}
                  name={course.name}
                  description={course.description}
                  enrolled={enrolledCourses.includes(course._id)}
                  onLearnNowClick={() => handleCollectionClick(course)}
                  author={course.userId ? course.userId.username : "Unknown"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <GPT />
      {/* End Popular Courses */}
    </div>
  );
}
