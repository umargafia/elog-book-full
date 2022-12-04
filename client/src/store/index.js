import { configureStore } from "@reduxjs/toolkit";
import { StaffReducer } from "./staffSlice";
import { StudentReducer } from "./studentSlice";

export const Store = configureStore({
  reducer: {
    student: StudentReducer,
    staff: StaffReducer,
  },
});
