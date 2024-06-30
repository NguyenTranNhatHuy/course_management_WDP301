import React, { useState } from "react";
import { toast } from 'react-toastify';
import GPT from './popup/App'


function App() {
  const [fileContent, setFileContent] = useState("");
  const [courseName, setCourseName] = useState("");
  const [price, setPrice] = useState("");
  const [questions, setQuestions] = useState([]);
  const [accountId, setAccountId] = useState(localStorage.getItem("accountid")); // Assuming accountId is stored in localStorage

  // Function to handle file input change
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const content = event.target.result;
      setFileContent(content);
    };

    reader.readAsText(file);
  };

  // Function to parse file content and create questions object
  const parseFileContent = () => {
    const lines = fileContent.split("\n");
    const parsedQuestions = [];
    let currentQuestion = {};

    lines.forEach((line) => {
      const trimmedLine = line.trim();
      if (trimmedLine.startsWith("Question:")) {
        // Finish current question and push to array
        if (Object.keys(currentQuestion).length > 0) {
          parsedQuestions.push(currentQuestion);
        }
        // Start new question
        currentQuestion = {
          detail: trimmedLine.substring(trimmedLine.indexOf(":") + 1).trim(),
        };
      } else if (trimmedLine.startsWith("A:")) {
        currentQuestion.answerA = trimmedLine
          .substring(trimmedLine.indexOf(":") + 1)
          .trim();
      } else if (trimmedLine.startsWith("B:")) {
        currentQuestion.answerB = trimmedLine
          .substring(trimmedLine.indexOf(":") + 1)
          .trim();
      } else if (trimmedLine.startsWith("C:")) {
        currentQuestion.answerC = trimmedLine
          .substring(trimmedLine.indexOf(":") + 1)
          .trim();
      } else if (trimmedLine.startsWith("D:")) {
        currentQuestion.answerD = trimmedLine
          .substring(trimmedLine.indexOf(":") + 1)
          .trim();
      } else if (trimmedLine.startsWith("TrueAnswer:")) {
        currentQuestion.trueAnswer = trimmedLine
          .substring(trimmedLine.indexOf(":") + 1)
          .trim();
      }
    });

    // Push the last question into the array
    if (Object.keys(currentQuestion).length > 0) {
      parsedQuestions.push(currentQuestion);
    }

    // Call API to add questions
    addQuestions(parsedQuestions);
  };

  // Function to add questions via API
  const addQuestions = async (parsedQuestions) => {
    try {
      const response = await fetch("http://localhost:3000/questions/add-many", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ questions: parsedQuestions }),
      });

      if (!response.ok) {
        throw new Error("Failed to add questions");
      }

      const data = await response.json();
      setQuestions(data.questionIds);
      console.log("Successfully added questions:", data.questionIds);
      console.log("Type: ", typeof(data.questionIds));
      toast.success('Added questions successful');
    } catch (error) {
      console.error("Error adding questions:", error.message);
      toast.success('Error Adding questions');
    }
  };

  // Function to create collection via API
  const createCollection = async () => {
    const accessToken = localStorage.getItem("token");
    console.log("question: ",questions);
    console.log("type: ",typeof(questions));
    try {
      const response = await fetch("http://localhost:3000/collections/addCollection", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          userId: accountId,
          name: courseName,
          numberOfQuestion: questions.length,
          price: parseFloat(price), // Ensure price is converted to number
          questions: questions,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create course");
      }

      const data = await response.json();
      console.log("Successfully created course:", data);
      toast.success('Successfully created course');
      // Optionally, you can handle the response data or update state accordingly
    } catch (error) {
      console.error("Error creating course:", error.message);
      toast.success('Error creating course');
    }
  };

  return (
    <div className="App">
      <h1>File Reader and Parser</h1>
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

      <input type="file" accept=".txt" onChange={handleFileChange} />
      <button onClick={parseFileContent}>Confirm</button>
      <button onClick={createCollection}>Create Course</button>
      <GPT />
    </div>
  );
}

export default App;
