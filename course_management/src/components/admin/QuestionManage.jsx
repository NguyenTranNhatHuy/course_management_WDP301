import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faGauge, faMagnifyingGlass, faPenToSquare, faQuestionCircle, faTrash, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Pagination from './Pagination';
import { addQuestion, deleteQuestionById, getAllQuestions, updateQuestionById } from '../../services/QuestionServices';

function QuestionManage() {
    function getAuthToken() {
        const token = localStorage.getItem('token');
        return token;
    }
    const authToken = getAuthToken();
    const [questions, setQuestions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredQuestions, setFilteredQuestions] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [questionsPerPage] = useState(10);
    const [updateData, setUpdateData] = useState({
        _id: '',
        detail: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        trueAnswer: '',
    });

    const [newQuestion, setNewQuestion] = useState({
        detail: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        trueAnswer: '',
    });

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [questionIndex, setStartIndex] = useState(0);

    const fetchQuestions = async () => {
        try {
            const response = await getAllQuestions(authToken);
            setQuestions(response.data);
            setFilteredQuestions(response.data);
            console.log('fetching questions:', response.data);
        } catch (error) {
            console.error('Error fetching collections:', error);
            setQuestions([]);
            setFilteredQuestions([]);
        }
    };

    useEffect(() => {
        fetchQuestions();
    }, []);

    const handleDeleteQuestion = async (questionId) => {
        const shouldDelete = window.confirm(
            "Are you sure you want to delete this question?"
        );
        try {
            if (shouldDelete) {
                const response = await deleteQuestionById(questionId, authToken);
                console.log('quesstion deleted:', response.data);
                toast.success('Collection deleted successfully');
                fetchQuestions();
            }
        } catch (error) {
            console.error('Error deleting question:', error);
            toast.error('Error deleting question');
        }
    };

    const handleUpdateQuestion = async (e) => {
        e.preventDefault();
        try {
            const response = await updateQuestionById(updateData._id, updateData, authToken);
            console.log('question updated:', response.data);
            toast.success('question updated successfully');
            fetchQuestions();
            window.location.href = "/admin/questionManage"
        } catch (error) {
            console.error('Error updating question:', error);
            toast.error('Error updating question');
        }
    };

    const openUpdateModal = (question) => {
        setUpdateData({
            _id: question._id,
            detail: question.detail,
            answerA: question.answerA,
            answerB: question.answerB,
            answerC: question.answerC,
            answerD: question.answerD,
            trueAnswer: question.trueAnswer,
        });
        setShowUpdateModal(true);
    };

    const closeUpdateModal = () => {
        setShowUpdateModal(false);
    };

    const handleAddQuestionChange = (e) => {
        const { name, value } = e.target;
        setNewQuestion((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddQuestionSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addQuestion(newQuestion, authToken);
            console.log('Response:', response);
            toast.success('New Question added successfully');
            fetchQuestions();
            window.location.href = "/admin/questionManage"
        } catch (error) {
            console.error('Error adding new Question:', error);
            toast.error('Error adding new Question');
        }
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query === '') {
            setFilteredQuestions(questions);
        } else {
            const filtered = questions.filter(question =>
                question.detail.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredQuestions(filtered);
        }
    };

    const indexOfLastQuestion = currentPage * questionsPerPage;
    const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
    const currentQuestions = filteredQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setStartIndex((pageNumber - 1) * questionsPerPage);
    };
    return (
        <div>
            <div className="sb-nav-fixed">
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">

                        <nav className="sb-sidenav accordion sb-sidenav-dark">
                            <div className="sb-sidenav-menu">
                                <ul style={{ marginTop: '100px', textAlign: 'justify' }} className="nav">
                                    <li>
                                        <a className="nav-link" href="/admin/accountManage">
                                            <FontAwesomeIcon icon={faUsersRectangle} fade /> <span style={{ marginLeft: '3px' }}>Manage Accounts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="/admin/collectionManage">
                                            <FontAwesomeIcon icon={faCheckCircle} fade /> <span style={{ marginLeft: '3px' }}>Manage Collections</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="/admin/questionManage">
                                            <FontAwesomeIcon icon={faQuestionCircle} fade /> <span style={{ marginLeft: '3px' }}>Manage Questions</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a target='_blank' className="nav-link" href="https://my.payos.vn/57d24797345811ef915f0242ac110002/dashboard">
                                            <FontAwesomeIcon icon={faQuestionCircle} /> <span style={{ marginLeft: '3px' }}>Manage Deposit</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <div className=''>
                            <button style={{ marginBottom: '15px' }} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#addAccount">Add Questions</button>
                        </div>
                        <div className="modal fade" id="addAccount" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Add Question</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleAddQuestionSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="new-username">Detail:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="new-username"
                                                    name="detail"
                                                    value={newQuestion.detail}
                                                    onChange={handleAddQuestionChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="new-password">Answer A:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="new-password"
                                                    name="answerA"
                                                    value={newQuestion.answerA}
                                                    onChange={handleAddQuestionChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="new-password">Answer B:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="new-password"
                                                    name="answerB"
                                                    value={newQuestion.answerB}
                                                    onChange={handleAddQuestionChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="new-password">Answer C:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="new-password"
                                                    name="answerC"
                                                    value={newQuestion.answerC}
                                                    onChange={handleAddQuestionChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="new-password">Answer D:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="new-password"
                                                    name="answerD"
                                                    value={newQuestion.answerD}
                                                    onChange={handleAddQuestionChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="new-price">Price:</label>
                                                <select
                                                    className="form-control"
                                                    id="new-price"
                                                    name="trueAnswer"
                                                    value={newQuestion.trueAnswer}
                                                    onChange={handleAddQuestionChange}
                                                >
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="D">D</option>
                                                </select>
                                            </div>

                                            <button type="submit" className="btn btn-primary">Add</button>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`modal fade ${showUpdateModal ? 'show' : ''}`} id="updateAccount" role="dialog" style={{ display: showUpdateModal ? 'block' : 'none' }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button onClick={() => closeUpdateModal()} type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Update Account</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleUpdateQuestion}>
                                            <div className="form-group">
                                                <label htmlFor="username">Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    value={updateData.detail}
                                                    onChange={(e) => setUpdateData({ ...updateData, detail: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="username">Answer A:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    value={updateData.answerA}
                                                    onChange={(e) => setUpdateData({ ...updateData, answerA: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="username">Answer B:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    value={updateData.answerB}
                                                    onChange={(e) => setUpdateData({ ...updateData, answerB: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="username">Answer C:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    value={updateData.answerC}
                                                    onChange={(e) => setUpdateData({ ...updateData, answerC: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="username">Answer D:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    value={updateData.answerD}
                                                    onChange={(e) => setUpdateData({ ...updateData, answerD: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="new-price">Price:</label>
                                                <select
                                                    className="form-control"
                                                    id="new-price"
                                                    name="trueAnswer"
                                                    value={updateData.trueAnswer}
                                                    onChange={(e) => setUpdateData({ ...updateData, trueAnswer: e.target.value })}
                                                >
                                                    <option value="A">A</option>
                                                    <option value="B">B</option>
                                                    <option value="C">C</option>
                                                    <option value="D">D</option>
                                                </select>
                                            </div>

                                            <button type="submit" className="btn btn-primary">Update</button>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button onClick={() => closeUpdateModal()} type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <main>
                            <div className="container-fluid">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <i className="fa fa-table" /> Question Manage
                                    </div>
                                    <div style={{ width: '200px', margin: '20px' }} className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Type detail question"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                        />
                                        <span className="input-group-addon">
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </span>
                                    </div>

                                    <div className="panel-body">
                                        <table className="table table-striped table-bordered" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Detail</th>
                                                    <th>Answer A</th>
                                                    <th>Answer B</th>
                                                    <th>Answer C</th>
                                                    <th>Answer D</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentQuestions && currentQuestions.length > 0 ? (
                                                    currentQuestions.map((question, index) => (
                                                        <tr key={question._id}>
                                                            <td>{questionIndex + index + 1}</td>
                                                            <td>{question.detail}</td>
                                                            <td>{question.answerA}</td>
                                                            <td>{question.answerB}</td>
                                                            <td>{question.answerC}</td>
                                                            <td>{question.answerD}</td>
                                                            <td>{question.trueAnswer}</td>
                                                            <td>
                                                                <div className='d-flex'>
                                                                    <button onClick={() => openUpdateModal(question)} data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                        <FontAwesomeIcon icon={faPenToSquare} />
                                                                    </button>
                                                                    <button onClick={() => handleDeleteQuestion(question._id)} className='btn btn-danger'>
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="6">No questions found</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                        <div style={{ float: 'right' }}>
                                            <Pagination
                                                accountsPerPage={questionsPerPage}
                                                totalAccounts={filteredQuestions.length}
                                                paginate={handlePageChange}
                                            />
                                        </div>
                                        <div style={{ clear: 'both' }}>
                                            Size: {filteredQuestions.length} questions.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default QuestionManage