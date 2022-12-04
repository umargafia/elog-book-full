import { createSlice } from "@reduxjs/toolkit";
import { Link } from "react-router-dom";

const initialState = {
  staff: null,
  isLoading: false,
  weeks: {},
};
const staffSlice = createSlice({
  name: "student",
  initialState: initialState,
  reducers: {
    login(state, actions) {
      state.staff = state.user = JSON.parse(localStorage.getItem("staff"));
    },
    logout() {
      localStorage.removeItem("user");
      localStorage.removeItem("weeks");
    },
    getWeeks(state) {},
  },
});

export const StaffAction = staffSlice.actions;
export const StaffReducer = staffSlice.reducer;
