import {
  createAsyncThunk,
  createSlice,
  current,
  original,
} from '@reduxjs/toolkit';
import input from './inputSlice';

import axios from 'axios';

const log = console.log;
const url = 'http://localhost:5000/api/goalTracker';

const initialState = {
  goals: [],
  loading: false,
};

export const getGoals = createAsyncThunk('goals/getGoals', async thunkAPI => {
  const res = await fetch(url).then(data => data.json());
  return res;
});

export const deleteGoal = createAsyncThunk('goals/deleteGoal', async id => {
  axios({
    method: 'delete',
    url: `http://localhost:5000/api/goalTracker/${id}`,
    responseType: 'json',
  })
    .then(function () {
      log(`deletion of goal ${id} successful`);
    })
    .catch(err => log(err));
});

// export const deleteGoal = createAsyncThunk(
//   'goals/deleteGoal',
//   async thunkAPI => {
//     const res = await fetch(url).then(data => data.json());
//     return res;
//   }
// );
// use RTK Query

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {
    // addGoal: (state, action) => {
    //   state.push(action.payload);
    // },
    deleteGoal: (state, action) => {
      log(current(state.goals));
      log(current(state).goals.filter(goal => goal._id !== action.payload));
      // return console.log(state);
    },
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

    [deleteGoal.pending]: state => {
      state.loading = true;
    },
    [deleteGoal.fulfilled]: state => {
      state.loading = false;
    },
    [deleteGoal.rejected]: state => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addGoal } = goalsSlice.actions;
// export const goalsReducer = goalsSlice.reducer;

export default goalsSlice.reducer;

// console.log(goalId)
