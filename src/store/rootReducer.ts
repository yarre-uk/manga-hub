import { combineReducers } from '@reduxjs/toolkit';

import { homeSlice } from '@/pages/home/features/';

export const rootReducer = combineReducers({
  [homeSlice.name]: homeSlice.reducer,
});
