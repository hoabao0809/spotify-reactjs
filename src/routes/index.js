// Layouts
import { CoverLayout } from '~/layouts';

import {
  YourLibrary,
  Home,
  Login,
  UserPlaylist,
  LikedSongs,
  CreatePlaylist,
  Profile,
  Artist,
  SearchBrowse,
  SearchOutput,
} from '~/pages';

export const publicRoutes = [
  { path: '/', component: Home, exact: true },
  { path: '/search/:keyword', component: SearchOutput, exact: true },
  { path: '/search/:keyword/:type', component: SearchOutput, exact: true },
  { path: '/search/*', component: SearchBrowse, exact: true },
  // { path: '/search/:keyword/:type', component: SearchOutput, exact: true },

  { path: '/collection/playlists', component: YourLibrary, exact: false },
  // { path: '/playlist', component: CreatePlaylist, exact: true },
  { path: '/playlist/:idPlaylist', component: UserPlaylist, exact: false },
  { path: '/artist/:idArtist', component: Artist, exact: false },
  { path: '/createPlaylist', component: CreatePlaylist, exact: false },
  { path: '/collection/tracks', component: LikedSongs, exact: false },

  { path: '/login', component: Login, layout: CoverLayout, exact: false },
  { path: '/profile', component: Profile, exact: true },
];
