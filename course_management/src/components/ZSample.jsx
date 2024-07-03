import React, { useState } from "react";
import "../style/result.css";

export default function DepositPage() {
  return (
    <div className="container-result">
      <h2>Exam Results</h2>
      <div className="content">
        <p>You answered 3 out of 5 questions correctly.</p>
        <p style={{fontWeight:"bold"}}>Your grade is: 123</p>
      </div>
      <button className="btn btn-primary go-back">Back to Exam List</button>
    </div>
  );
}
