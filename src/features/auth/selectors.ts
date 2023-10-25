import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '@/store';

const selectSelf = (state: RootState) => state;
export const selectCounter = createSelector(selectSelf, (state) => state.home);
