import { createSlice } from "@reduxjs/toolkit";

// We initialize the slice default state
const initialState = {
  user: null, // User information
  loading: false,
  error: null,
};

// We create the slice
const userSlice = createSlice({
  name: "user", // Name of the slice
  initialState, // Initial state value
  reducers: {
    // We define the actions
    /*1) action to indicate user information loading*/
    getUserStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    /*2) action to successfully get the user*/
    getUserSuccess: (state, action) => {
      state.user = action.payload; // We update the user information
      state.loading = false;
      state.error = null;
    },

    /*3) action to fail to get the user*/
    getUserFail: (state, action) => {
      state.user = null; // We update the user information
      state.loading = false;
      state.error = action.payload; // We get the error
    },
  },
});

// We export actions
export const { getUserStart, getUserSuccess, getUserFail } = userSlice.actions;

// We export the reducer
export default userSlice.reducer;
