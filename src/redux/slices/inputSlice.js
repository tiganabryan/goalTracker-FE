import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  input: 'test',
}

export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    updateInput: (state, action) => {
      state.input = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { updateInput } = inputSlice.actions

export default inputSlice.reducer