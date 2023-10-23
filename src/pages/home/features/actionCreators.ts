import { createAsyncThunk } from '@reduxjs/toolkit';
import getMessages from 'mocks/getMessages';

export const fetchPosts = createAsyncThunk('counter/test', async () => {
  const response = await getMessages('hello', 10);
  return response;
});
