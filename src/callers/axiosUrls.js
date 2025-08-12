import axios from './axiosConfig';
 
const handleResponseError = (error) => {
    if (error.response) {
        const { status, data } = error.response;
        if (status === 404) {
            throw new Error(`(Not Found) Incorrect API call - ${error.message}`);
        } else if (data?.message) {
            throw new Error(data.message);
        } else if (data?.detail) {
            throw new Error(data.detail);
        } else {
            throw new Error(`Unexpected error occurred: ${JSON.stringify(data)}`);
        }
    } else if (error.request) {
        throw new Error(`No response received: Network Error (Couldn't connect to the server)`);
    } else {
        throw new Error(`Client error: Error setting up the request - ${error.message}`);
    }
};
 
const getAPI = async (path) => {
    try {
        const response = await axios.get(path);
        return response.data;  // ✅ Fixed: Axios automatically parses JSON
    } catch (error) {
        handleResponseError(error);
    }
};
 
const postAPI = async (path, data) => {
    try {
        const response = await axios.post(path, data);
        return response.data;  // ✅ Fixed
    } catch (error) {
        handleResponseError(error);
    }
};
 
export { getAPI, postAPI };
 