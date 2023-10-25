import { createAsyncThunk } from '@reduxjs/toolkit';
import getMessages from 'mocks/getMessages';

import { AUTH_SLICE_NAME } from './models';

export const signIn = createAsyncThunk(
  `${AUTH_SLICE_NAME}/signIn`,
  async () => {
    // TODO sign in logic

    const response = await getMessages('hello', 10);
    return response;
  },
);
