import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllExams } from "../services/ExamServices";
import { toast } from "react-toastify";
import GPT from "./popup/App";

const ExamList = () => {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  const [selectedExam, setSelectedExam] = useState(null);
  const [numberQuestion, setNumberQuestion] = useState(null);
  const [password, setPassword] = useState("");
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getAllExams(getAuthToken());
        setExams(response.data);
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

  return (
    <div className="container">
      <h2>All Exams</h2>
      <div className="table-responsive">
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
            {exams.map((exam, index) => (
              <tr key={exam._id}>
                <td className="text-center">{index + 1}</td>
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
