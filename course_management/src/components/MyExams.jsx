import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllExams, updateExam } from "../services/ExamServices";
import { toast } from "react-toastify";
import ReactPaginate from "react-paginate";
import GPT from "./popup/App";
import Breadcrumb from "./layouts/Breadcrumb";
import "../style/coursePage.css";

export default function MyExams() {
    const navigate = useNavigate();
    const [exams, setExams] = useState([]);
    const [filteredExams, setFilteredExams] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedExam, setSelectedExam] = useState(null);
    const [numberQuestion, setNumberQuestion] = useState(null);
    const [password, setPassword] = useState("");
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [examImages, setExamImages] = useState({});
    const itemsPerPage = 6;

    const images = [
        "assets/img/courses/1.jpg",
        "assets/img/courses/2.jpg",
        "assets/img/courses/3.jpg",
        "assets/img/courses/4.jpg",
        "assets/img/courses/5.jpg",
        "assets/img/courses/6.jpg",
    ];

    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    function getAuthToken() {
        const token = localStorage.getItem("token");
        return token;
    }

    function getUserId() {
        const userId = localStorage.getItem("accountid");
        return userId;
    }

    useEffect(() => {
        const fetchExams = async () => {
            try {
                const response = await getAllExams(getAuthToken());
                const fetchedExams = response.data;
                const userId = getUserId();
                const userExams = fetchedExams.filter(exam => exam.userId === userId);

                const imagesMap = userExams.reduce((acc, exam) => {
                    acc[exam._id] = getRandomImage();
                    return acc;
                }, {});

                setExams(userExams);
                setFilteredExams(userExams);
                setExamImages(imagesMap);
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

    // const handleDeleteExam = async (exam) => {
    //     try {
    //         // Implement delete logic here
    //         toast.success("Exam deleted successfully");
    //         setExams(exams.filter((e) => e._id !== exam._id));
    //         setFilteredExams(filteredExams.filter((e) => e._id !== exam._id));
    //     } catch (error) {
    //         toast.error("Error deleting exam: " + error.message);
    //     }
    // };
    const handleDeleteExam = async (exam) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this exam?");
        if (isConfirmed) {
            try {
                const token = getAuthToken();
                await updateExam(exam._id, { userId: null }, token);
                toast.success("Exam deleted successfully");
                setExams(exams.filter((e) => e._id !== exam._id));
                setFilteredExams(filteredExams.filter((e) => e._id !== exam._id));
            } catch (error) {
                toast.error("Error deleting exam: " + error.message);
            }
        }
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

    const searchByName = (event) => {
        const searchTerm = event.target.value.trim();
        if (searchTerm) {
            const filteredExams = exams.filter((exam) =>
                exam.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredExams(filteredExams);
        } else {
            setFilteredExams(exams);
        }
        setCurrentPage(0);
    };

    const handlePageClick = (event) => {
        setCurrentPage(event.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentItems = filteredExams.slice(offset, offset + itemsPerPage);

    return (
        <div>
            <Breadcrumb name={"My Exams"} numOfImage={2} />
            <div className="popular-courses default-padding bottom-less without-carousel">
                <div className="container">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search for exams..."
                            id="searchByName"
                            className="form-control"
                            onChange={searchByName}
                        />
                        <button
                            onClick={() =>
                                searchByName({
                                    target: { value: document.getElementById("searchByName").value },
                                })
                            }
                        >
                            <i className="fas fa-search" />
                        </button>
                    </div>
                    <div style={{ marginTop: '100px' }} className="row">
                        <div className="popular-courses-items">
                            {currentItems.length > 0 ? (
                                currentItems.map((exam) => (
                                    <div className="col-md-4 col-sm-6 equal-height" key={exam._id}>
                                        <div className="item">
                                            <div className="thumb" style={{ cursor: 'pointer' }}>
                                                <img src={examImages[exam._id]} alt="Thumb" />
                                                <div className="price">Time: {exam.time}'</div>
                                            </div>
                                            <div className="info">
                                                <h4>
                                                    <a style={{ cursor: 'pointer' }}>{exam.name}</a>
                                                </h4>
                                                <div className="bottom-info">
                                                    <button
                                                        style={{ margin: '0 12px' }}
                                                        className="btn btn-primary"
                                                        onClick={() => handleJoinExam(exam)}
                                                    >
                                                        Join
                                                    </button>
                                                    <button
                                                        style={{ margin: '0 12px' }}
                                                        className="btn btn-danger"
                                                        onClick={() => handleDeleteExam(exam)}
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h3 className="text-danger">No exam found...</h3>
                            )}
                        </div>
                    </div>
                    {filteredExams.length > 0 && (
                        <ReactPaginate
                            previousLabel={"Previous"}
                            nextLabel={"Next"}
                            breakLabel={"..."}
                            breakClassName={"break-me"}
                            pageCount={Math.ceil(filteredExams.length / itemsPerPage)}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={"pagination"}
                            activeClassName={"active"}
                        />
                    )}
                </div>
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
}
