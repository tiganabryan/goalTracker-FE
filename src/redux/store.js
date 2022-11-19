import { configureStore } from '@reduxjs/toolkit'

import inputReducer from './slices/inputSlice'
import goalsReducer from "./slices/goalsSlice"

export const store = configureStore({
  reducer: {
    input: inputReducer,
    goals: goalsReducer
  },
})