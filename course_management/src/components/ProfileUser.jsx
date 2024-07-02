import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAccountById, updateMembershipStatus, updateWalletByAccountId } from "../services/AccountServices";
import { toast } from "react-toastify";
import Modal from "react-modal";
import { faWallet, faEye, faEyeSlash, faCrown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function ProfileUser() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const [wallet, setWallet] = useState("");
  const [showWallet, setShowWallet] = useState(false);
  const [memberShip, setMemberShip] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("accountid");


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
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
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
      const response = await axios.put(
        `http://localhost:3000/users/${userId}`,
        { fullname, email, DOB },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("User profile updated successfully!");
    } catch (error) {
      console.error("Update User Error:", error);
      toast.error("Failed to update user profile.");
    }
  };
  const handleRegisterMembership = () => {
    const membershipFee = 100000;

    if (wallet >= membershipFee) {
      const confirmEnroll = window.confirm(
        `Are you sure you want to register for membership for ${formatCurrency(membershipFee)}?`
      );

      if (confirmEnroll) {
        const newWalletAmount = wallet - membershipFee;
        updateWalletByAccountId(getAccountId(), newWalletAmount, getAuthToken())
          .then((response) => {
            console.log("Wallet updated successfully");

            updateMembershipStatus(getAccountId(), true, getAuthToken())
              .then((membershipResponse) => {
                setMemberShip(true);
                setIsModalOpen(false);
                window.location.reload();
                toast.success("Membership registration successful!");
              })
              .catch((error) => {
                console.error("Error updating membership status:", error);
                toast.error("Failed to register membership.");
              });
          })
          .catch((error) => {
            console.error("Error updating wallet:", error);
            toast.error("Failed to update wallet.");
          });
      }
    } else {
      toast.error("Not enough money in the wallet");
    }
  };

  useEffect(() => {
    const fetchAccountData = async () => {
      if (token) {
        try {
          const response = await getAccountById(userId, token);
          const accountData = response.data;
          setFullname(accountData.fullname || "");
          setEmail(accountData.email || "");
          setWallet(accountData.wallet || 0);
          setDOB(formatDate(accountData.DOB) || "");
          setMemberShip(accountData.memberShip || false);
        } catch (error) {
          console.error("Error fetching account:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchAccountData();
  }, [token, userId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="breadcrumb-area shadow dark text-center bg-fixed text-light" style={{ backgroundImage: "url(assets/img/banner/11.jpg)" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Profile</h1>
              <ul className="breadcrumb">
                <li><a href="#"><i className="fas fa-home" /> Home</a></li>
                <li><a href="#">Page</a></li>
                <li className="active">Profile</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="students-profile advisors-details-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-5 thumb">
              <img src="assets/img/team/6.jpg" alt="Thumb" />
            </div>
            <div className="col-md-7 info main-content">
              <div className="tab-info">
                <ul style={{ marginBottom: '20px' }} className="nav nav-pills">
                  <li className="active">
                    <a data-toggle="tab" href="#tab3" aria-expanded="false">Edit Profile</a>
                  </li>
                </ul>
                <div className="tab-content tab-content-info">
                  <div id="tab3" className="tab-pane fade active in">
                    <div className="info title">
                      <p style={{ textAlign: 'justify' }}>
                        <span style={{ marginRight: '15px' }}>
                          <FontAwesomeIcon icon={faWallet} bounce /> My Wallet: {showWallet ? formatCurrency(wallet) : "******"}
                        </span>
                        <button onClick={() => setShowWallet(!showWallet)} style={{ border: "none", background: "none", cursor: "pointer" }}>
                          <FontAwesomeIcon icon={showWallet ? faEyeSlash : faEye} />
                        </button>
                      </p>
                      <div className="row">
                        <form className="contact-form">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input className="form-control" placeholder="Name" type="text" value={fullname} onChange={(e) => setFullname(e.target.value)} />
                              {errors.fullname && <p style={{ color: "red" }}>{errors.fullname}</p>}
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <input className="form-control" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="form-group">
                              <input className="form-control" placeholder="DOB" type="date" value={DOB} onChange={(e) => setDOB(e.target.value)} />
                              {errors.DOB && <p style={{ color: "red" }}>{errors.DOB}</p>}
                            </div>
                          </div>
                          <div style={{ textAlign: 'justify' }} className="col-md-6">
                            {memberShip ? (
                              <span>Membership: <FontAwesomeIcon icon={faCrown} fade style={{ color: "#FFD43B", }} /></span>
                            ) : (
                              <button className="btn btn-primary" type="button" data-toggle="modal" data-target="#myModal">
                                Register Membership
                              </button>
                            )}
                          </div>
                          <div className="col-md-12">
                            <button className="btn btn-primary" type="button" onClick={handleUpdateUser}>Update</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <>
                {/* Modal */}
                <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">
                    {/* Modal content*/}
                    <div className="modal-content">
                      <div className="modal-header">
                        <button type="button" className="close" data-dismiss="modal">
                          ×
                        </button>
                        <h4 className="modal-title">Register Membership</h4>
                      </div>
                      <div className="modal-body">
                        <p>The membership fee is {formatCurrency(100000)}.</p>
                      </div>
                      <div className="modal-footer">
                        <button className="btn btn-primary" onClick={handleRegisterMembership}>Pay Now</button>
                        <button
                          type="button"
                          className="btn btn-default"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileUser;
