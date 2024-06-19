import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getAccountById } from '../../services/AccountServices';

function Header() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    // Function to retrieve auth token and account id from localStorage
    const getAuthToken = () => localStorage.getItem('token');
    const getAccountId = () => localStorage.getItem('accountId');

    useEffect(() => {
        // Retrieve authToken and accountId from localStorage
        const authToken = getAuthToken();
        const accountId = getAccountId();

        // Check if accountId exists before making API call
        if (accountId) {
            getAccountById(accountId, authToken)
                .then((response) => {
                    setUser(response.data);
                    setIsAdmin(response.data.admin || false);
                })
                .catch((error) => {
                    console.error("Error fetching account:", error);
                    // Handle error, e.g., redirect to login page
                    toast.error("Failed to fetch account details. Please log in again.");
                    navigate('/login'); // Redirect to login page if account fetching fails
                });
        } else {
            // If accountId is not found, redirect to login
            navigate('/login');
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('accountId');
        localStorage.removeItem('admin');
        navigate('/home'); // Redirect to home page after logout
        toast.success("Logged out successfully");
    };

    return (
        <div>
            <header id="home">
                <nav className="navbar navbar-default navbar-sticky bootsnav">
                    {/* Navbar content */}
                    <div className="container">
                        {/* Top Search */}
                        <div className="row">
                            <div className="top-search">
                                <div className="input-group">
                                    <form action="#">
                                        <input
                                            type="text"
                                            name="text"
                                            className="form-control"
                                            placeholder="Search"
                                        />
                                        <button type="submit">
                                            <i className="fas fa-search" />
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>

                        {/* Atribute Navigation */}
                        <div className="attr-nav">
                            <ul>
                                <li className="search">
                                    <a href="#">
                                        <i className="fa fa-search" />
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Header Navigation */}
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                            >
                                <i className="fa fa-bars" />
                            </button>
                            <a href="/home" className="navbar-brand">
                                <img
                                    src={`${process.env.PUBLIC_URL}/assets/img/logo.png`}
                                    className="logo"
                                    alt="Logo"
                                />
                            </a>
                        </div>

                        {/* Navbar links */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle active" data-toggle="dropdown">
                                        Home
                                    </a>
                                    {/* Dropdown content */}
                                    <ul className="dropdown-menu">
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                                Multipage
                                            </a>
                                            <ul className="dropdown-menu">
                                                {/* Multipage links */}
                                                <li><a href="index.html">Home Version One</a></li>
                                                <li><a href="index-2.html">Home Version Two</a></li>
                                                {/* Add more versions as needed */}
                                            </ul>
                                        </li>
                                        {/* Add more dropdown items as needed */}
                                    </ul>
                                </li>
                                {/* Add more menu items as needed */}
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle active" data-toggle="dropdown">
                                        Courses
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="courses.html">Courses Carousel One</a></li>
                                        <li><a href="courses-2.html">Courses Grid One</a></li>
                                        {/* Add more course links as needed */}
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle active" data-toggle="dropdown">
                                        Teachers
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a href="teachers.html">Advisor</a></li>
                                        {/* Add more teacher links as needed */}
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    {user && (
                                        <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                            Hi, {user.username} !
                                        </a>
                                    )}
                                    {/* User dropdown content */}
                                    <ul className="dropdown-menu">
                                        <li><a href="/profile">View Profile</a></li>
                                        <li><a href="#" onClick={logout}>Logout</a></li>
                                        {/* Add more user links as needed */}
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
