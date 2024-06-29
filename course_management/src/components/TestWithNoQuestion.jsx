import React, { useContext } from 'react';
import DataContext from '../context/DataProvider';

const TestWithNoQuestion = () => {
  const {
    showQuiz,
    question,
    checkAnswer,
    correctAnswer,
    selectedAnswer,
    questionIndex,
    nextQuestion,
    showTheResult,
    quizs,
  } = useContext(DataContext);

  if (!showQuiz) {
    return null;
  }

  const isAnswerCorrect = (option) => {
    return selectedAnswer === option && selectedAnswer === question.trueAnswer;
  };

  const isAnswerWrong = (option) => {
    return selectedAnswer === option && selectedAnswer !== question.trueAnswer;
  };

  return (
    <div className="container">
      <h3>Question {questionIndex + 1}/{quizs.length}</h3>
      <div className="panel panel-default">
        <div className="panel-body">
          <p>{question.detail}</p>
          <div className="list-group">
            <button
              className={`list-group-item btn ${isAnswerCorrect(question.answerA) ? 'btn-success' : isAnswerWrong(question.answerA) ? 'btn-danger' : 'btn-default'}`}
              onClick={(e) => checkAnswer(e, question.answerA)}
              disabled={selectedAnswer !== ''}
            >
              A. {question.answerA}
            </button>
            <button
              className={`list-group-item btn ${isAnswerCorrect(question.answerB) ? 'btn-success' : isAnswerWrong(question.answerB) ? 'btn-danger' : 'btn-default'}`}
              onClick={(e) => checkAnswer(e, question.answerB)}
              disabled={selectedAnswer !== ''}
            >
              B. {question.answerB}
            </button>
            <button
              className={`list-group-item btn ${isAnswerCorrect(question.answerC) ? 'btn-success' : isAnswerWrong(question.answerC) ? 'btn-danger' : 'btn-default'}`}
              onClick={(e) => checkAnswer(e, question.answerC)}
              disabled={selectedAnswer !== ''}
            >
              C. {question.answerC}
            </button>
            <button
              className={`list-group-item btn ${isAnswerCorrect(question.answerD) ? 'btn-success' : isAnswerWrong(question.answerD) ? 'btn-danger' : 'btn-default'}`}
              onClick={(e) => checkAnswer(e, question.answerD)}
              disabled={selectedAnswer !== ''}
            >
              D. {question.answerD}
            </button>
          </div>
          {selectedAnswer && (
            <div>
              <p>Correct Answer: {correctAnswer}</p>
              {questionIndex + 1 < quizs.length ? (
                <button className="btn btn-primary" onClick={nextQuestion}>
                  Next Question
                </button>
              ) : (
                <button className="btn btn-success" onClick={showTheResult}>
                  Back to Collections
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestWithNoQuestion;
