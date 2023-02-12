import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const signup = createAsyncThunk(
    'auth/register',
    async (user, thunkAPI) => {
        try {
            return await authService.signUp(user)
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

export const signin = createAsyncThunk(
    'auth/login',
    async (user, thunkAPI) => {
        try {
            return await authService.signIn(user)
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

export const logout = createAsyncThunk('auth/logout', async () => {
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(signup.pending, (state) => {
                state.loading = true
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.loading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(signup.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.user = null
                state.message = action.payload
            })
            .addCase(signin.pending, (state) => {
                state.loading = true
            })
            .addCase(signin.fulfilled, (state, action) => {
                state.loading = false;
                state.isSuccess = true;
                state.user = action.payload
            })
            .addCase(signin.rejected, (state, action) => {
                state.isError = true;
                state.isLoading = false;
                state.user = null
                state.message = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    }
})

export const { reset } = authSlice.actions;
export default authSlice.reducer