import axios from "axios";
const QUESTION_API_BASE_URL = "http://localhost:3000/question/";


// Get all collection (admin only)
export const getAllQuestions = (accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }

    };

    return axios.get(QUESTION_API_BASE_URL, config);
};


export const addQuestion = (question, accessToken) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.post(`${QUESTION_API_BASE_URL}`, question, config);
};

// Update an collection by ID
export const updateQuestionById = (id, question, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.put(QUESTION_API_BASE_URL + id, question, config);
};

// Delete an account by ID
export const deleteQuestionById = (id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.delete(QUESTION_API_BASE_URL + id, config);
};