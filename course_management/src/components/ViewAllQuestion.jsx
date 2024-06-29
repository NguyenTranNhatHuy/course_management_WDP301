import React, { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getCollectionById } from '../services/CourseServices';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DataContext from '../context/DataProvider';
import { createExam } from '../services/ExamServices'; // Assuming you place the createExam function here

function getAuthToken() {
  const token = localStorage.getItem('token');
  return token;
}

export default function ViewAllQuestion() {
  const { id } = useParams();
  const [collection, setCollection] = useState(null);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showCreateExamModal, setShowCreateExamModal] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const [time, setTime] = useState(0); // State to hold time input
  const [pass, setPass] = useState(''); // State to hold password input
  const [examName, setExamName] = useState(''); // State to hold exam name input
  const { startQuiz } = useContext(DataContext);
  const navigate = useNavigate();

  const authToken = getAuthToken();

  useEffect(() => {
    const fetchCollection = async () => {
      const accessToken = getAuthToken();
      try {
        const response = await getCollectionById(id, accessToken);
        setCollection(response.data);
      } catch (error) {
        toast.error('Error fetching collection. Please try again.');
        console.error('Error fetching collection:', error);
      }
    };

    fetchCollection();
  }, [id]);

  const handleViewAnswer = (question) => {
    setSelectedQuestion(question);
  };

  const handleCloseAnswerModal = () => {
    setSelectedQuestion(null);
  };

  const handleOpenReviewModal = () => {
    setShowReviewModal(true);
  };

  const handleCloseReviewModal = () => {
    setShowReviewModal(false);
  };

  const handleStartTest = () => {
    if (questionCount < 1) {
      toast.error('Number of questions must be at least 1.');
      return;
    }
    if (questionCount > collection.questions.length) {
      toast.error('Invalid number of questions.');
      return;
    }

    const shuffledQuestions = collection.questions.sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffledQuestions.slice(0, questionCount);
    startQuiz(selectedQuestions);
    navigate('/test');
    setShowReviewModal(false);
  };

  const handleOpenCreateExamModal = () => {
    setShowCreateExamModal(true);
  };

  const handleCloseCreateExamModal = () => {
    setShowCreateExamModal(false);
  };

  const handleCreateExam = async () => {
    if (questionCount < 1) {
      toast.error('Number of questions must be at least 1.');
      return;
    }
    if (!pass) {
      toast.error('Password is required.');
      return;
    }
    if (time <= 1) {
      toast.error('Time must be more than 1 minute.');
      return;
    }
    if (!examName) {
      toast.error('Exam name is required.');
      return;
    }

    try {
      const examData = {
        examName,
        userId: '', // You need to set the userId here if needed
        collectionId: id,
        pass,
        time: parseInt(time), // Convert time to number
        numberOfQuestion: questionCount,
      };
      console.log(examData);
      const createdExam = await createExam(authToken, examData);
      console.log('Created Exam:', createdExam); // Handle success as needed
      toast.success('Exam created successfully');
    } catch (error) {
      toast.error('Failed to create exam. Please try again.');
      console.error('Error creating exam:', error);
    }
    setShowCreateExamModal(false);
  };

  if (!collection) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h2>Collection: {collection.name}</h2>
      <button className="btn btn-success" onClick={handleOpenReviewModal}>
        Review course
      </button>
      <button className="btn btn-primary" onClick={handleOpenCreateExamModal}>
        Create Exam
      </button>
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

      {/* Modal for viewing correct answer */}
      {selectedQuestion && (
        <div className="modal show" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseAnswerModal}
                >
                  &times;
                </button>
                <h4 className="modal-title">Correct Answer</h4>
              </div>
              <div className="modal-body">
                <p>
                  <strong>Correct Answer:</strong> {selectedQuestion.trueAnswer}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={handleCloseAnswerModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for entering number of questions */}
      {showReviewModal && (
        <div className="modal show" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseReviewModal}
                >
                  &times;
                </button>
                <h4 className="modal-title">Review Course</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="questionCountInput">Number of Questions</label>
                  <input
                    type="number"
                    className="form-control"
                    id="questionCountInput"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(e.target.value)}
                    placeholder="Enter number of questions"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleStartTest}
                >
                  Start Test
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={handleCloseReviewModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal for creating an exam */}
      {showCreateExamModal && (
        <div className="modal show" role="dialog" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="close"
                  onClick={handleCloseCreateExamModal}
                >
                  &times;
                </button>
                <h4 className="modal-title">Enter Exam Details</h4>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="examNameInput">Exam Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="examNameInput"
                    value={examName}
                    onChange={(e) => setExamName(e.target.value)}
                    placeholder="Enter exam name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="timeInput">Time (in minutes)</label>
                  <input
                    type="number"
                    className="form-control"
                    id="timeInput"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    placeholder="Enter time in minutes"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passInput">Password</label>
                  <input
                    type="text"
                    className="form-control"
                    id="passInput"
                    value={pass}
                    onChange={(e) => setPass(e.target.value)}
                    placeholder="Enter password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="questionCountInput">Number of Questions</label>
                  <input
                    type="number"
                    className="form-control"
                    id="questionCountInput"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(e.target.value)}
                    placeholder="Enter number of questions"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleCreateExam}
                >
                  Create Exam
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={handleCloseCreateExamModal}
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
