import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function getAuthToken() {
  const token = localStorage.getItem("token");
  return token;
}

// Service function to create a new course
export const createCourse = async (course, accessToken) => {
  const COURSE_API_BASE_URL = 'http://localhost:3000/collections';

  const config = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    const response = await axios.post(COURSE_API_BASE_URL, course, config);
    return response.data; // Return the created course data
  } catch (error) {
    throw error; // Throw error for component to handle
  }
};

export default function CreateCourse() {
  const [courseName, setCourseName] = useState('');
  const [price, setPrice] = useState(0);
  const [questions, setQuestions] = useState([
    {
      detail: '',
      answerA: '',
      answerB: '',
      answerC: '',
      answerD: '',
      trueAnswer: 'A', // Defaulting to A
    },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index][field] = value;
    setQuestions(updatedQuestions);
  };

  const addQuestion = () => {
    setQuestions([
      ...questions,
      {
        detail: '',
        answerA: '',
        answerB: '',
        answerC: '',
        answerD: '',
        trueAnswer: 'A', // Defaulting to A
      },
    ]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!courseName || !price || questions.some(q => !q.detail || !q.answerA || !q.answerB || !q.answerC || !q.answerD || !q.trueAnswer)) {
      toast.error('Please fill in all fields for each question.');
      return;
    }

    const accessToken = getAuthToken()
    console.log("bat dau add");
    try {
      const createdCourse = await createCourse({
        name: courseName,
        price: price,
        numberOfQuestions: questions.length,
        questions: questions.map(({ detail, answerA, answerB, answerC, answerD, trueAnswer }) => ({
          detail,
          answerA,
          answerB,
          answerC,
          answerD,
          trueAnswer,
        })),
      }, accessToken);

      console.log('Course created:', createdCourse);
      toast.success('Course created successfully.');
      // Optionally redirect or navigate to another page after successful creation
    } catch (error) {
      console.error('Error creating course:', error);
      toast.error('Failed to create course. Please try again.');
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div className="container">
      <h2>Create Course</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseName">Course Name:</label>
          <input
            type="text"
            className="form-control"
            id="courseName"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            className="form-control"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {questions.map((question, index) => (
          <div key={index}>
            <h4>Question {index + 1}</h4>
            <div className="form-group">
              <label htmlFor={`questionDetail${index}`}>Question Detail:</label>
              <input
                type="text"
                className="form-control"
                id={`questionDetail${index}`}
                value={question.detail}
                onChange={(e) => handleQuestionChange(index, 'detail', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`answerA${index}`}>Answer A:</label>
              <input
                type="text"
                className="form-control"
                id={`answerA${index}`}
                value={question.answerA}
                onChange={(e) => handleQuestionChange(index, 'answerA', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`answerB${index}`}>Answer B:</label>
              <input
                type="text"
                className="form-control"
                id={`answerB${index}`}
                value={question.answerB}
                onChange={(e) => handleQuestionChange(index, 'answerB', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`answerC${index}`}>Answer C:</label>
              <input
                type="text"
                className="form-control"
                id={`answerC${index}`}
                value={question.answerC}
                onChange={(e) => handleQuestionChange(index, 'answerC', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`answerD${index}`}>Answer D:</label>
              <input
                type="text"
                className="form-control"
                id={`answerD${index}`}
                value={question.answerD}
                onChange={(e) => handleQuestionChange(index, 'answerD', e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor={`trueAnswer${index}`}>True Answer:</label>
              <select
                className="form-control"
                id={`trueAnswer${index}`}
                value={question.trueAnswer}
                onChange={(e) => handleQuestionChange(index, 'trueAnswer', e.target.value)}
                required
              >
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
              </select>
            </div>
          </div>
        ))}

        <button type="button" className="btn btn-primary" onClick={addQuestion}>
          Add Question
        </button>

        <button type="submit" className="btn btn-success">
          Create Course
        </button>
      </form>
    </div>
  );
}
