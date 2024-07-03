import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faGauge, faMagnifyingGlass, faPenToSquare, faQuestionCircle, faTrash, faUsersRectangle } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Pagination from './Pagination';
import { addCollection, deleteCollectionById, getAllCollections, updateCollectionById } from '../../services/CollectionServices';

function CollectionManage() {
    function getAuthToken() {
        const token = localStorage.getItem('token');
        return token;
    }
    function getAccountId() {
        const accountId = localStorage.getItem('accountid');
        return accountId;
    }

    const authToken = getAuthToken();
    const accountId = getAccountId();
    const [collections, setCollections] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredCollections, setFilteredCollections] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [collectionsPerPage] = useState(10);
    const [updateData, setUpdateData] = useState({
        _id: '',
        name: '',
        numberOfQuestion: '',
        price: '',
    });

    const [newCollection, setNewCollection] = useState({
        userId: accountId,
        name: '',
        numberOfQuestion: '',
        price: '',
        questions: []
    });

    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [collectionIndex, setStartIndex] = useState(0);


    const fetchCollections = async () => {
        try {
            const response = await getAllCollections(authToken);
            setCollections(response.data);
            setFilteredCollections(response.data);
            console.log('fetching collections:', response.data);
        } catch (error) {
            console.error('Error fetching collections:', error);
            setCollections([]);
            setFilteredCollections([]);
        }
    };

    useEffect(() => {
        fetchCollections();
    }, []);

    const handleDeleteCollection = async (collectionId) => {
        const shouldDelete = window.confirm(
            "Are you sure you want to delete this collection?"
        );
        try {
            if (shouldDelete) {

                const response = await deleteCollectionById(collectionId, authToken);
                console.log('Account deleted:', response.data);
                toast.success('Collection deleted successfully');
                fetchCollections();
            }
        } catch (error) {
            console.error('Error deleting collection:', error);
            toast.error('Error deleting collection');
        }
    };

    const handleUpdateCollection = async (e) => {
        e.preventDefault();
        try {
            const response = await updateCollectionById(updateData._id, updateData, authToken);
            console.log('Account updated:', response.data);
            toast.success('Account updated successfully');
            fetchCollections();
            window.location.href = "/admin/collectionManage"
        } catch (error) {
            console.error('Error updating collection:', error);
            toast.error('Error updating collection');
        }
    };

    const openUpdateModal = (collection) => {
        setUpdateData({
            _id: collection._id,
            name: collection.name,
            numberOfQuestion: collection.numberOfQuestion,
            price: collection.price,
        });
        setShowUpdateModal(true);
    };

    const closeUpdateModal = () => {
        setShowUpdateModal(false);
    };

    const handleAddCollectionChange = (e) => {
        const { name, value } = e.target;
        setNewCollection((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleAddCollectionSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addCollection(newCollection, authToken);
            console.log('Response:', response);
            toast.success('New Collection added successfully');
            fetchCollections();
            window.location.href = "/admin/collectionManage"
        } catch (error) {
            console.error('Error adding new Collection:', error);
            toast.error('Error adding new Collection');
        }
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query === '') {
            setFilteredCollections(collections);
        } else {
            const filtered = collections.filter(collection =>
                collection.name.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredCollections(filtered);
        }
    };

    const indexOfLastCollection = currentPage * collectionsPerPage;
    const indexOfFirstCollection = indexOfLastCollection - collectionsPerPage;
    const currentCollections = filteredCollections.slice(indexOfFirstCollection, indexOfLastCollection);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        setStartIndex((pageNumber - 1) * collectionsPerPage);
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
                            <button style={{ marginBottom: '15px' }} type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#addAccount">Add Collection</button>
                        </div>
                        <div className="modal fade" id="addAccount" role="dialog">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <button type="button" className="close" data-dismiss="modal">&times;</button>
                                        <h4 className="modal-title">Add Collection</h4>
                                    </div>
                                    <div className="modal-body">
                                        <form onSubmit={handleAddCollectionSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="new-username">Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="new-username"
                                                    name="name"
                                                    value={newCollection.name}
                                                    onChange={handleAddCollectionChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="new-password">Number of questions:</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="new-password"
                                                    name="numberOfQuestion"
                                                    value={newCollection.numberOfQuestion}
                                                    onChange={handleAddCollectionChange}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="new-password1">Price:</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="new-password1"
                                                    name="price"
                                                    value={newCollection.price}
                                                    onChange={handleAddCollectionChange}
                                                />
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
                                        <form onSubmit={handleUpdateCollection}>
                                            <div className="form-group">
                                                <label htmlFor="username">Name:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="username"
                                                    value={updateData.name}
                                                    onChange={(e) => setUpdateData({ ...updateData, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Number of questions:</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="password"
                                                    value={updateData.numberOfQuestion}
                                                    onChange={(e) => setUpdateData({ ...updateData, numberOfQuestion: e.target.value })}
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Price:</label>
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="email"
                                                    value={updateData.price}
                                                    onChange={(e) => setUpdateData({ ...updateData, price: e.target.value })}
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
                                        <i className="fa fa-table" /> Collection Manage
                                    </div>
                                    <div style={{ width: '250px', margin: '20px' }} className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Type name collection"
                                            value={searchQuery}
                                            onChange={handleSearchChange}
                                        />
                                        <div className="input-group-text" style={{ backgroundColor: '#ccc', padding: '12px', borderRadius: '0px 15px 15px 0px' }}>
                                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                                        </div>
                                    </div>

                                    <div className="panel-body">
                                        <table className="table table-striped table-bordered" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Name</th>
                                                    <th>Number of questions</th>
                                                    <th>Price</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {currentCollections && currentCollections.length > 0 ? (
                                                    currentCollections.map((collection, index) => (
                                                        <tr key={collection._id}>
                                                            <td>{collectionIndex + index + 1}</td>
                                                            <td>{collection.name}</td>
                                                            <td>{collection.numberOfQuestion}</td>
                                                            <td>{collection.price}</td>
                                                            <td>
                                                                <div className='d-flex'>
                                                                    <button onClick={() => openUpdateModal(collection)} data-toggle="modal" data-target="#updateAccount" style={{ marginRight: '10px' }} className='btn btn-primary'>
                                                                        <FontAwesomeIcon icon={faPenToSquare} />
                                                                    </button>
                                                                    <button onClick={() => handleDeleteCollection(collection._id)} className='btn btn-danger'>
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
                                                accountsPerPage={collectionsPerPage}
                                                totalAccounts={filteredCollections.length}
                                                paginate={handlePageChange}
                                            />
                                        </div>
                                        <div style={{ clear: 'both' }}>
                                            Size: {filteredCollections.length} collections.
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

export default CollectionManage