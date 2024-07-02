import React, { useContext, useEffect, useState } from 'react';
import Breadcrumb from './layouts/Breadcrumb';
import { useNavigate, useParams } from 'react-router-dom';
import DataContext from '../context/DataProvider';
import { getCollectionById } from '../services/CourseServices';
import { toast } from 'react-toastify';
import { createExam } from '../services/ExamServices';
import { addFavoriteCourse } from '../services/AccountServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight, faAnglesLeft, faAnglesRight } from '@fortawesome/free-solid-svg-icons';

export default function DetailCourse() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    function getAuthToken() {
        const token = localStorage.getItem("token");
        return token;
    }

    const { id } = useParams();
    const [collection, setCollection] = useState(null);
    const [showReviewModal, setShowReviewModal] = useState(false);
    const [showCreateExamModal, setShowCreateExamModal] = useState(false);
    const [questionCount, setQuestionCount] = useState(0);
    const [time, setTime] = useState(0); // State to hold time input
    const [pass, setPass] = useState(""); // State to hold password input
    const [examName, setExamName] = useState(""); // State to hold exam name input
    const { startQuiz } = useContext(DataContext);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const navigate = useNavigate();

    const authToken = getAuthToken();

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

    const handleOpenReviewModal = () => {
        setShowReviewModal(true);
    };

    const handleCloseReviewModal = () => {
        setShowReviewModal(false);
    };

    const handleStartTest = () => {
        if (questionCount < 1) {
            toast.error("Number of questions must be at least 1.");
            return;
        }
        if (questionCount > collection.questions.length) {
            toast.error("Invalid number of questions.");
            return;
        }

        const shuffledQuestions = collection.questions.sort(
            () => 0.5 - Math.random()
        );
        const selectedQuestions = shuffledQuestions.slice(0, questionCount);
        startQuiz(selectedQuestions);
        navigate("/test");
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
            toast.error("Number of questions must be at least 1.");
            return;
        }
        if (!pass) {
            toast.error("Password is required.");
            return;
        }
        if (time <= 1) {
            toast.error("Time must be more than 1 minute.");
            return;
        }
        if (!examName) {
            toast.error("Exam name is required.");
            return;
        }

        const accountid = localStorage.getItem("accountid");

        try {
            const examData = {
                name: examName,
                userId: accountid, // You need to set the userId here if needed
                collectionId: id,
                pass: pass,
                time: parseInt(time), // Convert time to number
                numberOfQuestion: questionCount,
            };
            console.log(examData);
            const createdExam = await createExam(authToken, examData);
            console.log("Created Exam:", createdExam); // Handle success as needed
            toast.success("Exam created successfully");
        } catch (error) {
            toast.error("Failed to create exam. Please try again.");
            console.error("Error creating exam:", error);
        }
        setShowCreateExamModal(false);
    };

    if (!collection) {
        return <div>Loading...</div>;
    }

    const fetchNewFavorite = async () => {
        try {
            const accountid = localStorage.getItem("accountid");
            console.log("id collection = ", id);

            const response = await addFavoriteCourse(
                accountid,
                id,
                getAuthToken()
            );
            console.log("data enrollemt: ", response.data);
            toast.success("Add favorite successfully");
        } catch (error) {
            toast.error("Error fetching collection. Please try again.");
            console.error("Error fetching collection:", error);
        }
    };
    const handleFirst = () => {
        setCurrentQuestionIndex(0);
    };

    const handleLast = () => {
        if (collection) {
            setCurrentQuestionIndex(collection.questions.length - 1);
        }
    };

    const handleNext = () => {
        if (collection && currentQuestionIndex < collection.questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };
    const question = collection.questions[currentQuestionIndex];

    return (
        <div>

            <Breadcrumb name={"Course"} numOfImage={10} />
            <div className="course-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="course-details-info">
                                {/* Start Top Info */}
                                <div className="top-info">
                                    {/* Title */}
                                    <div className="title">
                                        <h2>{collection.name}</h2>
                                    </div>
                                    {/* End Title */}
                                    {/* Thumbnail */}
                                    <div className="thumb">
                                        <div
                                            className={`thumb flip-container ${isFlipped ? 'flip' : ''}`}
                                            onClick={handleFlip}
                                        >
                                            {/* {questions.map((question, index) => ( */}
                                            <div key={question._id} className="flipper">
                                                <div className="front panel panel-default">
                                                    <div className="panel-heading">
                                                        <h3 className="panel-title">Chi tiết câu hỏi</h3>
                                                    </div>
                                                    <div className="panel-body">
                                                        <p>
                                                            <strong>Câu hỏi: {question.detail}</strong>
                                                        </p>
                                                        <ul className="list-group">
                                                            <li className="list-group-item">A. {question.answerA}</li>
                                                            <li className="list-group-item">B. {question.answerB}</li>
                                                            <li className="list-group-item">C. {question.answerC}</li>
                                                            <li className="list-group-item">D. {question.answerD}</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="back panel panel-default">
                                                    <div className="panel-heading">
                                                        <h3 className="panel-title">Đáp án đúng</h3>
                                                    </div>
                                                    <div className="panel-body d-flex justify-content-center align-items-center">
                                                        <p>
                                                            {question.trueAnswer}
                                                        </p>
                                                    </div>
                                                </div>

                                            </div>

                                            {/* ))} */}
                                        </div>
                                    </div>
                                    {/* End Thumbnail */}
                                </div>

                                {/* End Top Info */}
                                {/* Start Tab Info */}
                                <div style={{ marginTop: 330 }} className="tab-info">
                                    <div style={{ marginBottom: '50px' }}>
                                        <button className='btn btn-primary' onClick={handleFirst} disabled={currentQuestionIndex === 0}><FontAwesomeIcon icon={faAnglesLeft} /></button>
                                        <button className='btn btn-primary' onClick={handlePrev} disabled={currentQuestionIndex === 0}><FontAwesomeIcon icon={faAngleLeft} /></button>
                                        <span style={{ margin: '10px' }}> {currentQuestionIndex + 1} </span>
                                        <button className='btn btn-primary' onClick={handleNext} disabled={currentQuestionIndex === collection.questions.length - 1}><FontAwesomeIcon icon={faAngleRight} /></button>
                                        <button className='btn btn-primary' onClick={handleLast} disabled={currentQuestionIndex === collection.questions.length - 1}><FontAwesomeIcon icon={faAnglesRight} /></button>
                                    </div>
                                    {/* Tab Nav */}
                                    <ul className="nav nav-pills">
                                        <li className="active">
                                            <a data-toggle="tab" href="" aria-expanded="false">
                                                Learning
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={handleOpenReviewModal} data-toggle="tab" href="" aria-expanded="false">
                                                Review Course
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={handleOpenCreateExamModal} data-toggle="tab" href="" aria-expanded="false">
                                                Create Exam
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={fetchNewFavorite} data-toggle="tab" href="" aria-expanded="false">
                                                Add to Favorite
                                            </a>
                                        </li>
                                    </ul>
                                    {/* End Tab Nav */}
                                    {/* Start Tab Content */}
                                    <div className="tab-content tab-content-info">
                                        {/* Single Tab */}
                                        <div id="tab3" className="tab-pane fade active in">
                                            <div className="info title">
                                                <div className="advisor-list-items">
                                                    {/* Advisor Item */}
                                                    {collection.questions.map((question, index) => (
                                                        <div style={{ borderRadius: '10px' }} className="item">
                                                            <div className="row">
                                                                <div style={{ borderRight: '1px solid #ccc' }} className="col-md-4">
                                                                    <div className="thumb text-center">

                                                                        <span>Đáp án đúng</span>
                                                                        <h3>{question.trueAnswer}</h3>
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-8">
                                                                    <div style={{ textAlign: 'justify' }} className="info">
                                                                        <span>{question.detail}</span>
                                                                        <h5>
                                                                            A. {question.answerA}
                                                                        </h5>
                                                                        <h5>
                                                                            B. {question.answerB}
                                                                        </h5>
                                                                        <h5>
                                                                            C. {question.answerC}
                                                                        </h5>
                                                                        <h5>
                                                                            D. {question.answerD}
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {/* End Advisor Item */}
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Single Tab */}
                                    </div>
                                    {/* End Tab Content */}
                                </div>
                                {/* End Tab Info */}
                            </div>
                        </div>
                        {/* Start Sidebar */}
                        <div className="col-md-4">
                            <div className="sidebar">
                                <aside>
                                    {/* Sidebar Item */}
                                    <div className="sidebar-item recent-post">
                                        <div className="title">
                                            <h4>Popular Courses</h4>
                                        </div>
                                        <div className="item">
                                            <div className="content">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/courses/g1.jpg" alt="Thumb" className="img-responsive" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <h4>
                                                        <a href="#">Profession Python Learning</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* End Sidebar Item */}
                                </aside>
                            </div>
                        </div>
                        {/* End Sidebar */}
                    </div>
                </div>
            </div>
            {/* Modal for entering number of questions */}
            {showReviewModal && (
                <div className="modal show" role="dialog" style={{ display: "block" }}>
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
                                    <label htmlFor="questionCountInput">
                                        Number of Questions
                                    </label>
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
                <div className="modal show" role="dialog" style={{ display: "block" }}>
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
                                    <label htmlFor="questionCountInput">
                                        Number of Questions
                                    </label>
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
