import { configureStore } from '@reduxjs/toolkit';
import {
  topUserItemsReducer,
  playlistsReducer,
  playerReducer,
  isPlayingTrackReducer,
  categoriesReducer,
  searchStateReducer,
  searchResultReducer,
  playerConfigReducer,
} from './reducers/index';

export const store = configureStore({
  reducer: {
    topUserItems: topUserItemsReducer,
    playlists: playlistsReducer,
    player: playerReducer,
    isPlayingTrack: isPlayingTrackReducer,
    categories: categoriesReducer,
    searchState: searchStateReducer,
    searchResult: searchResultReducer,
    playerConfig: playerConfigReducer,
  },
});
