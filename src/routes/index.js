// Layouts
import { CoverLayout } from '~/layouts';

import YourLibrary from '~/pages/YourLibrary';
import SearchResult from '~/pages/SearchResult';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import UserPlaylist from '~/pages/UserPlaylist';
import LikedSongs from '~/pages/LikedSongs';

export const publicRoutes = [
  { path: '/', component: Home, exact: true },
  { path: '/search/:keyword', component: SearchResult, exact: true },
  { path: '/collection/playlists', component: YourLibrary, exact: false },
  // { path: '/playlist', component: CreatePlaylist, exact: true },
  { path: '/playlist/:idPlaylist', component: UserPlaylist, exact: false },
  { path: '/collection/tracks', component: LikedSongs, exact: false },

  { path: '/login', component: Login, layout: CoverLayout, exact: false },
];
