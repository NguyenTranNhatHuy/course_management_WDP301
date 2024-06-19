import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faGauge, faPenSquare, faPenToSquare, faQuestion, faQuestionCircle, faTrash, faUsers, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import { Link } from 'react-router-dom'
function QuestionManage() {
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
                                        <a className="nav-link" href="/admin/dashboard">
                                            <FontAwesomeIcon icon={faGauge} fade /> <span style={{ marginLeft: '3px' }}>Dashboard</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        <button className="btn btn-success" style={{ marginBottom: 15 }}>
                            Add Question
                        </button>
                        <main>
                            <div className="container-fluid">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <i className="fa fa-table" /> Collections Manage
                                    </div>
                                    <div className="panel-body">
                                        <table
                                            id="datatablesSimple"
                                            className="table table-striped table-bordered"
                                            style={{ width: "100%" }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Detail</th>
                                                    <th>AnwserA</th>
                                                    <th>AnwserB</th>
                                                    <th>AnwserC</th>
                                                    <th>AnwserD</th>
                                                    <th>TrueAnwser</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1 + 1 = ?</td>
                                                    <td>2</td>
                                                    <td>1</td>
                                                    <td>3</td>
                                                    <td>4</td>
                                                    <td>A</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Which country is located in Asia?</td>
                                                    <td>USA</td>
                                                    <td>Vietnam</td>
                                                    <td>Germany</td>
                                                    <td>France</td>
                                                    <td>B</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>What is the capital of France?</td>
                                                    <td>Berlin</td>
                                                    <td>Madrid</td>
                                                    <td>Paris</td>
                                                    <td>Rome</td>
                                                    <td>C</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>What is the largest planet in our solar system?</td>
                                                    <td>Earth</td>
                                                    <td>Mars</td>
                                                    <td>Jupiter</td>
                                                    <td>Saturn</td>
                                                    <td>C</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Who wrote 'Romeo and Juliet'?</td>
                                                    <td>Charles Dickens</td>
                                                    <td>Jane Austen</td>
                                                    <td>William Shakespeare</td>
                                                    <td>Mark Twain</td>
                                                    <td>C</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>What is the boiling point of water?</td>
                                                    <td>90°C</td>
                                                    <td>100°C</td>
                                                    <td>110°C</td>
                                                    <td>120°C</td>
                                                    <td>B</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>What is the currency of Japan?</td>
                                                    <td>Yen</td>
                                                    <td>Won</td>
                                                    <td>Dollar</td>
                                                    <td>Euro</td>
                                                    <td>A</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>What is the smallest prime number?</td>
                                                    <td>0</td>
                                                    <td>1</td>
                                                    <td>2</td>
                                                    <td>3</td>
                                                    <td>C</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>What is the chemical symbol for gold?</td>
                                                    <td>Au</td>
                                                    <td>Ag</td>
                                                    <td>Pb</td>
                                                    <td>Fe</td>
                                                    <td>A</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Who is the author of '1984'?</td>
                                                    <td>George Orwell</td>
                                                    <td>Aldous Huxley</td>
                                                    <td>J.K. Rowling</td>
                                                    <td>J.R.R. Tolkien</td>
                                                    <td>A</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>What is the capital city of Australia?</td>
                                                    <td>Sydney</td>
                                                    <td>Melbourne</td>
                                                    <td>Brisbane</td>
                                                    <td>Canberra</td>
                                                    <td>D</td>
                                                    <td>
                                                        <div className="d-flex">
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className="btn btn-primary">
                                                                <FontAwesomeIcon icon={faPenSquare} />
                                                            </button>
                                                            <button className="btn btn-danger">
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>

                                    </div>
                                </div>
                            </div>
                        </main>
                        <footer className="bg-light text-muted">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <p>Copyright © Your Website 2023</p>
                                    </div>
                                    <div className="col-sm-6 text-right">
                                        <a href="#">Privacy Policy</a> ·
                                        <a href="#">Terms &amp; Conditions</a>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default QuestionManage