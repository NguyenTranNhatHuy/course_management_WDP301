import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAccountById } from "../services/AccountServices";

function Header() {
  const navigator = useNavigate();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }
  function getAccountId() {
    const accountid = localStorage.getItem("accountid");
    return accountid;
  }
  function getRole() {
    const admin = localStorage.getItem("admin");
    return admin;
  }
  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("accountid");
    localStorage.removeItem("admin");

    // navigator('/home');
    window.location.href = "/home";
    toast.success("Logout Successfully");
  }
  const authToken = getAuthToken();
  const accountid = getAccountId();
  const admin = getRole();
  useEffect(() => {
    getAccountById(accountid, authToken)
      .then((response) => {
        setUser(response.data);
        setIsAdmin(response.data.admin || false);
      })
      .catch((error) => {
        console.error("Error fetching account:", error);
      });
  }, [accountid]);

  return (
    <div>
      <div className="top-bar-area address-two-lines bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-8 address-info">
              <div className="info box">
                <ul>
                  <li>
                    <span>
                      <i className="fas fa-map" /> Address
                    </span>
                    California, TX 70240
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-envelope-open" /> Email
                    </span>
                    Info@gmail.com
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-phone" /> Contact
                    </span>
                    +123 456 7890
                  </li>
                </ul>
              </div>
            </div>
            <div className="user-login text-right col-md-4">
              {!authToken && (
                <Link className="popup-with-form" to={"/register"}>
                  <i className="fas fa-edit" /> Register
                </Link>
              )}
              {!authToken && (
                <Link className="popup-with-form" to={"/login"}>
                  <i className="fas fa-user" /> Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
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
              <a href="/home" className="navbar-brand">
                <img src="../assets/img/logo.png" className="logo" alt="Logo" />
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <ul
                className="nav navbar-nav navbar-right"
                data-in="#"
                data-out="#"
              >
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
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                  >
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
                                <a href="gallery-2-colum.html">
                                  Gallery Two Colum
                                </a>
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
                                <a href="gallery-6-colum.html">
                                  Gallery Six Colum
                                </a>
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
                                <a href="advisor-carousel.html">
                                  Advisor Carousel
                                </a>
                              </li>
                              <li>
                                <a href="advisor-2-colum.html">
                                  Advisor Two Colum
                                </a>
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
                      <a href="/courses">All courses</a>
                    </li>
                    <li>
                      <a href="/mycourses">My courses</a>
                    </li>
                    <li>
                      <a href="/createcourse">Create new course</a>
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
                {/* <li className="dropdown">
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
                                </li> */}
                <li className="dropdown">
                  {user && (
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                    >
                      Hi, {user.username} !
                    </a>
                  )}
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/profile">View Profile</a>
                    </li>
                    {user && (
                      <>
                      <li>
                        <a href="/favorite">Favorite</a>
                      </li>
                      <li>
                        <a href="/deposit">Deposit</a>
                      </li>
                      </>
                    )}
                    {admin && (
                      <li>
                        <a href="/admin/accountManage">Management</a>
                      </li>
                    )}
                    <li>
                      <a href="" onClick={logout}>
                        Logout
                      </a>
                    </li>
                    {/* <li>
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
                                        </li> */}
                  </ul>
                </li>
                {/* <li>
                                    <a href="contact.html">contact</a>
                                </li> */}
              </ul>
            </div>
            {/* /.navbar-collapse */}
          </div>
        </nav>
        {/* End Navigation */}
      </header>
    </div>
  );
}

export default Header;
