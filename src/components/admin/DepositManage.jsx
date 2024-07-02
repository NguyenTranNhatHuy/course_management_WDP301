import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faGauge, faMagnifyingGlass, faPenToSquare, faQuestionCircle, faTrash, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getAllDeposit, updateDepositById } from '../../services/DepositService';
import Pagination from './Pagination';

function DepositManage() {

    function getAuthToken() {
        const token = localStorage.getItem('token');
        return token;
    }

    const authToken = getAuthToken();

    const [deposit, setDeposit] = useState([]);
    const [filteredDeposit, setFilteredDeposit] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const [depositsPerPage] = useState(10);
   
    const [depositIndex, setStartIndex] = useState(0);

    const fetchDeposit = async () => {
        try {
            const response = await getAllDeposit(authToken);
            setDeposit(response.data.deposits); // Ensure this matches the API response structure
            setFilteredDeposit(response.data.deposits);
        } catch (error) {
            console.error('Error fetching deposits:', error);
            setDeposit([]);
            setFilteredDeposit([]);
        }
    };

    useEffect(() => {
        fetchDeposit();
    }, []);

    const handleReject = async (depositId) => {
        const status = "reject";
        const shouldDelete = window.confirm(
            "Are you sure you want to reject this request?"
        );
        try {
            if (shouldDelete) {
                const response = await updateDepositById(depositId, {status}, authToken); // Ensure this function matches your service
                console.log('Request rejected:', response.data);
                toast.success('Request rejected successfully');
                fetchDeposit();
            }
        } catch (error) {
            console.error('Error rejecting request:', error);
            toast.error('Error rejecting request');
        }
    };

    const handleApprove = async (depositId) => {
        const status = "complete";
        const shouldDelete = window.confirm(
            "Are you sure you want to approve this request?"
        );
        try {
            if (shouldDelete) {
                const response = await updateDepositById(depositId, {status}, authToken); // Ensure this function matches your service
                console.log('Request approved:', response.data);
                toast.success('Request approved successfully');
                fetchDeposit();
            }
        } catch (error) {
            console.error('Error approving request:', error);
            toast.error('Error approving request');
        }
    };

    const indexOfLastDeposit = currentPage * depositsPerPage;
    const indexOfFirstDeposit = indexOfLastDeposit - depositsPerPage;
    const currentDeposits = filteredDeposit.slice(indexOfFirstDeposit, indexOfLastDeposit);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setStartIndex((pageNumber - 1) * depositsPerPage);
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
                                            <FontAwesomeIcon icon={faUsersRectangle} /> <span style={{ marginLeft: '3px' }}>Manage Accounts</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="/admin/collectionManage">
                                            <FontAwesomeIcon icon={faCheckCircle} /> <span style={{ marginLeft: '3px' }}>Manage Collections</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a className="nav-link" href="/admin/questionManage">
                                            <FontAwesomeIcon icon={faQuestionCircle} /> <span style={{ marginLeft: '3px' }}>Manage Questions</span>
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
                        <main>
                            <div className="container-fluid">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <i className="fa fa-table" /> Deposit Manage
                                    </div>

                                    <div className="panel-body">
                                        <table className="table table-striped table-bordered" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>UserID</th>
                                                    <th>Number</th>
                                                    <th>Content</th>
                                                    <th>Status</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentDeposits && currentDeposits.length > 0 ? (
                                                    currentDeposits.map((deposit, index) => (
                                                        <tr key={deposit._id}>
                                                            <td>{depositIndex + index + 1}</td>
                                                            <td>{deposit.userId}</td>
                                                            <td>{deposit.number}</td>
                                                            <td>{deposit.content}</td>
                                                            <td>{deposit.status}</td>
                                                            <td>
                                                                <div className='d-flex'>
                                                                    <button onClick={() => handleApprove(deposit._id)} data-toggle="modal" data-target="#updateDeposit" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                        <FontAwesomeIcon icon={faPenToSquare} />
                                                                    </button>
                                                                    <button onClick={() => handleReject(deposit._id)} className='btn btn-danger'>
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="6">No deposits found</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                        <div style={{ float: 'right' }}>
                                            <Pagination
                                                itemsPerPage={depositsPerPage}
                                                totalItems={filteredDeposit.length}
                                                paginate={handlePageChange}
                                            />
                                        </div>
                                        <div style={{ clear: 'both' }}>
                                            Size: {filteredDeposit.length} deposits.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DepositManage;
