import axios from "axios";
const COLLECTION_API_BASE_URL = "http://localhost:3000/collections/";


// Get all collection (admin only)
export const getAllCollections = (accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }

    };

    return axios.get(COLLECTION_API_BASE_URL, config);
};


export const addCollection = (collection, accessToken) => {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.post(`${COLLECTION_API_BASE_URL}`, collection, config);
};

// Update an collection by ID
export const updateCollectionById = (id, collection, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.put(COLLECTION_API_BASE_URL + id, collection, config);
};

// Delete an account by ID
export const deleteCollectionById = (id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.delete(COLLECTION_API_BASE_URL + id, config);
};