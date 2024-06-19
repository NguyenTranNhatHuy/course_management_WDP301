import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faGauge, faPenToSquare, faQuestion, faQuestionCircle, faTrash, faUsers, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";

import { Link } from 'react-router-dom'
function CollectionManage() {


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
                            Add Collection
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
                                                    <th>Name</th>
                                                    <th>Number of question</th>
                                                    <th>Price</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Test Collection 1</td>
                                                    <td>10</td>
                                                    <td>100</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 2</td>
                                                    <td>15</td>
                                                    <td>150</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 3</td>
                                                    <td>8</td>
                                                    <td>80</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 4</td>
                                                    <td>12</td>
                                                    <td>120</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 5</td>
                                                    <td>20</td>
                                                    <td>200</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 6</td>
                                                    <td>5</td>
                                                    <td>50</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 7</td>
                                                    <td>18</td>
                                                    <td>180</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 8</td>
                                                    <td>14</td>
                                                    <td>140</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 9</td>
                                                    <td>7</td>
                                                    <td>70</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 10</td>
                                                    <td>9</td>
                                                    <td>90</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
                                                                <FontAwesomeIcon icon={faTrash} />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Test Collection 11</td>
                                                    <td>9</td>
                                                    <td>90</td>
                                                    <td>
                                                        <div className='d-flex'>
                                                            <button data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                <FontAwesomeIcon icon={faPenToSquare} />
                                                            </button>
                                                            <button className='btn btn-danger'>
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

export default CollectionManage