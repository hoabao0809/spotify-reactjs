import { configureStore } from '@reduxjs/toolkit';
import {
  topUserItemsReducer,
  playlistsReducer,
  playerSliceReducer,
  isPlayingTrackSliceReducer,
  categoriesReducer,
} from './reducers/index';

export const store = configureStore({
  reducer: {
    topUserItems: topUserItemsReducer,
    playlists: playlistsReducer,
    player: playerSliceReducer,
    isPlayingTrack: isPlayingTrackSliceReducer,
    categories: categoriesReducer,
  },
});
