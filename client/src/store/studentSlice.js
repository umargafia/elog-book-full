import { configureStore, createSlice } from "@reduxjs/toolkit";
import Axios from "axios";
import { json, Link, useNavigate } from "react-router-dom";
import API from "../api";

const initialState = {
  user: null,
  isLoading: false,
  weeks: {},
};
const studentSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {
    login(state) {
      state.user = JSON.parse(localStorage.getItem("user"));
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("weeks");
    },
    getWeeks(state) {
      //state.weeks = getWeeks(state.user);
    },
  },
});

export const StudentAction = studentSlice.actions;
export const StudentReducer = studentSlice.reducer;

const getWeeks = (user) => {};
