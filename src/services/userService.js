import config from '../config/config';

const getUsers = async (api = 'jsonPlaceholderApi') => {
    try {
        const response = await fetch(`${config[api].apiUrl}${config[api].endpoints.users}`);
        if (!response.ok) {
            throw new Error(`Error fetching users: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};


const getPlatters = async (api = 'localApi') => {
    try {
        const response = await fetch(`${config[api].apiUrl}${config[api].endpoints.platters}`);
        if (!response.ok) {
            throw new Error(`Error fetching platters: ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export default {
    getUsers,
    getPlatters
};
