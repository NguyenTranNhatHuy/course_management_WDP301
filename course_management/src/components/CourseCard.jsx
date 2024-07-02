import React from "react";
import { useNavigate } from "react-router-dom";


// Define your random images arrays
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


const CourseCard = ({ id, price, name, description, author }) => {
  const navigate = useNavigate();


  const randomCourseImage = courseImages[getRandomIndex(courseImages)];
  const randomAuthorImage = authorImages[getRandomIndex(authorImages)];


  const handleNavigate = () => {
    navigate(`/course/${id}`);
  };


  return (
    <>
      {/* Single Item */}
      <div className="col-md-4 col-sm-6 equal-height">
        <div className="item">
          <div className="thumb" onClick={handleNavigate} style={{ cursor: 'pointer' }}>
            <img src={randomCourseImage} alt="Thumb" />
            <div className="price">Price: {price}</div>
          </div>
          <div className="info">
            <div className="author-info">
              <div className="thumb">
                <a href="#">
                  <img src={randomAuthorImage} alt="Thumb" />
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
          </div>
        </div>
      </div>
      {/* End Single Item */}
    </>
  );
};


export default CourseCard;





