import React from "react";
import Breadcrumb from "../layouts/Breadcrumb";
import Course from "../generals/Course";

export default function CoursesPage() {
  return (
    <>
     <Breadcrumb name={"Courses"} numOfImage={2} />
      {/* Start Popular Courses  ============================================= */}
      <div className="popular-courses default-padding bottom-less without-carousel">
        <div className="container">
          <div className="row">
            <div className="popular-courses-items">
            <Course price={12000} name={"Data"} />
            <Course price={15000} name={"Data"} />
            <Course price={30000} name={"Data"} />
            <Course price={"Free"} name={"Data"} />
            </div>
          </div>
        </div>
      </div>
      {/* End Popular Courses */}
    </>
  );
}
