import {
  createAsyncThunk,
  createSlice,
  current,
  original,
} from '@reduxjs/toolkit';
import input from './inputSlice';

const initialState = {
  goals: [],
};

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    addGoal: (state, action) => {
      state.goals.push(action.payload);
    },
    deleteGoal: (state, action) => {
      const goalId = action.payload;
      state = goals.filter(goal => goal.input !== goalId);
      // console.log(state.map((goal) => goal.input))
      // console.log(current(state))
      return console.log(state);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGoal, deleteGoal } = goalsSlice.actions;

export default goalsSlice.reducer;

// console.log(goalId)
