import { configureStore } from '@reduxjs/toolkit';
import {
  topUserItemsReducer,
  playlistsReducer,
  playerSliceReducer,
  isPlayingTrackSliceReducer,
  categoriesReducer,
  searchStateReducer,
  searchResultReducer,
} from './reducers/index';

export const store = configureStore({
  reducer: {
    topUserItems: topUserItemsReducer,
    playlists: playlistsReducer,
    player: playerSliceReducer,
    isPlayingTrack: isPlayingTrackSliceReducer,
    categories: categoriesReducer,
    searchState: searchStateReducer,
    searchResult: searchResultReducer,
  },
});
