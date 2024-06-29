import { createContext, useState, useEffect } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [quizs, setQuizs] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionIndex, setQuestionIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [marks, setMarks] = useState(0);

  const [showStart, setShowStart] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    if (quizs.length > questionIndex) {
      setQuestion(quizs[questionIndex]);
    }
  }, [quizs, questionIndex]);

  const startQuiz = (questions) => {
    setQuizs(questions);
    setShowStart(false);
    setShowQuiz(true);
  };

  const checkAnswer = (event, selected) => {
    if (!selectedAnswer) {
      setCorrectAnswer(question.trueAnswer);
      setSelectedAnswer(selected);

      if (selected === question.trueAnswer) {
        event.target.classList.add('text-success');
        setMarks(marks + 5);
      } else {
        event.target.classList.add('text-danger');
      }
    }
  };

  const nextQuestion = () => {
    setCorrectAnswer('');
    setSelectedAnswer('');
    const wrongBtn = document.querySelector('li.text-danger');
    wrongBtn?.classList.remove('text-danger');
    const rightBtn = document.querySelector('li.text-success');
    rightBtn?.classList.remove('text-success');
    setQuestionIndex(questionIndex + 1);
  };

  const showTheResult = () => {
    setShowResult(true);
    setShowStart(false);
    setShowQuiz(false);
  };

  const startOver = () => {
    setShowStart(false);
    setShowResult(false);
    setShowQuiz(true);
    setCorrectAnswer('');
    setSelectedAnswer('');
    setQuestionIndex(0);
    setMarks(0);
    const wrongBtn = document.querySelector('button.bg-danger');
    wrongBtn?.classList.remove('bg-danger');
    const rightBtn = document.querySelector('button.bg-success');
    rightBtn?.classList.remove('bg-success');
  };

  return (
    <DataContext.Provider value={{
      startQuiz, showStart, showQuiz, question, quizs, checkAnswer, correctAnswer,
      selectedAnswer, questionIndex, nextQuestion, showTheResult, showResult, marks,
      startOver
    }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
