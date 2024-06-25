import React from "react";
import { useNavigate } from "react-router-dom";

export default function Course({ id, price, name, description }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    console.log("id = ",id);
    navigate(`/course/${id}`);
  };

  return (
    <>
      {/* Single Item */}
      <div className="col-md-4 col-sm-6 equal-height">
        <div className="item">
          <div className="thumb" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            <img src="assets/img/courses/5.jpg" alt="Thumb" />
            <div className="price">Price: {price}</div>
          </div>
          <div className="info">
            <div className="author-info">
              <div className="thumb">
                <a href="#">
                  <img src="assets/img/team/1.jpg" alt="Thumb" />
                </a>
              </div>
              <div className="others">
                <a href="#">Munil Druva</a>
                <div className="rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                  <span>4.5 (23,890)</span>
                </div>
              </div>
            </div>
            <h4>
              <a onClick={handleNavigate} style={{ cursor: 'pointer' }}>{name}</a>
            </h4>
            <p>{description}</p>
            <div className="bottom-info">
              <ul>
                <li>
                  <i className="fas fa-user" /> 6,690
                </li>
                <li>
                  <i className="fas fa-clock" /> 16:00
                </li>
              </ul>
              <a href="#">Learn Now</a>
            </div>
          </div>
        </div>
      </div>
      {/* End Single Item */}
    </>
  );
}
