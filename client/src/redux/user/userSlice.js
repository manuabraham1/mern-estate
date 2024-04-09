import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currentUser: null,
    error: null,
    loading: false
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        signInStart: (state) =>{
            state.loading = true
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure :(state, action) => {
            state.error = action.payload;
            state.loading = false
        },
        updateUserStart :(state,action) =>{
            state.loading = true;
        },
        updateUserSuccess : (state,action) =>{
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        updateUserFailure : (state,action) =>{
            state.error = action.payload;
            state.loading = false;
        },
        deletUserStart : (state,action) =>{
            state.loading = false;
        },
        deleteUserSuccess : (state,action) =>{
            state.currentUser = null;
            state.loading = false;
            state.error =null;
        },
        deleteUserFailure : (state,action) =>{
            state.error = action.payload;
            state.loading = false;
        }
    }
})

export const {signInStart, signInSuccess,signInFailure, updateUserStart,updateUserSuccess,updateUserFailure,
            deletUserStart,deleteUserFailure,deleteUserSuccess} = userSlice.actions

export default userSlice.reducer;