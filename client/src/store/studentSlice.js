import { createSlice } from '@reduxjs/toolkit';

const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  user: user ? user : null,
  isLoading: false,
  id: '',
  isOpen: false,
};
const studentSlice = createSlice({
  name: 'student',
  initialState: initialState,
  reducers: {
    login(state, action) {
      const data = action.payload;
      state.user = data;
      localStorage.setItem('user', JSON.stringify(data));
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
