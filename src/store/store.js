import { configureStore } from '@reduxjs/toolkit';
import { topUserItemsReducer, playlistsReducer } from './reducers/index';

export const store = configureStore({
  reducer: {
    topUserItems: topUserItemsReducer,
    playlists: playlistsReducer,
  },
});
