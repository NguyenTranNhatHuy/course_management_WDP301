import React from "react";
import { useNavigate } from "react-router-dom";


const courseImages = [
  "assets/img/courses/1.jpg",
  "assets/img/courses/2.jpg",
  "assets/img/courses/3.jpg",
  "assets/img/courses/4.jpg",
  "assets/img/courses/5.jpg",
  "assets/img/courses/6.jpg",
];


const authorImages = [
  "assets/img/team/1.jpg",
  "assets/img/team/2.jpg",
  "assets/img/team/3.jpg",
  "assets/img/team/4.jpg",
  "assets/img/team/5.jpg",
  "assets/img/team/6.jpg",
  "assets/img/team/7.jpg",
  "assets/img/team/8.jpg",
  "assets/img/team/9.jpg",
];


const getRandomIndex = (array) => Math.floor(Math.random() * array.length);


const Course = ({ id, price, name, description, enrolled, onLearnNowClick, author }) => {
  const navigate = useNavigate();


  const randomCourseImage = courseImages[getRandomIndex(courseImages)];
  const randomAuthorImage = authorImages[getRandomIndex(authorImages)];


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





