import React, { useState, useEffect } from "react";
import Breadcrumb from "./layouts/Breadcrumb";
import { getEnrollmentByUserId } from "../services/EnrollmentServices";
import "../style/myEnrollment.css";

export default function DepositPage() {
  const [listEnroll, setListEnroll] = useState([]);

  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  function getAccountId() {
    const accountid = localStorage.getItem("accountid");
    return accountid;
  }

  const authToken = getAuthToken();
  const accountid = getAccountId();

  useEffect(() => {
    getEnrollmentByUserId(accountid, authToken)
      .then((response) => {
        setListEnroll(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching enrollments:", error);
      });
  }, [accountid, authToken]);

  return (
    <div>
      <Breadcrumb name={"My Enrollment"} numOfImage={2} />
      <div className="container-enroll">
        <div className="card-enroll">
          <div className="card-header">
            <h5 className="card-title">My Enrollment</h5>
            <p className="card-text">
              Here is the list of exam you are enrolled in. 
            </p>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Name</th>
                <th scope="col">Exam Name</th>
                <th scope="col">Number Of Questions</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {listEnroll && listEnroll.length > 0 ? (
                listEnroll.map((enroll, index) => (
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td>{enroll.examId.name}</td>
                    <td>{enroll.examId.name}</td>
                    <td>{enroll.examId.numberOfQuestion}</td>
                    <td>{enroll.examId.time}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">No enrollments found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
