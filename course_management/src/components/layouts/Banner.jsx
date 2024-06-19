import React from "react";

export default function Banner() {
  return (
    <>
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
                            className="btn btn-light border btn-md"
                            href="#"
                          >
                            Learn more
                          </a>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="#"
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
                style={{ backgroundImage: "url(assets/img/banner/3.jpg)" }}
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
                            className="btn btn-light border btn-md"
                            href="#"
                          >
                            Learn more
                          </a>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="#"
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
                style={{ backgroundImage: "url(assets/img/banner/4.jpg)" }}
              />
              <div className="box-table shadow dark">
                <div className="box-cell">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <div className="content">
                          <h3 data-animation="animated slideInLeft">
                            The goal of education
                          </h3>
                          <h1 data-animation="animated slideInUp">
                            Join the bigest comunity of eduka
                          </h1>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-light border btn-md"
                            href="#"
                          >
                            Learn more
                          </a>
                          <a
                            data-animation="animated slideInUp"
                            className="btn btn-theme effect btn-md"
                            href="#"
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
    </>
  );
}
