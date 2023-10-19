import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user')) || '';
const token = JSON.parse(localStorage.getItem('token')) || '';
const initialState = {
  user,
  token,
  isLoading: false,
  id: '',
  isOpen: false,
};

const studentSlice = createSlice({
  name: 'student',
  initialState: initialState,
  reducers: {
    login(state, action) {
      const data = action.payload?.data;
      const token = action.payload?.token;
      state.user = data;
      localStorage.setItem('user', JSON.stringify(data));
      if (token) {
        state.token = token;
        localStorage.setItem('token', JSON.stringify(token));
      }
    },
    logout(state) {
      localStorage.clear();
      state.user = null;
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
