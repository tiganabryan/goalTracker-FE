import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
  submit: false,
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      state.input = action.payload;
    },
    toggleSubmit: state => {
      state.submit = !state.submit;
    },
  },
});

export const { updateInput, toggleSubmit } = inputSlice.actions;

export default inputSlice.reducer;
