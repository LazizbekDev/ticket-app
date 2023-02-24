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

const getTickets = async (token) => {
    const response = await axios.get(API_URL, {
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

const getTicket = async (ticketId, token) => {
    const response = await axios.get(`/${API_URL}/${ticketId}`, {
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

const closeTicket = async (ticketId, token) => {
    const response = await axios.put(`/${API_URL}/${ticketId}`,{
            status: "closed"
        },
        {
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
    create,
    getTicket,
    getTickets,
    closeTicket
}

export default ticketService