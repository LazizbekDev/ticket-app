import axios from "axios";
import {toast} from "react-toastify";

const API_URL = 'api/tickets'
const create = async (ticketData, token) => {
    const response = await axios.post(API_URL, ticketData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (response.data && !response.data.message) {
        return response.data
    }

    if (response.data.message) {
        toast(response.data.message)
    }
}

const ticketService = {
    create
}

export default ticketService