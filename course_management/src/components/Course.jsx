import React from "react";
import { useNavigate } from "react-router-dom";

const Course = ({
  id,
  price,
  name,
  description,
  enrolled,
  onLearnNowClick,
  author,
  randomCourseImage,
  randomAuthorImage,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/course/${id}`);
  };

  const handleLearnNowClick = (event) => {
    event.stopPropagation();
    onLearnNowClick();
  };

  return (
    <div className="col-md-4 col-sm-6 equal-height">
      <div className="item">
        <div className="thumb" style={{ cursor: 'pointer' }}>
          <img src={randomCourseImage} alt="Course Thumbnail" />
          <div className="price">Price: {price}</div>
        </div>
        <div className="info">
          <div className="author-info">
            <div className="thumb">
              <a href="#">
                <img src={randomAuthorImage} alt="Author Thumbnail" />
              </a>
            </div>
            <div className="others">
              <a href="#">{author}</a>
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
            <a onClick={handleLearnNowClick} style={{ cursor: 'pointer' }}>
              {enrolled ? 'View Detail' : 'Learn Now'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
