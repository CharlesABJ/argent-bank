import { createSlice } from "@reduxjs/toolkit";

// We initialize the slice default state
const initialState = {
  state: null, // Token
};

// We create the slice
const authSlice = createSlice({
  name: "auth", // Name of the slice
  initialState, // Initial state value
  reducers: {
    // We define the actions
    /*1) action to successfully log in*/
    loginSuccess: (state, action) => {
      state.token = action.payload; // We get the token
    },

    /*2) action to log out*/
    logout: (state) => {
      state.token = null; // We get the token
    },
  },
});

// We export actions
export const { loginSuccess, logout } = authSlice.actions;

// We export the reducer
export default authSlice.reducer;
