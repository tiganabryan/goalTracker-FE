import { createSlice } from '@reduxjs/toolkit'
import input from "./inputSlice"

// const addGoal

const initialState = [
    {
        id: 1,
        input: 'drink water',
        achieved: true
    },
    {
        id: 2,
        input: 'in bed by 11:15',
        achieved: true
        },
    {
        id: 3,
        input: 'study 2hrs',
        achieved: true
    },
]

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state, action) => {
        const input = action.payload
        state.push(action.payload)
      }
  },
})

// Action creators are generated for each case reducer function
export const { addGoal } = goalsSlice.actions

export default goalsSlice.reducer