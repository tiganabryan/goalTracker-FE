import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
    id: 0,
    text: 'drink water',
    achieved: true
    },
]

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { updateGoals } = goalsSlice.actions

export default goalsSlice.reducer