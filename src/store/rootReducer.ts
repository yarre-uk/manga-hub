import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from 'features/auth';

import { homeSlice } from '@/pages/home/features/';

export const rootReducer = combineReducers({
  [homeSlice.name]: homeSlice.reducer,
  [authSlice.name]: authSlice.reducer,
});
