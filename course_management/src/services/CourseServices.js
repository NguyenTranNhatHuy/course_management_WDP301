import axios from "axios";
const COURSE_API_BASE_URL = "http://localhost:3000/collections/";

// Function to get all courses
export const getAllCourses = (accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.get(COURSE_API_BASE_URL, config);
};

// Function to create a new course
export const createCourse = (course, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.post(COURSE_API_BASE_URL, course, config);
};

export const getCollectionsByCurrentUser = (accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.get(`${COURSE_API_BASE_URL}mycollections`, config);
};

// Function to get a specific collection by ID
export const getCollectionById = (id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.get(`${COURSE_API_BASE_URL}${id}`, config);
};

