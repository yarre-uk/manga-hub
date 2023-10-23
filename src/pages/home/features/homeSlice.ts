import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from '@reduxjs/toolkit';

import { fetchPosts } from './actionCreators';
import { initialState } from './models';

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    reset: (state) => {
      state.entities = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isPending(fetchPosts), (state) => {
        state.status = 'pending';
        state.error = '';
      })
      .addMatcher(isRejected(fetchPosts), (state, { error }) => {
        state.status = 'pending';
        state.error = error.message ?? 'Error occurred throughout the request';
      })
      .addMatcher(isFulfilled(fetchPosts), (state, { payload }) => {
        state.entities = payload;
        state.status = 'idle';
      });
  },
});

export const { reset } = homeSlice.actions;
export default homeSlice;
