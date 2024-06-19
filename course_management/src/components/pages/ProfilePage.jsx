import React, { useState } from "react";
import axios from "axios";

function ProfileUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [DOB, setDOB] = useState("");
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('accountid');


  const handleUpdateUser = async () => {
    try {
        console.log("token:",token," userID:", userId);
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
    } catch (error) {
      console.error("Update User Error:", error);
    }
  };

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
        {/* Start Students Profiel 
    ============================================= */}
        <div className="students-profiel adviros-details-area default-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-5 thumb">
                <img src="assets/img/team/6.jpg" alt="Thumb" />
              </div>
              <div className="col-md-7 info main-content">
                {/* Star Tab Info */}
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
                          Esteem spirit temper too say adieus who direct esteem.
                          It esteems luckily mr or picture placing drawing no.
                          Apartments frequently or motionless on reasonable
                          projecting expression. Way mrs end gave tall walk fact
                          bed. Expect relied do we genius is. On as around
                          spirit of hearts genius. Is raptures daughter branched
                          laughter peculiar in settling.
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
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button type="submit" onClick={handleUpdateUser}>Update</button>
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
