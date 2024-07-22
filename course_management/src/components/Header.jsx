import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { getAccountById } from "../services/AccountServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

function Header() {
  //Test commit
  const navigator = useNavigate();
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [wallet, setWallet] = useState("");
  const [walletVisible, setWalletVisible] = useState(false); // State to control wallet visibility

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
    localStorage.removeItem("deposit");
    localStorage.removeItem("enrolledCourses");

    window.location.href = "/home";
    toast.success("Logout Successfully");
  }
  const authToken = getAuthToken();
  const accountid = getAccountId();
  const admin = getRole();
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };
  useEffect(() => {
    getAccountById(accountid, authToken)
      .then((response) => {
        setUser(response.data);
        setIsAdmin(response.data.admin);
        console.log(admin);
        setWallet(response.data.wallet || 0);
        console.log("wallet = ", response);
      })
      .catch((error) => {
        console.error("Error fetching account:", error);
      });
  }, [accountid]);

  const toggleWalletVisibility = () => {
    setWalletVisible(!walletVisible);
  };

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
                    242 Huynh Van Nghe
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-envelope-open" /> Email
                    </span>
                    Examin@gmail.com
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-phone" /> Contact
                    </span>
                    0386751108
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
        <nav className="navbar navbar-default navbar-sticky bootsnav">
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
          <div className="container">
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
                    Courses
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/courses">All courses</a>
                    </li>
                    {user && (
                      <li>
                        <a href="/mycourses">My courses</a>
                      </li>
                    )}
                    {user && (
                      <li>
                        <a href="/createcourse">Create new course</a>
                      </li>
                    )}
                  </ul>
                </li>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle active"
                    data-toggle="dropdown"
                  >
                    Exams
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/examList">All exams</a>
                    </li>
                    {user && (
                      <li>
                        <a href="/myExam">My exams</a>
                      </li>
                    )}
                  </ul>
                </li>
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
                        <li>
                          <a href="/myEnrollment">My Enrollment</a>
                        </li>
                      </>
                    )}
                    {isAdmin && (
                      <li>
                        <a href="/admin/accountManage">Management</a>
                      </li>
                    )}
                    <li>
                      <a href="" onClick={logout}>
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
                {user && (
                  <li>
                    <a>
                      <FontAwesomeIcon icon={faWallet} /> :{" "}
                      {walletVisible ? formatCurrency(wallet) : "******"}
                    </a>
                  </li>
                )}
                {user && (
                  <li>
                    <a
                      onClick={toggleWalletVisibility}
                      style={{ cursor: "pointer" }}
                    >
                      <FontAwesomeIcon
                        icon={walletVisible ? faEyeSlash : faEye}
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default Header;
