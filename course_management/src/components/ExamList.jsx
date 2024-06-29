import React, { useEffect, useState } from "react";
import { getAllExams } from "../services/ExamServices";

const ExamList = () => {
  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  const authToken = getAuthToken();
  const [exams, setExams] = useState([]);

  useEffect(() => {
    if (getAuthToken()) {
      console.log("Have token:", getAuthToken());
      getAllExams(getAuthToken())
        .then((response) => {
          setExams(response.data);
        })
        .catch((error) => {
          console.error("Error fetching courses:", error);
        });
    } else {
      console.log("No token found");
    }
  }, [getAuthToken()]);

  return (
    <div className="container">
      <h2>All Exams</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Exam name</th>
            <th>Time</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {exams.map((exam, index) => (
            <tr key={exam._id}>
              <td>{index + 1}</td>
              <td>{exam.examName}</td>
              <td>{exam.time}'</td>
              <td>
                <button className="btn btn-primary">Join</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExamList;
