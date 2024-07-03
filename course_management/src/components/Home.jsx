import React, { useEffect, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import GPT from "./popup/App";

function Home() {
  function getAuthToken() {
    const token = localStorage.getItem("token");
    return token;
  }

  const authToken = getAuthToken();
  return (
    <div>
      <>
        {/* Preloader Start */}
        <div className="se-pre-con" />
        {/* Preloader Ends */}
        {/* Start Header Top 
    ============================================= */}

        {/* End Header Top */}
        {/* Header 
    ============================================= */}
        {/* <Header /> */}
        {/* End Header */}

        {/* Start Banner 
    ============================================= */}
        <div className="banner-area content-top-heading less-paragraph text-normal">
          <div
            id="bootcarousel"
            className="carousel slide animate_text carousel-fade"
            data-ride="carousel"
          >
            {/* Wrapper for slides */}
            <div className="carousel-inner text-light carousel-zoom">
              <div style={{ height: "700px" }} className="item active">
                <div
                  className="slider-thumb bg-fixed"
                  style={{ backgroundImage: "url(assets/img/banner/2.jpg)" }}
                />
                <div className="box-table shadow dark">
                  <div className="box-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="content">
                            <h3 data-animation="animated slideInLeft">
                              Reach you career
                            </h3>
                            <h1 data-animation="animated slideInUp">
                              Learn from best online training course
                            </h1>
                            <a
                              data-animation="animated slideInUp"
                              className="btn btn-theme effect btn-md"
                              href="/courses"
                            >
                              View Courses
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ height: "700px" }} className="item">
                <div
                  className="slider-thumb bg-fixed"
                  style={{ backgroundImage: "url(assets/img/banner/2.jpg)" }}
                />
                <div className="box-table shadow dark">
                  <div className="box-cell">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <div className="content">
                            <h3 data-animation="animated slideInLeft">
                              We're glade to see you
                            </h3>
                            <h1 data-animation="animated slideInUp">
                              explore our brilliant graduates
                            </h1>
                            <a
                              data-animation="animated slideInUp"
                              className="btn btn-theme effect btn-md"
                              href="/examList"
                            >
                              View Exam
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Wrapper for slides */}
            {/* Left and right controls */}
            <a
              className="left carousel-control"
              href="#bootcarousel"
              data-slide="prev"
            >
              <i className="fa fa-angle-left" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="right carousel-control"
              href="#bootcarousel"
              data-slide="next"
            >
              <i className="fa fa-angle-right" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
        {/* End Banner */}
        {/* Start About 
    ============================================= */}
        <div className="about-area default-padding">
          <div className="container">
            <div className="row">
              <div className="about-info">
                <div className="col-md-6 thumb">
                  <img src="assets/img/about.jpg" alt="Thumb" />
                </div>
                <div className="col-md-6 info">
                  <h5>Introduction</h5>
                  <h2>
                    Welcome to the beigest online learning source of Eduka
                  </h2>
                  <p>
                    Alteration literature to or an sympathize mr imprudence. Of
                    is ferrars subject as enjoyed or tedious cottage. Procuring
                    as in resembled by in agreeable. Next long no gave mr eyes.
                    Admiration advantages no he celebrated so pianoforte
                    unreserved. Not its herself forming charmed amiable. Him why
                    feebly expect future now.
                  </p>
                  <p>
                    Curiosity incommode now led smallness allowance. Favour bed
                    assure son things yet. She consisted consulted elsewhere
                    happiness disposing household any old the. Widow downs.
                    Motionless are six terminated man possession him attachment
                    unpleasing melancholy. Sir smile arose one share. No abroad
                    in easily relied an whence lovers temper by.
                  </p>
                  <a href="#" className="btn btn-dark border btn-md">
                    Read More
                  </a>
                </div>
              </div>
              <div className="seperator col-md-12">
                <span className="border" />
              </div>
              <div className="our-features">
                <div className="col-md-4 col-sm-4">
                  <div className="item mariner">
                    <div className="icon">
                      <i className="flaticon-faculty-shield" />
                    </div>
                    <div className="info">
                      <h4>Expert faculty</h4>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="item java">
                    <div className="icon">
                      <i className="flaticon-book-2" />
                    </div>
                    <div className="info">
                      <h4>Online learning</h4>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-4">
                  <div className="item malachite">
                    <div className="icon">
                      <i className="flaticon-education" />
                    </div>
                    <div className="info">
                      <h4>Scholarship</h4>
                      <a href="#">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About */}
        {/* Start Why Chose Us 
    ============================================= */}
        <div className="wcs-area bg-dark text-light">
          <div className="container-full">
            <div className="row">
              <div
                className="col-md-6 thumb bg-cover"
                style={{ backgroundImage: "url(assets/img/banner/16.jpg)" }}
              />
              <div className="col-md-6 content">
                <div className="site-heading text-left">
                  <h2>Why chose us</h2>
                  <p>
                    Discourse assurance estimable applauded to so. Him
                    everything melancholy uncommonly but solicitude inhabiting
                    projection off. Connection stimulated estimating excellence
                    an to impression.
                  </p>
                </div>
                {/* item */}
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-trending" />
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Trending Courses</a>
                    </h4>
                    <p>
                      Absolute required of reserved in offering no. How sense
                      found our those gay again taken the. Had mrs outweigh
                      desirous sex overcame. Improved property reserved disposal
                      do offering me.
                    </p>
                  </div>
                </div>
                {/* item */}
                {/* item */}
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-books" />
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Books &amp; Library</a>
                    </h4>
                    <p>
                      Absolute required of reserved in offering no. How sense
                      found our those gay again taken the. Had mrs outweigh
                      desirous sex overcame. Improved property reserved disposal
                      do offering me.
                    </p>
                  </div>
                </div>
                {/* item */}
                {/* item */}
                <div className="item">
                  <div className="icon">
                    <i className="flaticon-professor" />
                  </div>
                  <div className="info">
                    <h4>
                      <a href="#">Certified Teachers</a>
                    </h4>
                    <p>
                      Absolute required of reserved in offering no. How sense
                      found our those gay again taken the. Had mrs outweigh
                      desirous sex overcame. Improved property reserved disposal
                      do offering me.
                    </p>
                  </div>
                </div>
                {/* item */}
              </div>
            </div>
          </div>
        </div>
        {/* End Why Chose Us */}
        {/* Start Featured Courses 
    ============================================= */}
        <div
          id="featured-courses"
          className="featured-courses-area left-details default-padding"
        >
          <div className="container">
            <div className="row">
              <div className="featured-courses-carousel owl-carousel owl-theme">
                {/* Start Single Item */}
                <div className="item">
                  <div className="col-md-5">
                    <div className="thumb">
                      <img src="assets/img/courses/f1.jpg" alt="Thumb" />
                      <div className="live-view">
                        <a
                          href="assets/img/courses/f1.jpg"
                          className="item popup-link"
                        >
                          <i className="fa fa-camera" />
                        </a>
                        <a
                          className="popup-youtube"
                          href="https://www.youtube.com/watch?v=vQqZIFCab9o"
                        >
                          <i className="fa fa-video" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 info">
                    <h2>
                      <a href="#">Codecademy software programming</a>
                    </h2>
                    <h4>featured courses</h4>
                    <p>
                      Both rest of know draw fond post as. It agreement
                      defective to excellent. Feebly do engage of narrow.
                      Extensive repulsive belonging depending if promotion be
                      zealously as. Preference inquietude ask
                    </p>
                    <h3>Learning outcomes</h3>
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>Over 37 lectures and 55.5 hours of content!</span>
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>Testing Training Included.</span>
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>
                          Course content designed by considering current
                          software testing
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>
                          Practical assignments at the end of every session.
                        </span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-theme effect btn-md"
                      data-animation="animated slideInUp"
                    >
                      Enroll Now
                    </a>
                    <div className="bottom-info align-left">
                      <div className="item">
                        <h4>Author</h4>
                        <a href="#">
                          <span>Devid Honey</span>
                        </a>
                      </div>
                      <div className="item">
                        <h4>Students enrolled</h4>
                        <span>5455</span>
                      </div>
                      <div className="item">
                        <h4>Rating</h4>
                        <span className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Start Single Item */}
                <div className="item">
                  <div className="col-md-5">
                    <div className="thumb">
                      <img src="assets/img/courses/f2.jpg" alt="Thumb" />
                      <div className="live-view">
                        <a
                          href="assets/img/courses/f2.jpg"
                          className="item popup-link"
                        >
                          <i className="fa fa-camera" />
                        </a>
                        <a
                          className="popup-youtube"
                          href="https://www.youtube.com/watch?v=vQqZIFCab9o"
                        >
                          <i className="fa fa-video" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 info">
                    <h2>
                      <a href="#">Data analysis and data science</a>
                    </h2>
                    <h4>featured courses</h4>
                    <p>
                      Both rest of know draw fond post as. It agreement
                      defective to excellent. Feebly do engage of narrow.
                      Extensive repulsive belonging depending if promotion be
                      zealously as. Preference inquietude ask
                    </p>
                    <h3>Learning outcomes</h3>
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>Over 37 lectures and 55.5 hours of content!</span>
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>Testing Training Included.</span>
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>
                          Course content designed by considering current
                          software testing
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>
                          Practical assignments at the end of every session.
                        </span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-theme effect btn-md"
                      data-animation="animated slideInUp"
                    >
                      Enroll Now
                    </a>
                    <div className="bottom-info align-left">
                      <div className="item">
                        <h4>Author</h4>
                        <a href="#">
                          <span>Devid Honey</span>
                        </a>
                      </div>
                      <div className="item">
                        <h4>Students enrolled</h4>
                        <span>5455</span>
                      </div>
                      <div className="item">
                        <h4>Rating</h4>
                        <span className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
                {/* Start Single Item */}
                <div className="item">
                  <div className="col-md-5">
                    <div className="thumb">
                      <img src="assets/img/courses/f3.jpg" alt="Thumb" />
                      <div className="live-view">
                        <a
                          href="assets/img/courses/f3.jpg"
                          className="item popup-link"
                        >
                          <i className="fa fa-camera" />
                        </a>
                        <a
                          className="popup-youtube"
                          href="https://www.youtube.com/watch?v=vQqZIFCab9o"
                        >
                          <i className="fa fa-video" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 info">
                    <h2>
                      <a href="#">Graphic and interactive design</a>
                    </h2>
                    <h4>featured courses</h4>
                    <p>
                      Both rest of know draw fond post as. It agreement
                      defective to excellent. Feebly do engage of narrow.
                      Extensive repulsive belonging depending if promotion be
                      zealously as. Preference inquietude ask
                    </p>
                    <h3>Learning outcomes</h3>
                    <ul>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>Over 37 lectures and 55.5 hours of content!</span>
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>Testing Training Included.</span>
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>
                          Course content designed by considering current
                          software testing
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check-double" />
                        <span>
                          Practical assignments at the end of every session.
                        </span>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="btn btn-theme effect btn-md"
                      data-animation="animated slideInUp"
                    >
                      Enroll Now
                    </a>
                    <div className="bottom-info align-left">
                      <div className="item">
                        <h4>Author</h4>
                        <a href="#">
                          <span>Devid Honey</span>
                        </a>
                      </div>
                      <div className="item">
                        <h4>Students enrolled</h4>
                        <span>5455</span>
                      </div>
                      <div className="item">
                        <h4>Rating</h4>
                        <span className="rating">
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star" />
                          <i className="fas fa-star-half-alt" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Item */}
              </div>
            </div>
          </div>
        </div>
        {/* End Featured Courses */}
        
        {/* Start Advisor Area
    ============================================= */}
        <section
          id="advisor"
          className="advisor-area bg-gray carousel-shadow default-padding bottom-less"
        >
          <div className="container">
            <div className="row">
              <div className="site-heading text-center">
                <div className="col-md-8 col-md-offset-2">
                  <h2>Experience Advisors</h2>
                  <p>
                    Able an hope of body. Any nay shyness article matters own
                    removal nothing his forming. Gay own additions education
                    satisfied the perpetual. If he cause manor happy. Without
                    farther she exposed saw man led. Along on happy could cease
                    green oh.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="advisor-items advisor-carousel-solid owl-carousel owl-theme text-center text-light">
                  {/* Single Item */}
                  <div className="advisor-item">
                    <div className="info-box">
                      <img src="assets/img/advisor/1.jpg" alt="Thumb" />
                      <div className="info-title">
                        <h4>Professon. Nuri Paul</h4>
                        <span>Chemistry specialist</span>
                        <div className="social">
                          <ul>
                            <li className="facebook">
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="pinterest">
                              <a href="#">
                                <i className="fab fa-pinterest" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="advisor-item">
                    <div className="info-box">
                      <img src="assets/img/advisor/2.jpg" alt="Thumb" />
                      <div className="info-title">
                        <h4>Monayem Pruda</h4>
                        <span>Senior Developer</span>
                        <div className="social">
                          <ul>
                            <li className="facebook">
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="pinterest">
                              <a href="#">
                                <i className="fab fa-pinterest" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="advisor-item">
                    <div className="info-box">
                      <img src="assets/img/advisor/3.jpg" alt="Thumb" />
                      <div className="info-title">
                        <h4>Dr. Bubly Minu</h4>
                        <span>Science specialist</span>
                        <div className="social">
                          <ul>
                            <li className="facebook">
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="pinterest">
                              <a href="#">
                                <i className="fab fa-pinterest" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="advisor-item">
                    <div className="info-box">
                      <img src="assets/img/advisor/4.jpg" alt="Thumb" />
                      <div className="info-title">
                        <h4>Professon. John Doe</h4>
                        <span>Senior Writter</span>
                        <div className="social">
                          <ul>
                            <li className="facebook">
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="pinterest">
                              <a href="#">
                                <i className="fab fa-pinterest" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="advisor-item">
                    <div className="info-box">
                      <img src="assets/img/advisor/5.jpg" alt="Thumb" />
                      <div className="info-title">
                        <h4>Professon. John Doe</h4>
                        <span>Senior Writter</span>
                        <div className="social">
                          <ul>
                            <li className="facebook">
                              <a href="#">
                                <i className="fab fa-facebook-f" />
                              </a>
                            </li>
                            <li className="twitter">
                              <a href="#">
                                <i className="fab fa-twitter" />
                              </a>
                            </li>
                            <li className="pinterest">
                              <a href="#">
                                <i className="fab fa-pinterest" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Advisor Area */}
        {/* Start Fun Factor 
    ============================================= */}
        <div
          className="fun-factor-area default-padding bottom-less text-center bg-fixed shadow dark-hard"
          style={{ backgroundImage: "url(assets/img/banner/2.jpg)" }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-3 col-sm-6 item">
                <div className="fun-fact">
                  <div className="icon">
                    <i className="flaticon-contract" />
                  </div>
                  <div className="info">
                    <span className="timer" data-to={212} data-speed={5000} />
                    <span className="medium">National Awards</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 item">
                <div className="fun-fact">
                  <div className="icon">
                    <i className="flaticon-professor" />
                  </div>
                  <div className="info">
                    <span className="timer" data-to={128} data-speed={5000} />
                    <span className="medium">Best Teachers</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 item">
                <div className="fun-fact">
                  <div className="icon">
                    <i className="flaticon-online" />
                  </div>
                  <div className="info">
                    <span className="timer" data-to={8970} data-speed={5000} />
                    <span className="medium">Students Enrolled</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 item">
                <div className="fun-fact">
                  <div className="icon">
                    <i className="flaticon-reading" />
                  </div>
                  <div className="info">
                    <span className="timer" data-to={640} data-speed={5000} />
                    <span className="medium">Cources</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Fun Factor */}
        
        {/* Start Testimonials 
    ============================================= */}
        <div className="testimonials-area carousel-shadow default-padding bg-dark text-light">
          <div className="container">
            <div className="row">
              <div className="site-heading text-center">
                <div className="col-md-8 col-md-offset-2">
                  <h2>Students Review</h2>
                  <p>
                    Able an hope of body. Any nay shyness article matters own
                    removal nothing his forming. Gay own additions education
                    satisfied the perpetual. If he cause manor happy. Without
                    farther she exposed saw man led. Along on happy could cease
                    green oh.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="clients-review-carousel owl-carousel owl-theme">
                  {/* Single Item */}
                  <div className="item">
                    <div className="col-md-5 thumb">
                      <img src="assets/img/team/2.jpg" alt="Thumb" />
                    </div>
                    <div className="col-md-7 info">
                      <p>
                        Procuring continued suspicion its ten. Pursuit brother
                        are had fifteen distant has. Early had add equal china
                        quiet visit. Appear an manner as no limits either
                        praise..
                      </p>
                      <h4>Druna Patia</h4>
                      <span>Biology Student</span>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="item">
                    <div className="col-md-5 thumb">
                      <img src="assets/img/team/3.jpg" alt="Thumb" />
                    </div>
                    <div className="col-md-7 info">
                      <p>
                        Procuring continued suspicion its ten. Pursuit brother
                        are had fifteen distant has. Early had add equal china
                        quiet visit. Appear an manner as no limits either
                        praise..
                      </p>
                      <h4>Astron Brun</h4>
                      <span>Science Student</span>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="item">
                    <div className="col-md-5 thumb">
                      <img src="assets/img/team/4.jpg" alt="Thumb" />
                    </div>
                    <div className="col-md-7 info">
                      <p>
                        Procuring continued suspicion its ten. Pursuit brother
                        are had fifteen distant has. Early had add equal china
                        quiet visit. Appear an manner as no limits either
                        praise..
                      </p>
                      <h4>Paol Druva</h4>
                      <span>Development Student</span>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="item">
                    <div className="col-md-5 thumb">
                      <img src="assets/img/team/7.jpg" alt="Thumb" />
                    </div>
                    <div className="col-md-7 info">
                      <p>
                        Procuring continued suspicion its ten. Pursuit brother
                        are had fifteen distant has. Early had add equal china
                        quiet visit. Appear an manner as no limits either
                        praise..
                      </p>
                      <h4>Druna Patia</h4>
                      <span>Biology Student</span>
                    </div>
                  </div>
                  {/* Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Testimonials */}

      </>
      <GPT />
    </div>
  );
}

export default Home;
