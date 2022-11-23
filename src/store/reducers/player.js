import { createSlice } from '@reduxjs/toolkit';

const initialState = { currentSong: {} };

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addCurrentPlayingSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

export const selectCurrentSong = (state) => state.player.currentSong;
export const { addCurrentPlayingSong } = playerSlice.actions;

export default playerSlice.reducer;
