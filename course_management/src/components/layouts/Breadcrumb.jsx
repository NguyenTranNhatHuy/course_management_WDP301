import React from "react";

export default function Breadcrumb({name, numOfImage}) {
  return (
    <>
      {/* Start Breadcrumb ============================================= */}
      <div
        className="breadcrumb-area shadow dark text-center bg-fixed text-light"
        style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/banner/${numOfImage}.jpg)` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>{name}</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="/home">
                    <i className="fas fa-home" /> Home
                  </a>
                </li>
                <li>
                  <a href="#">Page</a>
                </li>
                <li className="active">{name}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb */}
    </>
  );
}
