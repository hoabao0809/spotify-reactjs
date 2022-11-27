import { createSlice } from '@reduxjs/toolkit';

const playerInitialState = { currentTracks: [] };
const isPlayingTrackInitState = {
  isPlaying: false,
  idPlayingTrack: null,
  indexPlayingTrack: 0,
  idPlayingPlaylist: null,
};
const configInitState = { isRepeat: false, isShuffle: false };

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
      return { ...state, ...action.payload };
    },
  },
});

const playerConfigSlice = createSlice({
  name: 'config',
  initialState: configInitState,
  reducers: {
    alterConfig: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const selectCurrentTracks = (state) => state.player.currentTracks;
export const selectIsPlayingTrack = (state) => state.isPlayingTrack;
export const selectPlayerConfig = (state) => state.playerConfig;

export const { addTracksToState, addPlaylist, addTrack } = playerSlice.actions;
export const { setIsPlaying } = isPlayingTrackSlice.actions;
export const { alterConfig } = playerConfigSlice.actions;

export const playerReducer = playerSlice.reducer;
export const isPlayingTrackReducer = isPlayingTrackSlice.reducer;
export const playerConfigReducer = playerConfigSlice.reducer;
