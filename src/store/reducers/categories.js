import { createSlice } from '@reduxjs/toolkit';

const categoriesInitState = [];

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: categoriesInitState,
  reducers: {
    addCategories: (state, action) => {
      return action.payload;
    },
  },
});

export const selectCategories = (state) => state.categories;
export const { addCategories } = categoriesSlice.actions;

export default categoriesSlice.reducer;
