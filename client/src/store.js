import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./redux/auth/authSlice";
import ticketReducer from "./redux/tickets/ticketSlice";
import notesReduces from "./redux/notes/noteSlice";

export const store = () => configureStore({
    reducer: {
        auth: authReducer,
        ticket: ticketReducer,
        notes: notesReduces
    }
})