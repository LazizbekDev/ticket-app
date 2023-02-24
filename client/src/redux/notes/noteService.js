import axios from "axios";
import { toast } from "react-toastify";

const API_URL = 'api/tickets'
const getNotes = async (id, token) => {
    const response = await axios.get(`/${API_URL}/${id}/notes`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

    if (response.data && !response.data.message) {
        return response.data
    }

    if (response.data.message) {
        toast(response.data.message)
    }
}

const noteService = {
    getNotes
}

export default noteService