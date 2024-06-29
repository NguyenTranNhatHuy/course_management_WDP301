import React, { useContext } from 'react';
import DataContext from '../context/DataProvider';

const Result = () => {
  const { marks, quizs, startOver } = useContext(DataContext);

  return (
    <div className="container">
      <h2>Result</h2>
      <p>Your score is {marks} out of {quizs.length * 5}</p>
      <button className="btn btn-primary" onClick={startOver}>Restart</button>
    </div>
  );
};

export default Result;
