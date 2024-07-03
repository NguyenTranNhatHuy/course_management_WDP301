import React, { useEffect, useState, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getCollectionByIdRandomNum } from "../services/CourseServices";
import { createEnrollmentById } from "../services/EnrollmentServices";
import { toast } from "react-toastify";
import "../style/result.css";

const getAuthToken = () => localStorage.getItem("token");

const usePreventCheating = () => {
  useEffect(() => {
    const preventActions = (e) => {
      e.preventDefault();
      toast.error("Action is not allowed on this page.");
    };

    const preventKeys = (e) => {
      const forbiddenKeys = ["C", "T", "V", "U", "F12"];
      if (
        (e.ctrlKey && forbiddenKeys.includes(e.key.toUpperCase())) ||
        (e.shiftKey && e.ctrlKey && ["I", "J", "C", "V"].includes(e.key.toUpperCase()))
      ) {
        preventActions(e);
      }
    };

    document.addEventListener("copy", preventActions);
    document.addEventListener("contextmenu", preventActions);
    document.addEventListener("keydown", preventKeys);
    document.addEventListener("paste", preventActions);

    return () => {
      document.removeEventListener("copy", preventActions);
      document.removeEventListener("contextmenu", preventActions);
      document.removeEventListener("keydown", preventKeys);
      document.removeEventListener("paste", preventActions);
    };
  }, []);
};

const ExamCheck = () => {
  const { collectionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [numberQuestion, setNumberQuestion] = useState(location.state?.numberOfQuestion || 0);
  const [examId, setExamId] = useState(location.state?.examId);
  const [showResults, setShowResults] = useState(false);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [timeLeft, setTimeLeft] = useState(
    parseInt(localStorage.getItem("timeLeft")) || (location.state?.time * 60 || 0)
  );
  const fetchCollection = useCallback(async () => {
    try {
      const response = await getCollectionByIdRandomNum(
        collectionId,
        numberQuestion,
        getAuthToken()
      );
      setCollection(response.data);
      if (response.data.length > 0) {
        setActiveQuestion(response.data[0]._id);
      }
      console.log("question: ", response.data);
      console.log("numberQuestion: ", numberQuestion);
      console.log("Exam Id: ", examId);
    } catch (error) {
      toast.error("Error fetching collection. Please try again.");
      console.error("Error fetching collection:", error);
    }
  }, [collectionId, numberQuestion, examId]);

  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

  // usePreventCheating();

  useEffect(() => {
    if (timeLeft === 0) {
      setShowResults(true);
    }
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prevTimeLeft) => {
          const newTimeLeft = prevTimeLeft - 1;
          localStorage.setItem("timeLeft", newTimeLeft);
          return newTimeLeft;
        });
      }, 1000);
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

  const fetchEnrollment = useCallback(async () => {
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
      console.log("data enrollment: ", response.data);
    } catch (error) {
      toast.error("Error fetching collection. Please try again.");
      console.error("Error fetching collection:", error);
    }
  }, [collection, selectedAnswers, examId]);

  useEffect(() => {
    const handleScrollToQuestion = () => {
      const hash = window.location.hash;
      if (hash) {
        const questionIndex = parseInt(hash.split("-")[1]) - 1;
        const questionId = collection[questionIndex]._id;
        setActiveQuestion(questionId);
        const element = document.getElementById(`question-${questionIndex + 1}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleScrollToQuestion();

    window.addEventListener("hashchange", handleScrollToQuestion);
    return () => {
      window.removeEventListener("hashchange", handleScrollToQuestion);
    };
  }, [collection]);


  if (!collection) {
    return <div>Loading...</div>;
  }

  if (showResults) {
    const correctAnswers = collection.filter(
      (question) => selectedAnswers[question._id] === question.trueAnswer
    ).length;
    const totalQuestions = collection.length;
    const grade = (correctAnswers / totalQuestions) * 10;
    localStorage.removeItem("timeLeft");
    return (
      <div className="container-result">
        <h2>Exam Results</h2>
        <div className="content">
          <p>
            You answered {correctAnswers} out of {totalQuestions} questions
            correctly.
          </p>
          <p>Your grade is: {grade.toFixed(1)}</p>
        </div>
        <button
          className="btn btn-primary go-back"
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
    <div className="container-fluid">
      {/* <h2 style={{ margin: '20px 0' }}>Collection: {collection.name}</h2> */}
      {/* <div className="row">
        <div className="col-md-8">
          <h3>Questions</h3>

        </div>
        <div className="col-md-4">
        </div>
      </div> */}
      <div style={{ marginTop: '50px ' }} className="row ">
        <div style={{ marginRight: '100px' }} className="col-md-7">
          {collection.map((question, index) => (
            <div
              key={question._id}
              className={`question ${activeQuestion === question._id ? 'active' : ''}`}
              id={`question-${index + 1}`}
            >
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">Question {index + 1}</h4>
                </div>
                <div className="panel-body">
                  <p style={{ textAlign: 'justify' }}>
                    <strong>Detail:</strong> {question.detail}
                  </p>
                  <ul className="list-group">
                    {["A", "B", "C", "D"].map((option) => (
                      <li
                        style={{ textAlign: 'justify' }}
                        key={option}
                        className={getAnswerClass(question._id, option)}
                        onClick={() => {
                          handleAnswerSelect(question._id, option);
                          setActiveQuestion(question._id);
                        }}
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
          <button style={{ marginBottom: '300px' }} className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="col-md-3" style={{maxHeight:"500px", border: '1px solid #ccc', borderRadius: '3px', boxShadow: '5px 10px #888888', zIndex: '500', position: 'fixed', right: '100px', top: '200px', padding: '10px', background: '#fff', overflowY:"scroll"}}>
          <span style={{ display: 'block', marginBottom: '10px' }}>Time Left: {formatTime(timeLeft)}</span>
          <ul className="nav nav-pills flex-column">
            {collection.map((question, index) => (
              <li
                key={question._id}
                className={`btn btn-secondary ${selectedAnswers[question._id] ? 'active' : ''}`}
                style={{ marginBottom: '5px' }}
              >
                <a
                  style={{ border: '1px solid #ccc', display: 'block', width:'50px' }}
                  href={`#question-${index + 1}`}
                  aria-expanded="false"
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(`question-${index + 1}`);
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ExamCheck;
