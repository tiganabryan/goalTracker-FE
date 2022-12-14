import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from 'axios';

const log = console.log;
const url = 'http://localhost:5000/api/goalTracker';

const initialState = {
  goals: [],
  loading: false,
};

export const getGoals = createAsyncThunk('goals/getGoals', async () => {
  const res = await fetch(url).then(data => data.json());
  return res;
});

export const addGoal = createAsyncThunk('goals/addGoal', async text => {
  const params = new URLSearchParams();
  params.append('text', text);

  axios
    .post('/api/goalTracker', params)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      log(err);
    });
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
    .catch(err => {
      log(err);
    });
});

// RTK Query?

export const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {},
  extraReducers: {
    // get goals
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

    // add goals
    [addGoal.pending]: state => {
      state.loading = true;
    },
    [addGoal.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.goals = payload;
    },
    [addGoal.rejected]: state => {
      state.loading = false;
    },

    // delete goals
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

export default goalsSlice.reducer;
