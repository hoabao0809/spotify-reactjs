// Layouts
import { HeaderOnly } from '~/layouts';

import YourLibrary from '~/pages/YourLibrary';
// import Search from '~/pages/Search';
import SearchResult from '~/pages/SearchResult';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import CreatePlaylist from '~/pages/CreatePlaylist';
import LikedSongs from '~/pages/LikedSongs';

export const publicRoutes = [
  { path: '/', component: Home, exact: true },
  // { path: '/search', component: Search, exact: true },
  { path: '/search/:keyword', component: SearchResult, exact:true },
  { path: '/collection/playlists', component: YourLibrary, exact: false },
  { path: '/login', component: Login, layout: HeaderOnly, exact: false },

  { path: '/playlist', component: CreatePlaylist, exact: false },
  { path: '/collection/tracks', component: LikedSongs, exact: false },
];
