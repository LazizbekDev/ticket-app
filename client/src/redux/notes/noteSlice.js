import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import noteService from "./noteService";

const initialState = {
    notes: [],
    isSuccess: false,
    isError: false,
    isLoading: false,
    message: ''
}

export const getNotes = createAsyncThunk(
    'notes/get',
    async (ticketId, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token;
            return await noteService.getNotes(ticketId, token)
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
export const createNotes = createAsyncThunk(
    'notes/create',
    async (data, thunkAPI) => {
        try {
            console.log(data)
            const token = thunkAPI.getState().auth.user.token;
            return await noteService.createNotes(data.note, data.id, token)
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

const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        reset: () => initialState
    },
    extraReducers: (builder) => {
        builder
            .addCase(getNotes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getNotes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.notes = action.payload
            })
            .addCase(getNotes.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload
            })
            .addCase(createNotes.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createNotes.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isSuccess = true;
                state.notes.push(action.payload)
            })
            .addCase(createNotes.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.message = action.payload
            })
    }
})

export const { reset } = notesSlice.actions;
export default notesSlice.reducer;