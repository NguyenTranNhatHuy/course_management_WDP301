import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <header id="home">
                {/* Start Navigation */}
                <nav className="navbar navbar-default navbar-sticky bootsnav">
                    {/* Start Top Search */}
                    <div className="container">
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
                    </div>
                    {/* End Top Search */}
                    <div className="container">
                        {/* Start Atribute Navigation */}
                        <div className="attr-nav">
                            <ul>
                                <li className="search">
                                    <a href="#">
                                        <i className="fa fa-search" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        {/* End Atribute Navigation */}
                        {/* Start Header Navigation */}
                        <div className="navbar-header">
                            <button
                                type="button"
                                className="navbar-toggle"
                                data-toggle="collapse"
                                data-target="#navbar-menu"
                            >
                                <i className="fa fa-bars" />
                            </button>
                            <a href='/home' className="navbar-brand" >
                                <img src="assets/img/logo.png" className="logo" alt="Logo" />
                            </a>
                        </div>
                        {/* End Header Navigation */}
                        {/* Collect the nav links, forms, and other content for toggling */}
                        <div className="collapse navbar-collapse" id="navbar-menu">
                            <ul className="nav navbar-nav navbar-right" data-in="#" data-out="#">
                                <li className="dropdown">
                                    <a
                                        href="#"
                                        className="dropdown-toggle active"
                                        data-toggle="dropdown"
                                    >
                                        Home
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                Multipage
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="index.html">Home Version One</a>
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home Version Two</a>
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home Version Three</a>
                                                </li>
                                                <li>
                                                    <a href="index-4.html">Home Version Four</a>
                                                </li>
                                                <li>
                                                    <a href="index-5.html">Home Version Five</a>
                                                </li>
                                                <li>
                                                    <a href="index-6.html">Home Version Six</a>
                                                </li>
                                                <li>
                                                    <a href="index-7.html">Home Version Serven</a>
                                                </li>
                                                <li>
                                                    <a href="index-8.html">Home Version Eight</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a
                                                href="#"
                                                className="dropdown-toggle"
                                                data-toggle="dropdown"
                                            >
                                                Onepage
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li>
                                                    <a href="index-onepage.html">Home Version One</a>
                                                </li>
                                                <li>
                                                    <a href="index-2-onepage.html">Home Version Two</a>
                                                </li>
                                                <li>
                                                    <a href="index-3-onepage.html">Home Version Three</a>
                                                </li>
                                                <li>
                                                    <a href="index-4-onepage.html">Home Version Four</a>
                                                </li>
                                                <li>
                                                    <a href="index-5-onepage.html">Home Version Five</a>
                                                </li>
                                                <li>
                                                    <a href="index-6-onepage.html">Home Version Six</a>
                                                </li>
                                                <li>
                                                    <a href="index-7-onepage.html">Home Version Seven</a>
                                                </li>
                                                <li>
                                                    <a href="index-8-onepage.html">Home Version Eight</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown megamenu-fw">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        Pages
                                    </a>
                                    <ul className="dropdown-menu megamenu-content" role="menu">
                                        <li>
                                            <div className="row">
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Gallery</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li>
                                                                <a href="gallery-2-colum.html">Gallery Two Colum</a>
                                                            </li>
                                                            <li>
                                                                <a href="gallery-3-colum.html">
                                                                    Gallery Three Colum
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="gallery-4-colum.html">
                                                                    Gallery Four Colum
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="gallery-6-colum.html">Gallery Six Colum</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Advisor</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li>
                                                                <a href="advisor-carousel.html">Advisor Carousel</a>
                                                            </li>
                                                            <li>
                                                                <a href="advisor-2-colum.html">Advisor Two Colum</a>
                                                            </li>
                                                            <li>
                                                                <a href="advisor-3-colum.html">
                                                                    Advisor Three Colum
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="advisor-carousel-2.html">
                                                                    Advisor Carousel Two
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">User Pages</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li>
                                                                <a href="profile.html">Profile</a>
                                                            </li>
                                                            <li>
                                                                <a href="edit-profile.html">Edit Profile</a>
                                                            </li>
                                                            <li>
                                                                <Link to={"/login"}>login</Link>
                                                            </li>
                                                            <li>
                                                                <a href="register.html">register</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                                <div className="col-menu col-md-3">
                                                    <h6 className="title">Other Pages</h6>
                                                    <div className="content">
                                                        <ul className="menu-col">
                                                            <li>
                                                                <a href="about-us.html">About Us</a>
                                                            </li>
                                                            <li>
                                                                <a href="faq.html">Faq</a>
                                                            </li>
                                                            <li>
                                                                <a href="pricing-table.html">Pricing Table</a>
                                                            </li>
                                                            <li>
                                                                <a href="contact.html">Contact</a>
                                                            </li>
                                                            <li>
                                                                <a href="404.html">Error Page</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                {/* end col-3 */}
                                            </div>
                                            {/* end row */}
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a
                                        href="#"
                                        className="dropdown-toggle active"
                                        data-toggle="dropdown"
                                    >
                                        Courses
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="courses.html">Courses Carousel One</a>
                                        </li>
                                        <li>
                                            <a href="courses-2.html">Courses Grid One</a>
                                        </li>
                                        <li>
                                            <a href="courses-3.html">Courses Grid Two</a>
                                        </li>
                                        <li>
                                            <a href="courses-4.html">Courses Carousel Two</a>
                                        </li>
                                        <li>
                                            <a href="course-details.html">Course Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a
                                        href="#"
                                        className="dropdown-toggle active"
                                        data-toggle="dropdown"
                                    >
                                        Teachers
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="teachers.html">Advisor</a>
                                        </li>
                                        <li>
                                            <a href="teachers-details.html">Advisor Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a
                                        href="#"
                                        className="dropdown-toggle active"
                                        data-toggle="dropdown"
                                    >
                                        Event
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="event.html">Event Mixed Colum</a>
                                        </li>
                                        <li>
                                            <a href="event-2.html">Event Grid Colum</a>
                                        </li>
                                        <li>
                                            <a href="event-3.html">Event Carousel</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                                        Blog
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a href="blog-standard.html">Blog Standard</a>
                                        </li>
                                        <li>
                                            <a href="blog-left-sidebar.html">Blog Left Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="blog-right-sidebar.html">Blog Right Sidebar</a>
                                        </li>
                                        <li>
                                            <a href="blog-single-standard.html">Single Standard</a>
                                        </li>
                                        <li>
                                            <a href="blog-single-left-sidebar.html">
                                                Single Left Sidebar
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-single-right-sidebar.html">
                                                Single Right Sidebar
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="contact.html">contact</a>
                                </li>
                            </ul>
                        </div>
                        {/* /.navbar-collapse */}
                    </div>
                </nav>
                {/* End Navigation */}
            </header>
        </div>
    )
}

export default Header