import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { AUTH_SLICE_NAME, initialState } from './models';

type TokenPayload = {
  accessToken: string;
  refreshToken: string;
};

const authSlice = createSlice({
  name: AUTH_SLICE_NAME,
  initialState,
  reducers: {
    reset: (state) => {
      state.accessToken = '';
      state.refreshToken = '';
    },
    setTokens: (
      state,
      { payload: { accessToken, refreshToken } }: PayloadAction<TokenPayload>,
    ) => {
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addMatcher(isPending(fetchPosts), (state) => {
  //       state.status = 'pending';
  //       state.error = '';
  //     })
  //     .addMatcher(isRejected(fetchPosts), (state, { error }) => {
  //       state.status = 'pending';
  //       state.error = error.message ?? 'Error occurred throughout the request';
  //     })
  //     .addMatcher(isFulfilled(fetchPosts), (state, { payload }) => {
  //       state.entities = payload;
  //       state.status = 'idle';
  //     });
  // },
});

export const { reset, setTokens } = authSlice.actions;
export default authSlice;
