import React, { useEffect, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getCollectionById } from '../services/CourseServices';
import { toast } from 'react-toastify';

function getAuthToken() {
  const token = localStorage.getItem('token');
  return token;
}

const ExamCheck = () => {
  const { collectionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [collection, setCollection] = useState(null);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(location.state?.time * 60 || 0);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        const response = await getCollectionById(collectionId, getAuthToken());
        setCollection(response.data);
      } catch (error) {
        toast.error('Error fetching collection. Please try again.');
        console.error('Error fetching collection:', error);
      }
    };

    fetchCollection();
  }, [collectionId]);

  useEffect(() => {
    if (timeLeft === 0) {
      setShowResults(true);
    }
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleAnswerSelect = (questionId, answer) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answer,
    });
  };

  const getAnswerClass = (questionId, answer) => {
    if (showResults) {
      return collection.questions.find((q) => q._id === questionId).trueAnswer === answer
        ? 'list-group-item list-group-item-success'
        : 'list-group-item list-group-item-danger';
    }
    return selectedAnswers[questionId] === answer
      ? 'list-group-item active'
      : 'list-group-item';
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  if (!collection) {
    return <div>Loading...</div>;
  }

  if (showResults) {
    const correctAnswers = collection.questions.filter(
      (question) => selectedAnswers[question._id] === question.trueAnswer
    ).length;
    const totalQuestions = collection.questions.length;
    const grade = (correctAnswers / totalQuestions) * 10;

    return (
      <div className="container">
        <h2>Exam Results</h2>
        <p>
          You answered {correctAnswers} out of {totalQuestions} questions correctly.
        </p>
        <p>
          Your grade is: {grade.toFixed(1)}
        </p>
        <button className="btn btn-primary" onClick={() => navigate('/examList')}>
          Back to Exam List
        </button>
      </div>
    );
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <div className="container">
      <h2>Collection: {collection.name}</h2>
      <h3>Questions</h3>
      <div>
        Time Left: {formatTime(timeLeft)}
      </div>
      {collection.questions.map((question, index) => (
        <div key={question._id} className="question">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">Question {index + 1}</h4>
            </div>
            <div className="panel-body">
              <p><strong>Detail:</strong> {question.detail}</p>
              <ul className="list-group">
                {['A', 'B', 'C', 'D'].map((option) => (
                  <li
                    key={option}
                    className={getAnswerClass(question._id, option)}
                    onClick={() => handleAnswerSelect(question._id, option)}
                  >
                    <strong>Answer {option}:</strong> {question[`answer${option}`]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default ExamCheck;
