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
export const getAllAccounts = (accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }

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

export const updateWalletByAccountId = (id, wallet, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const data = {
        wallet: wallet
    };

    return axios.put(`${ACCOUNT_API_BASE_URL}${id}`, data, config);
};

export const updateMembershipStatus = (id, memberShip, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    const data = {
        memberShip: memberShip
    };

    return axios.put(`${ACCOUNT_API_BASE_URL}${id}`, data, config);
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

    return axios.get(ACCOUNT_API_BASE_URL + id + "/favoriteCollections", config);
};

// Function to add new favorite course
export const addFavoriteCourse = (id, collectionId, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
    const body = {
        collectionId: collectionId,
    }

    return axios.post(ACCOUNT_API_BASE_URL + id + "/addCollection", body, config);
};

export const addMoney = (id, amount, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.post(ACCOUNT_API_BASE_URL + id + "/add-money", amount, config);
};

// Get an account by username
export const getAccountByUsername = (username) => {
    return axios.get(ACCOUNT_API_BASE_URL + "getName/" + username);
};

// Update an password by userId
export const updatePassword = (id, newPassword) => {

    const data = {
        password: newPassword
    };

    return axios.put(ACCOUNT_API_BASE_URL + "update-password/" + id, data);
};

export const deleteFavoriteCourse = (id, collectionId, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };
    return axios.put(ACCOUNT_API_BASE_URL + id + "/favoriteCollection/" + collectionId, null, config); // Pass null as data
};
