import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCheckCircle, faGauge, faPenToSquare, faQuestion, faQuestionCircle, faTrash, faUsers, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deleteAccountById, getAllAccounts, register, updateAccountById } from '../../services/AccountServices';
import Pagination from './Pagination';
import { toast } from 'react-toastify';
function AccountManage() {

    function getAuthToken() {
        const token = localStorage.getItem('token');
        return token;
    }

    const authToken = getAuthToken();
    const [accounts, setAccounts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPerPage = 1;
    const [updateData, setUpdateData] = useState({
        _id: '',
        username: '',
        password: '',
        email: '',
        DOB: ''
    });
    const [newAccount, setNewAccount] = useState({
        username: '',
        password: '',
    });
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const fetchAccounts = async (page) => {
        try {
            const response = await getAllAccounts(authToken, page, itemsPerPage);
            setAccounts(response.data);
            setTotalPages(response.data.totalPages);
        } catch (error) {
            console.error('Error fetching accounts:', error);
            setAccounts([]);
            setTotalPages(1);
        }
    };

    useEffect(() => {
        fetchAccounts(currentPage);
    }, [currentPage]);

    const handleDeleteAccount = async (accountId) => {
        try {
            const response = await deleteAccountById(accountId, authToken);
            console.log('Account deleted:', response.data);

            toast.success('Account deleted successfully');

            fetchAccounts(currentPage);
        } catch (error) {
            console.error('Error deleting account:', error);
            toast.error('Error deleting account');
        }
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleUpdateAccount = async () => {
        try {
            const response = await updateAccountById(updateData._id, updateData, authToken);
            console.log('Account updated:', response.data);
            toast.success('Account updated successfully');
            fetchAccounts(currentPage);
            closeUpdateModal();
        } catch (error) {
            console.error('Error updating account:', error);
            toast.error('Error updating account');
        }
    };

    const openUpdateModal = (account) => {
        setUpdateData({
            _id: account._id,
            username: account.username,
            password: account.password,
            email: account.email,
            DOB: account.DOB
        });
        setShowUpdateModal(true);
    };

    const closeUpdateModal = () => {
        setShowUpdateModal(false);
    };

    const handleAddAccountChange = (e) => {
        const { name, value } = e.target;
        setNewAccount((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddAccountSubmit = async (e) => {
        e.preventDefault();
        try {
            const authToken = getAuthToken();
            const response = await register(newAccount, authToken);
            console.log('New account added:', response.data);
            toast.success('New account added successfully');
            fetchAccounts(currentPage);
            closeUpdateModal();
        } catch (error) {
            console.error('Error adding new account:', error);
            toast.error('Error adding new account');
        }
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
                                        <a className="nav-link" href="/admin/dashboard">
                                            <FontAwesomeIcon icon={faGauge} fade /> <span style={{ marginLeft: '3px' }}>Dashboard</span>
                                        </a>
                                    </li>

                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div id="layoutSidenav_content">
                        {/* <!-- Trigger the modal with a button --> */}
                        <button style={{ marginBottom: 15 }} type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#addAccount">Add account</button>


                        {/* Modal for adding account */}
                        <div className="modal fade " id="addAccount" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" >&times;</button>
                                        <h4 className="modal-title">Add Account</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleAddAccountSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="new-username">Username:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="new-username"
                                                    name="username"
                                                    value={newAccount.username}
                                                    onChange={handleAddAccountChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="new-password">Password:</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="new-password"
                                                    name="password"
                                                    value={newAccount.password}
                                                    onChange={handleAddAccountChange}
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-primary">Add Account</button>
                                        </form>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Modal for updating account */}
                        <div className={`modal fade ${showUpdateModal ? 'show' : ''}`} id="updateAccount" role="dialog" style={{ display: showUpdateModal ? 'block' : 'none' }}>
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal" >&times;</button>
                                        <h4 className="modal-title">Update Account</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleUpdateAccount}>
                                            <div className="form-group">
                                                <label htmlFor="username">Username:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    value={updateData.username}
                                                    onChange={(e) => setUpdateData({ ...updateData, username: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password:</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="password"
                                                    value={updateData.password}
                                                    onChange={(e) => setUpdateData({ ...updateData, password: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Email:</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="email"
                                                    value={updateData.email}
                                                    onChange={(e) => setUpdateData({ ...updateData, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="dob">DOB:</label>
                                                <input
                                                    type="date"
                                                    className="form-control"
                                                    id="dob"
                                                    value={updateData.DOB}
                                                    onChange={(e) => setUpdateData({ ...updateData, DOB: e.target.value })}
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">Update</button>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <main>
                            <div className="container-fluid">
                                <div className="panel panel-default">
                                    <div className="panel-heading">
                                        <i className="fa fa-table" /> Account Manage
                                    </div>
                                    <div className="panel-body">
                                        <table className="table table-striped table-bordered" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>Id</th>
                                                    <th>Username</th>
                                                    <th>Password</th>
                                                    <th>Email</th>
                                                    <th>DOB</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {accounts && accounts.length > 0 ? (
                                                    accounts.map((account, index) => (
                                                        <tr key={account._id}>
                                                            <td>{index + 1}</td>
                                                            <td>{account.username}</td>
                                                            <td>{account.password}</td>
                                                            <td>{account.email}</td>
                                                            <td>{account.DOB}</td>
                                                            <td>
                                                                <div className='d-flex'>
                                                                    <button onClick={() => openUpdateModal(account)} data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                        <FontAwesomeIcon icon={faPenToSquare} />
                                                                    </button>
                                                                    <button onClick={() => handleDeleteAccount(account._id)} className='btn btn-danger'>
                                                                        <FontAwesomeIcon icon={faTrash} />
                                                                    </button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))
                                                ) : (
                                                    <tr>
                                                        <td colSpan="6">No accounts found</td>
                                                    </tr>
                                                )}
                                            </tbody>
                                        </table>

                                        <div style={{ float: 'right' }}>
                                            <Pagination
                                                currentPage={currentPage}
                                                totalPages={totalPages}
                                                onPageChange={handlePageChange}
                                            />
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

export default AccountManage