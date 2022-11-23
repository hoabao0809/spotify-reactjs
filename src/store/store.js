import { configureStore } from '@reduxjs/toolkit';
import {
  topUserItemsReducer,
  playlistsReducer,
  playerSliceReducer,
  isPlayingTrackSliceReducer,
} from './reducers/index';

export const store = configureStore({
  reducer: {
    topUserItems: topUserItemsReducer,
    playlists: playlistsReducer,
    player: playerSliceReducer,
    isPlayingTrack: isPlayingTrackSliceReducer,
  },
});
