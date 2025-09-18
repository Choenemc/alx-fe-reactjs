import axios from 'axios';

const BASE_URL = "https://api.github.com/users";

/** 
@param {string} username - Github username
@returns {promise<object>} -User data
*/
export const fetchGithubUser = async (username) => {
    try {
        const response = await axios.get(`${BASE_URL}/${username}`);
        return response.data;
    } catch (error) {
        throw error;
    }
}