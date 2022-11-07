// Layouts
import { HeaderOnly } from '~/layouts';

import YourLibrary from '~/pages/YourLibrary';
import Search from '~/pages/Search';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import CreatePlaylist from '~/pages/CreatePlaylist';
import LikedSongs from '~/pages/LikedSongs';

export const publicRoutes = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/collection/playlists', component: YourLibrary },
  { path: '/login', component: Login, layout: HeaderOnly },

  { path: '/playlist', component: CreatePlaylist },
  { path: '/collection/tracks', component: LikedSongs },
];
