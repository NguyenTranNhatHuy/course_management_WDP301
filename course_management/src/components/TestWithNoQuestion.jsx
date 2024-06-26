import React from 'react';
import { useLocation } from 'react-router-dom';

export default function TestWithNoQuestion() {
  const location = useLocation();
  const { questions } = location.state;

  return (
    <div className="container">
      <h2>Test with Selected Questions</h2>
      {questions.map((question, index) => (
        <div key={question._id} className="question">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">Question {index + 1}</h4>
            </div>
            <div className="panel-body">
              <p>
                <strong>Detail:</strong> {question.detail}
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Answer A:</strong> {question.answerA}
                </li>
                <li className="list-group-item">
                  <strong>Answer B:</strong> {question.answerB}
                </li>
                <li className="list-group-item">
                  <strong>Answer C:</strong> {question.answerC}
                </li>
                <li className="list-group-item">
                  <strong>Answer D:</strong> {question.answerD}
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
