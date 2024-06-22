import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCollectionById } from "../services/CourseServices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

export default function ViewAllQuestion() {
  const { id } = useParams(); // Get collection ID from URL params
  const [collection, setCollection] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      const accessToken = getAuthToken();
      try {
        const response = await getCollectionById(id, accessToken);
        setCollection(response.data);
      } catch (error) {
        toast.error("Error fetching collection. Please try again.");
        console.error("Error fetching collection:", error);
      }
    };

    fetchCollection();
  }, [id]);

  const handleViewAnswer = (question) => {
    setSelectedQuestion(question);
  };

  const handleCloseModal = () => {
    setSelectedQuestion(null);
  };

  if (!collection) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Collection: {collection.name}</h2>
      <h3>Questions</h3>
      {collection.questions.map((question, index) => (
        <div key={question._id} className="question">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">Question {index + 1}</h4>
            </div>
            <div className="panel-body">
              <p>
                <strong>Detail:</strong> {question.detail}
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Answer A:</strong> {question.answerA}
                </li>
                <li className="list-group-item">
                  <strong>Answer B:</strong> {question.answerB}
                </li>
                <li className="list-group-item">
                  <strong>Answer C:</strong> {question.answerC}
                </li>
                <li className="list-group-item">
                  <strong>Answer D:</strong> {question.answerD}
                </li>
              </ul>
              <button
            className="btn btn-primary"
            onClick={() => handleViewAnswer(question)}
          >
            View Correct Answer
          </button>
            </div>
          </div>
        </div>
      ))}
      {selectedQuestion && (
        <div className="modal show" role="dialog" style={{ display: "block" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseModal}
                >
                  &times;
                </button>
                <h4 className="modal-title">Correct Answer</h4>
              </div>
              <div className="modal-body">
                <h4>Question: {selectedQuestion.detail}</h4>
                <p>
                  <strong>True Answer:</strong> {selectedQuestion.trueAnswer}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
