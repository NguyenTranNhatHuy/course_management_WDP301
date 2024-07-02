import axios from 'axios';

const EXAM_API_BASE_URL = 'http://localhost:3000/exam/';

export const createExam = async (accessToken, examData) => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    };
    try {
        const response = await axios.post(EXAM_API_BASE_URL, examData, config);
        return response.data; // Assuming server responds with created exam data
    } catch (error) {
        throw error; // Handle error appropriately in your component
    }
};

export const getAllExams = (accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }

    };

    return axios.get(EXAM_API_BASE_URL, config);
};
  
