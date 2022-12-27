import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  input: '',
};

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      state.input = action.payload;
    },
  },
});

export const { updateInput } = inputSlice.actions;

export default inputSlice.reducer;
