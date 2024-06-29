import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faGauge, faMagnifyingGlass, faPenToSquare, faQuestionCircle, faTrash, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import { deleteAccountById, getAllAccounts, register, updateAccountById } from '../../services/AccountServices';
import { toast } from 'react-toastify';
import Pagination from './Pagination';

function AccountManage() {

    function getAuthToken() {
        const token = localStorage.getItem('token');
        return token;
    }

    const authToken = getAuthToken();
    const [accounts, setAccounts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredAccounts, setFilteredAccounts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [accountsPerPage] = useState(10);
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
    const [accountIndex, setStartIndex] = useState(0);

    const fetchAccounts = async () => {
        try {
            const response = await getAllAccounts(authToken);
            setAccounts(response.data);
            setFilteredAccounts(response.data);
        } catch (error) {
            console.error('Error fetching accounts:', error);
            setAccounts([]);
            setFilteredAccounts([]);
        }
    };

    useEffect(() => {
        fetchAccounts();
    }, []);

    const handleDeleteAccount = async (accountId) => {
        const shouldDelete = window.confirm(
            "Are you sure you want to delete this account?"
        );
        try {
            if (shouldDelete) {

                const response = await deleteAccountById(accountId, authToken);
                console.log('Account deleted:', response.data);
                toast.success('Account deleted successfully');
                fetchAccounts();
            }
        } catch (error) {
            console.error('Error deleting account:', error);
            toast.error('Error deleting account');
        }
    };

    const handleUpdateAccount = async (e) => {
        e.preventDefault();
        try {
            const response = await updateAccountById(updateData._id, updateData, authToken);
            console.log('Account updated:', response.data);
            toast.success('Account updated successfully');
            fetchAccounts();
            window.location.href = "/admin/accountManage"
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
            const response = await register(newAccount, authToken);
            console.log('New account added:', response.data);
            toast.success('New account added successfully');
            fetchAccounts();
            window.location.href = "/admin/accountManage"
        } catch (error) {
            console.error('Error adding new account:', error);
            toast.error('Error adding new account');
        }
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query === '') {
            setFilteredAccounts(accounts);
        } else {
            const filtered = accounts.filter(account =>
                account.username.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredAccounts(filtered);
        }
    };

    const indexOfLastAccount = currentPage * accountsPerPage;
    const indexOfFirstAccount = indexOfLastAccount - accountsPerPage;
    const currentAccounts = filteredAccounts.slice(indexOfFirstAccount, indexOfLastAccount);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setStartIndex((pageNumber - 1) * accountsPerPage);
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
                        <div className=''>
                            <button style={{ marginBottom: '15px' }} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#addAccount">Add account</button>
                        </div>
                        <div className="modal fade" id="addAccount" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
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
                                        <i className="fa fa-table" /> Account Manage
                                    </div>
                                    <div style={{ width: '200px', margin: '20px' }} className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Search by username"
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
                                                    <th>Username</th>
                                                    <th>Password</th>
                                                    <th>Email</th>
                                                    <th>DOB</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentAccounts && currentAccounts.length > 0 ? (
                                                    currentAccounts.map((account, index) => (
                                                        <tr key={account._id}>
                                                            <td>{accountIndex + index + 1}</td>
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
                                                accountsPerPage={accountsPerPage}
                                                totalAccounts={filteredAccounts.length}
                                                paginate={handlePageChange}
                                            />
                                        </div>
                                        <div style={{ clear: 'both' }}>
                                            Size: {filteredAccounts.length} accounts.
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

export default AccountManage;
