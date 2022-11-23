import { createSlice } from '@reduxjs/toolkit';

const playerInitialState = { currentSong: {} };
const isPlayingTrackInitState = { isPlaying: false, idPlayingTrack: null };

const playerSlice = createSlice({
  name: 'player',
  initialState: playerInitialState,
  reducers: {
    addCurrentPlayingSong: (state, action) => {
      state.currentSong = action.payload;
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

export const selectCurrentSong = (state) => state.player.currentSong;
export const selectIsPlayingTrack = (state) => state.isPlayingTrack;

export const { addCurrentPlayingSong } = playerSlice.actions;
export const { setIsPlaying } = isPlayingTrackSlice.actions;

export const playerSliceReducer = playerSlice.reducer;
export const isPlayingTrackSliceReducer = isPlayingTrackSlice.reducer;
