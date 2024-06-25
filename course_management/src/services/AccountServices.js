import axios from "axios";
const ACCOUNT_API_BASE_URL = "http://localhost:3000/users/";

export const getAccountById = (id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.get(ACCOUNT_API_BASE_URL + id, config);
};

export const register = (account, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.post(`${ACCOUNT_API_BASE_URL}signup`, account, config);
};



// Get all accounts (admin only)
export const getAllAccounts = (accessToken, page, limit) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        params: {
            page,
            limit,
        },
    };

    return axios.get(ACCOUNT_API_BASE_URL, config);
};

// Update an account by ID
export const updateAccountById = (id, account, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.put(ACCOUNT_API_BASE_URL + id, account, config);
};

// Delete an account by ID
export const deleteAccountById = (id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.delete(ACCOUNT_API_BASE_URL + id, config);
};


// Function to get all favorite courses
export const getAllFavoriteCourses = (id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.get(ACCOUNT_API_BASE_URL+id+"/favoriteCollections", config);
};