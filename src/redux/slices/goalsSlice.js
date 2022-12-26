import {
  createAsyncThunk,
  createSlice,
  current,
  original,
} from '@reduxjs/toolkit';
import input from './inputSlice';

const url = 'http://localhost:5000/api/goalTracker';

const initialState = {
  goals: [],
  loading: false,
};

export const getGoals = createAsyncThunk('goals/getGoals', async thunkAPI => {
  const res = await fetch(url).then(data => data.json());
  return res;
});

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    // addGoal: (state, action) => {
    //   state.push(action.payload);
    // },
    // deleteGoal: (state, action) => {
    //   const goalId = action.payload;
    //   state = state.filter(goal => goal.input !== goalId);
    //   // console.log(state.map((goal) => goal.input))
    //   // console.log(current(state))
    //   return console.log(state);
    // },
  },
  extraReducers: {
    [getGoals.pending]: state => {
      state.loading = true;
    },
    [getGoals.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.goals = payload;
    },
    [getGoals.rejected]: state => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGoal, deleteGoal } = goalsSlice.actions;
// export const goalsReducer = goalsSlice.reducer;

export default goalsSlice.reducer;

// console.log(goalId)
