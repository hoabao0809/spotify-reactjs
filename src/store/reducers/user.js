import { createSlice } from '@reduxjs/toolkit';

const initialState = { isToggleUser: false };

const isToggleUserSlice = createSlice({
  name: 'isToggleUser',
  initialState,
  reducers: {
    toggleUser(state, action) {
      return action.payload;
    },
  },
});

export const selectIsToggleUser = (state) => state.isToggleUser;
export const { toggleUser } = isToggleUserSlice.actions;

export default isToggleUserSlice.reducer;
