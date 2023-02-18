import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ticketService from "./ticketService";

const initialState = {
    tickets: [],
    ticket: {},
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: ''
}

export const createTicket = createAsyncThunk(
    'tickets/create',
    async (ticketData, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await ticketService.create(ticketData, token)
        } catch (err) {
            const message = (err.response &&
                    err.response.data &&
                    err.response.data.message) ||
                err.message ||
                err.toString();

            return thunkAPI.rejectWithValue(message)
        }
    }
)


export const ticketSlice = createSlice({
    name: 'ticket',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(createTicket.pending, (state) => {
                state.loading = true
            })
            .addCase(createTicket.fulfilled, (state, action) => {
                state.loading = false;
                state.isSuccess = true;
                state.ticket = action.payload
            })
            .addCase(createTicket.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload
            })
    }
})

export const { reset } = ticketSlice.actions;
export default ticketSlice.reducer;