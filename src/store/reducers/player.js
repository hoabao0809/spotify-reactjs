import { createSlice } from '@reduxjs/toolkit';

const playerInitialState = { currentTracks: [] };
const isPlayingTrackInitState = { isPlaying: false, idPlayingTrack: null, indexPlayingTrack: 0, idPlayingPlaylist: null };

const playerSlice = createSlice({
  name: 'player',
  initialState: playerInitialState,
  reducers: {
    addTracksToState: (state, action) => {
      state.currentTracks = action.payload;
    },
    addPlaylist: (state, action) => {
      state.currentTracks = action.payload;
    },
    addTrack: (state, action) => {
      state.currentTracks = [...state.currentTracks, action.payload];
    },
  },
});

const isPlayingTrackSlice = createSlice({
  name: 'isPlayingTrack',
  initialState: isPlayingTrackInitState,
  reducers: {
    setIsPlaying: (state, action) => {
      return { state, ...action.payload };
    },
  },
});

export const selectCurrentTracks = (state) => state.player.currentTracks;
export const selectIsPlayingTrack = (state) => state.isPlayingTrack;

export const { addTracksToState, addPlaylist, addTrack } = playerSlice.actions;
export const { setIsPlaying } = isPlayingTrackSlice.actions;

export const playerSliceReducer = playerSlice.reducer;
export const isPlayingTrackSliceReducer = isPlayingTrackSlice.reducer;
