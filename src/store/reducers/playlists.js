import { createSlice } from '@reduxjs/toolkit';

const initialState = { playlists: [], playlist: {} };

const playlistsSlice = createSlice({
  name: 'playlists',
  initialState,
  reducers: {
    addPlaylists(state, action) {
      state.playlists = action.payload;
    },
    addPlaylist(state, action) {
      state.playlist = action.payload;
    },
  },
});

export const selectPlaylists = (state) => state.playlists;
export const { addPlaylists, addPlaylist } = playlistsSlice.actions;

export default playlistsSlice.reducer;
