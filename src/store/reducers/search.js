import { createSlice } from '@reduxjs/toolkit';

const searchStateInitState = { keyword: '', type: null };
const searchResultState = {};

const searchStateSlice = createSlice({
  name: 'searchState',
  initialState: searchStateInitState,
  reducers: {
    addKeyword(state, action) {
      state.keyword = action.payload;
    },
    addType(state, action) {
      state.type = action.payload;
    },
  },
});

const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState: searchResultState,
  reducers: {
    addSearchResult(state, action) {
      return action.payload;
    },
  },
});

export const selectSearchState = (state) => state.searchState;
export const selectSearchResult = (state) => state.searchResult;

export const { addKeyword, addType } =
  searchStateSlice.actions;
export const { addSearchResult } = searchResultSlice.actions;

export const searchStateReducer = searchStateSlice.reducer;
export const searchResultReducer = searchResultSlice.reducer;
