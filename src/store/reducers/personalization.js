import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const topUserItemsSlice = createSlice({
  name: 'topUserItems',
  initialState,
  reducers: {
    addItems(state, action) {
      return action.payload.items;
    },
  },
});

export const selectTopUserItems = (state) => state.topUserItems;
export const { addItems } = topUserItemsSlice.actions;

export default topUserItemsSlice.reducer;
