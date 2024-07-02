import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAccountById } from "../services/AccountServices";
import { toast } from "react-toastify";
import { faWallet, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ProfileUser() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [wallet, setWallet] = useState("");
  const [showWallet, setShowWallet] = useState(false);

  const [errors, setErrors] = useState({});
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("accountid");
  const [account, setAccount] = useState(null);

  const getAuthToken = () => {
    return localStorage.getItem("token");
  };

  const getAccountId = () => {
    return localStorage.getItem("accountid");
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
    }).format(amount);
  };

  const validate = () => {
    const newErrors = {};
    if (!fullname) newErrors.fullname = "Fullname cannot be empty.";
    if (!email) newErrors.email = "Email cannot be empty.";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "Email is invalid.";
    if (!DOB) newErrors.DOB = "Date of Birth cannot be empty.";
    else if (new Date(DOB) > new Date()) newErrors.DOB = "Date of Birth cannot be in the future.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUpdateUser = async () => {
    if (!validate()) return;

    try {
      console.log("token:", token, " userID:", userId);
      const response = await axios.put(
        `http://localhost:3000/users/${userId}`,
        {
          fullname: fullname,
          email: email,
          DOB: DOB,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      toast.success("User profile updated successfully!");
    } catch (error) {
      console.error("Update User Error:", error);
      toast.error("Failed to update user profile.");
    }
  };

  useEffect(() => {
    const token = getAuthToken();
    if (token) {
      console.log("Have token:", token);

      // Fetch account information
      const accountId = getAccountId();
      if (accountId) {
        getAccountById(accountId, token)
          .then((response) => {
            const accountData = response.data;
            setAccount(accountData);
            setFullname(accountData.fullname || "");
            setEmail(accountData.email || "");
            setWallet(accountData.wallet || 0)
            setDOB(formatDate(accountData.DOB) || "");
            console.log("account: ", accountData);
          })
          .catch((error) => {
            console.error("Error fetching account:", error);
          });
      }
    }
  }, []);

  return (
    <div>
      <>
        {/* Start Breadcrumb 
        ============================================= */}
        <div
          className="breadcrumb-area shadow dark text-center bg-fixed text-light"
          style={{ backgroundImage: "url(assets/img/banner/11.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1>Profile</h1>
                <ul className="breadcrumb">
                  <li>
                    <a href="#">
                      <i className="fas fa-home" /> Home
                    </a>
                  </li>
                  <li>
                    <a href="#">Page</a>
                  </li>
                  <li className="active">Profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End Breadcrumb */}
        {/* Start Students Profile 
        ============================================= */}
        <div className="students-profile advisors-details-area default-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-5 thumb">
                <img src="assets/img/team/6.jpg" alt="Thumb" />
              </div>
              <div className="col-md-7 info main-content">
                {/* Start Tab Info */}
                <div className="tab-info">
                  {/* Tab Nav */}
                  <ul className="nav nav-pills">
                    <li>
                      <a data-toggle="tab" href="#tab3" aria-expanded="false">
                        Edit Profile
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content tab-content-info">
                    <div id="tab3" className="tab-pane fade active in">
                      <div className="info title">
                        <p>
                          <span style={{ marginRight: '15px' }}>
                            <FontAwesomeIcon icon={faWallet} bounce /> My Wallet:{" "}
                            {showWallet ? formatCurrency(wallet) : "******"}
                          </span>
                          <span style={{ marginLeft: '' }}>
                            <button
                              onClick={() => setShowWallet(!showWallet)}
                              style={{ border: "none", background: "none", cursor: "pointer" }}

                            >
                              <FontAwesomeIcon icon={showWallet ? faEyeSlash : faEye} />
                            </button>
                          </span>
                        </p>
                        <div className="row">
                          <form action="#" className="contact-form">
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  placeholder="Name"
                                  type="text"
                                  value={fullname}
                                  onChange={(e) => setFullname(e.target.value)}
                                />
                                {errors.fullname && (
                                  <p style={{ color: "red" }}>{errors.fullname}</p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  placeholder="Email"
                                  type="email"
                                  value={email}
                                  onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && (
                                  <p style={{ color: "red" }}>{errors.email}</p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <input
                                  className="form-control"
                                  placeholder="DOB"
                                  type="date"
                                  value={DOB}
                                  onChange={(e) => setDOB(e.target.value)}
                                />
                                {errors.DOB && (
                                  <p style={{ color: "red" }}>{errors.DOB}</p>
                                )}
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button className="btn btn-primary" type="button" onClick={handleUpdateUser}>
                                Update
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    {/* End Single Tab */}
                  </div>
                  {/* End Tab Content */}
                </div>
                {/* End Tab Info */}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default ProfileUser;
