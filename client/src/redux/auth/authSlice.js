import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const signup = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) =>
        console.log(user)
)

export const signin = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) =>
        console.log(user)
)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

    }
})

export default authSlice.reducer