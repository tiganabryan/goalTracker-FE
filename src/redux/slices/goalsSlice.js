import { createSlice, current, original } from '@reduxjs/toolkit'
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
        input: 'in bed by 11:00',
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
        state.push(action.payload)
      },
    deleteGoal: (state, action) => {
      const goalId = action.payload
      state = state.filter((goal) => goal.input !== goalId)
      // console.log(state.map((goal) => goal.input))
      // console.log(current(state))
      return console.log(state)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addGoal, deleteGoal } = goalsSlice.actions

export default goalsSlice.reducer

      // console.log(goalId)
