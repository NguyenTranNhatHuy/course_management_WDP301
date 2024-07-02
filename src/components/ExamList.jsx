import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllExams } from "../services/ExamServices";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import GPT from "./popup/App";

const ExamList = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  const [filteredExams, setFilteredExams] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedExam, setSelectedExam] = useState(null);
  const [numberQuestion, setNumberQuestion] = useState(null);
  const [password, setPassword] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const itemsPerPage = 10; // Adjust the number of items per page

  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getAllExams(getAuthToken());
        setExams(response.data);
        setFilteredExams(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching exams:", error);
      }
    };

    fetchExams();
  }, []);

  const handleJoinExam = (exam) => {
    setSelectedExam(exam);
    setNumberQuestion(exam.numberOfQuestion);
    setShowPasswordModal(true);
  };

  const handleClosePasswordModal = () => {
    setShowPasswordModal(false);
    setSelectedExam(null);
    setPassword("");
  };

  const handleVerifyPassword = () => {
    if (selectedExam.pass === password) {
      navigate(`/exam-check/${selectedExam.collectionId}`, {
        state: {
          time: selectedExam.time,
          examId: selectedExam._id,
          numberOfQuestion: numberQuestion,
        },
      });
    } else {
      toast.error("Incorrect password. Please try again.");
    }
  };

  const searchByName = () => {
    const searchTerm = document.getElementById("searchByName").value.trim();
    if (searchTerm) {
      const filteredExams = exams.filter((exam) =>
        exam.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredExams(filteredExams);
    } else {
      setFilteredExams(exams);
    }
    setCurrentPage(0); // Reset to first page on search
  };

  const handlePageClick = (event) => {
    setCurrentPage(event.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = filteredExams.slice(offset, offset + itemsPerPage);

  return (
    <div className="container">
      <h2>All Exams</h2>
      <div className="table-responsive">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for courses..."
            id="searchByName"
            className="form-control"
            onChange={searchByName}
          />
          <button onClick={searchByName}>
            <i className="fas fa-search" />
          </button>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th className="text-center">#</th>
              <th className="text-center">Exam Name</th>
              <th className="text-center">Time</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((exam, index) => (
              <tr key={exam._id}>
                <td className="text-center">{offset + index + 1}</td>
                <td>{exam.name}</td>
                <td className="text-center">{exam.time}'</td>
                <td className="text-center">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleJoinExam(exam)}
                  >
                    Join
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(filteredExams.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>

      {showPasswordModal && (
        <div className="modal show" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={handleClosePasswordModal}
                >
                  &times;
                </button>
                <h4 className="modal-title">Enter Password</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="passwordInput">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleVerifyPassword}
                >
                  Submit
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={handleClosePasswordModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <GPT />
    </div>
  );
};

export default ExamList;
