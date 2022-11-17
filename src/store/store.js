import { configureStore } from '@reduxjs/toolkit';
import {topUserItemsReducer} from './reducers/index';

export const store = configureStore({
  reducer: {
    topUserItems: topUserItemsReducer,
  },
});
