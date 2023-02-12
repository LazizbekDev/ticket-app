import axios from "axios";
import {toast} from "react-toastify";

const API_URL = '/api/users/sign-up/'

const signUp = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if (response.data && !response.data.message) {
        localStorage.setItem('user', JSON.stringify(response.data));
        return response.data
    }

    if (response.data.message) {
        toast(response.data.message)
    }
}

const logout = () => localStorage.removeItem('user');

const authService = {
    signUp,
    logout
}

export default authService;