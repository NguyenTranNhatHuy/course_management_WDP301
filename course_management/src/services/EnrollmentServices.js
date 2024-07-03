import axios from "axios";
const ENROLLMENT_API_BASE_URL = "http://localhost:3000/enrollment/";

export const getEnrollmentById = (id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.get(ENROLLMENT_API_BASE_URL + id, config);
};

export const getAllEnrollment = (accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.get(ENROLLMENT_API_BASE_URL, config);
};

export const createEnrollmentById = (id, examId, grade, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const body = {
        userId: id,
        examId: examId,
        score: grade,
    }
    return axios.post(ENROLLMENT_API_BASE_URL, body, config);
};

export const getEnrollmentByUserId = (id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.get(ENROLLMENT_API_BASE_URL +"/user/"+ id, config);
};
