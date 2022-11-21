import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    addPlaylists(state, action) {
      return action.payload;
    },
  },
});

export const selectPlaylists = (state) => state.playlists;
export const { addPlaylists } = playlistsSlice.actions;

export default playlistsSlice.reducer;
