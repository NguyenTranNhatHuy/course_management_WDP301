import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import {
  getCollectionById,
  getCollectionByIdRandomNum,
} from "../services/CourseServices";
import { createEnrollmentById } from "../services/EnrollmentServices";
import { toast } from "react-toastify";

function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

const ExamCheck = () => {
  const { collectionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(location.state?.time * 60 || 0);
  const [numberQuestion, setNumberQuestion] = useState(
    location.state?.numberOfQuestion || 0
  );
  const [examId, setExamId] = useState(location.state?.examId);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await getCollectionByIdRandomNum(
          collectionId,
          numberQuestion,
          getAuthToken()
        );
        setCollection(response.data);
        console.log("question: ", response.data);
        console.log("numberQuestion: ", numberQuestion);
        console.log("Exam Id: ", examId);
      } catch (error) {
        toast.error("Error fetching collection. Please try again.");
        console.error("Error fetching collection:", error);
      }
    };

    fetchCollection();
  }, [collectionId, numberQuestion, examId]);

  useEffect(() => {
    function preventCheating() {
      // Ngăn chặn sao chép
      document.addEventListener("copy", function (e) {
        e.preventDefault();
        toast.error("Copying is not allowed on this page.");
      });

      // Ngăn chặn menu chuột phải
      document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
        toast.error("Right-click is not allowed on this page.");
      });

      // Ngăn chặn mở tab mới bằng cách nhấn Ctrl, Shift hoặc chuột giữa
      document.addEventListener("click", function (e) {
        if (
          e.target.tagName === "A" &&
          (e.ctrlKey || e.shiftKey || e.metaKey || e.button === 1)
        ) {
          e.preventDefault();
          toast.error("Opening links in new tabs is not allowed.");
        }
      });

      document.onkeydown = function (e) {
        if (
          e.ctrlKey &&
          (e.keyCode === 67 ||
            e.keyCode === 84 ||
            e.keyCode === 86 ||
            e.keyCode === 85 ||
            e.keyCode === 117)
        ) {
          toast.error("Not allowed");
          return false;
        } else {
          return true;
        }
      };

      // Ngăn chặn F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C,
      document.addEventListener("keydown", function (e) {
        if (
          e.key === "F12" ||
          (e.ctrlKey &&
            e.shiftKey &&
            (e.key === "I" || e.key === "J" || e.key === "C" || e.key === "V"))
        ) {
          e.preventDefault();
          toast.error("Inspect Element and Paste are not allowed.");
        }
      });

      // Ngăn chặn dán (paste)
      document.addEventListener("paste", function (e) {
        e.preventDefault();
        toast.error("Pasting is not allowed on this page.");
      });
    }
    preventCheating();
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowResults(true);
    }
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (showResults) {
      fetchEnrollment();
    }
  }, [showResults]);

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });
  };

  const getAnswerClass = (questionId, answer) => {
    if (showResults) {
      return collection.find((q) => q._id === questionId).trueAnswer === answer
        ? "list-group-item list-group-item-success"
        : "list-group-item list-group-item-danger";
    }
    return selectedAnswers[questionId] === answer
      ? "list-group-item active"
      : "list-group-item";
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  if (!collection) {
    return <div>Loading...</div>;
  }

  // Hàm để ghi nhận điểm cho user
  const fetchEnrollment = async () => {
    try {
      const accountid = localStorage.getItem("accountid");
      const correctAnswers = collection.filter(
        (question) => selectedAnswers[question._id] === question.trueAnswer
      ).length;
      const totalQuestions = collection.length;
      const grade = (correctAnswers / totalQuestions) * 10;
      const response = await createEnrollmentById(
        accountid,
        examId,
        grade,
        getAuthToken()
      );
      console.log("data enrollemt: ", response.data);
    } catch (error) {
      toast.error("Error fetching collection. Please try again.");
      console.error("Error fetching collection:", error);
    }
  };

  if (showResults) {
    const correctAnswers = collection.filter(
      (question) => selectedAnswers[question._id] === question.trueAnswer
    ).length;
    const totalQuestions = collection.length;
    const grade = (correctAnswers / totalQuestions) * 10;
    return (
      <div className="container">
        <h2>Exam Results</h2>
        <p>
          You answered {correctAnswers} out of {totalQuestions} questions
          correctly.
        </p>
        <p>Your grade is: {grade.toFixed(1)}</p>
        <button
          className="btn btn-primary"
          onClick={() => navigate("/examList")}
        >
          Back to Exam List
        </button>
      </div>
    );
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="container">
      <h2>Collection: {collection.name}</h2>
      <h3>Questions</h3>
      <div>Time Left: {formatTime(timeLeft)}</div>
      {collection.map((question, index) => (
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
                {["A", "B", "C", "D"].map((option) => (
                  <li
                    key={option}
                    className={getAnswerClass(question._id, option)}
                    onClick={() => handleAnswerSelect(question._id, option)}
                  >
                    <strong>Answer {option}:</strong>{" "}
                    {question[`answer${option}`]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ExamCheck;
