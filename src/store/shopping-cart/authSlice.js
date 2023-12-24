import { createSlice } from "@reduxjs/toolkit";
import { redirect } from "react-router";

const initialState = {
  isAuthenticated: false,
  // Add more user-related information if needed
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
      // You can add more logic here, like storing user details
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = authSlice.actions;

// Selectors
export const authSelectors = {
  isAuthenticated: (state) => state.auth.isAuthenticated,
  // Add more selectors as needed
};

export default authSlice.reducer;
