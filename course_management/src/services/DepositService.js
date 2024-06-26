import axios from "axios";
const DEPOSIT_API_BASE_URL = "http://localhost:3000/deposit/";

// Get all deposit (admin only)
export const getAllDeposit = (accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        }

    };

    return axios.get(DEPOSIT_API_BASE_URL, config);
};

// Update an deposit by ID
export const updateDepositById = (id, status, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.put(DEPOSIT_API_BASE_URL + id, status, config);
};

// Delete an deposit by ID
export const deleteAccountById = (id, accessToken) => {
    const config = {
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
    };

    return axios.delete(DEPOSIT_API_BASE_URL + id, config);
};
