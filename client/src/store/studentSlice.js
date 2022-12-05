import { configureStore, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { json, Link, useNavigate } from "react-router-dom";
import API from "../api";

const initialState = {
  user: null,
  isLoading: false,
  id: "",
  isOpen: false,
};
const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {
    login(state) {
      state.user = JSON.parse(localStorage.getItem("user"));
    },
    logout() {
      // localStorage.removeItem("user");
      // localStorage.removeItem("weeks");
      // localStorage.removeItem("staff");
      localStorage.clear();
    },
    model(state) {
      state.isOpen = !state.isOpen;
    },
    week(state, action) {
      state.id = action.payload;
      console.log(state.id);
    },
  },
});

export const StudentAction = studentSlice.actions;
export const StudentReducer = studentSlice.reducer;
