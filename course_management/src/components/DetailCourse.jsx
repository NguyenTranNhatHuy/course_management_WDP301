import React, { useState } from 'react';
import Breadcrumb from './layouts/Breadcrumb';

export default function DetailCourse() {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div>

            <Breadcrumb name={"Course"} numOfImage={10} />
            <div className="course-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="course-details-info">
                                {/* Start Top Info */}
                                <div className="top-info">
                                    {/* Title */}
                                    <div className="title">
                                        <h2>Java Programming Masterclass with professional author</h2>
                                    </div>
                                    {/* End Title */}
                                    {/* Thumbnail */}
                                    <div className="thumb">
                                        <div
                                            className={`thumb flip-container ${isFlipped ? 'flip' : ''}`}
                                            onClick={handleFlip}
                                        >
                                            <div className="flipper">
                                                <div className="front panel panel-default">
                                                    <div className="panel-heading">
                                                        <h3 className="panel-title">Chi tiết câu hỏi</h3>
                                                    </div>
                                                    <div className="panel-body">
                                                        <p>
                                                            <strong>Câu hỏi:</strong> Nội dung câu hỏi ở đây
                                                        </p>
                                                        <ul style={{ textAlign: 'justify' }} className="list-group">
                                                            <li className="list-group-item">A. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore. Fugit quisquam culpa ex inventore obcaecati soluta, sed officiis perspiciatis a ad sit quaerat quas id, iste dolorum libero ipsum?</li>
                                                            <li className="list-group-item">B. Đáp án B</li>
                                                            <li className="list-group-item">C. Đáp án C</li>
                                                            <li className="list-group-item">D. Đáp án D</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="back panel panel-default">
                                                    <div className="panel-heading">
                                                        <h3 className="panel-title">Đáp án đúng</h3>
                                                    </div>
                                                    <div className="panel-body d-flex justify-content-center align-items-center">
                                                        <p>
                                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus adipisci nihil ratione voluptatem odio, libero id deserunt alias ex! Consequatur ea culpa sapiente ab nihil reiciendis quas quaerat illo possimus.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Thumbnail */}
                                </div>
                                {/* End Top Info */}
                                {/* Start Tab Info */}
                                <div style={{ marginTop: 400 }} className="tab-info">
                                    {/* Tab Nav */}
                                    <ul className="nav nav-pills">
                                        <li className="active">
                                            <a data-toggle="tab" href="#tab3" aria-expanded="false">
                                                Learning
                                            </a>
                                        </li>
                                        <li>
                                            <a data-toggle="tab" href="#tab2" aria-expanded="false">
                                                Test
                                            </a>
                                        </li>
                                    </ul>
                                    {/* End Tab Nav */}
                                    {/* Start Tab Content */}
                                    <div className="tab-content tab-content-info">
                                        {/* Single Tab */}
                                        <div id="tab3" className="tab-pane fade active in">
                                            <div className="info title">
                                                <div className="advisor-list-items">
                                                    {/* Advisor Item */}
                                                    <div style={{ borderRadius: '10px' }} className="item">
                                                        <div className="row">
                                                            <div style={{ borderRight: '1px solid #ccc' }} className="col-md-4">
                                                                <div className="thumb text-center">
                                                                    {/* Uncomment the line below if you want to use an image instead of the text */}
                                                                    {/* <img src="assets/img/team/7.jpg" alt="Thumb" className="img-responsive"/> */}
                                                                    <span>Đáp án đúng</span>
                                                                    <h4>C. Lionel Messi</h4>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-8">
                                                                <div style={{ textAlign: 'justify' }} className="info">
                                                                    <span>Ai là cầu thủ vĩ đại nhất trong lịch sử bóng đá?</span>
                                                                    <h5>
                                                                        A. Pelé
                                                                    </h5>
                                                                    <h5>
                                                                        B. Diego Maradona
                                                                    </h5>
                                                                    <h5>
                                                                        C. Lionel Messi
                                                                    </h5>
                                                                    <h5>
                                                                        D. Cristiano Ronaldo
                                                                    </h5>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    {/* End Advisor Item */}
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
                        {/* Start Sidebar */}
                        <div className="col-md-4">
                            <div className="sidebar">
                                <aside>
                                    {/* Sidebar Item */}
                                    <div className="sidebar-item recent-post">
                                        <div className="title">
                                            <h4>Popular Courses</h4>
                                        </div>
                                        <div className="item">
                                            <div className="content">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/courses/g1.jpg" alt="Thumb" className="img-responsive" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <h4>
                                                        <a href="#">Profession Python Learning</a>
                                                    </h4>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    {/* End Sidebar Item */}
                                </aside>
                            </div>
                        </div>
                        {/* End Sidebar */}
                    </div>
                </div>
            </div>
        </div>
    );
}
