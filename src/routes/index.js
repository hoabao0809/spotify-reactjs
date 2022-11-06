// Layouts
import { HeaderOnly } from '~/components/Layout';

import YourLibrary from '~/pages/YourLibrary';
import Search from '~/pages/Search';
import Home from '~/pages/Home';
import Login from '~/pages/Login';

export const publicRoutes = [
  { path: '/', component: Home, exact: true },
  { path: '/search', component: Search, exact: false },
  { path: '/collection/playlists', component: YourLibrary, exact: false },
  { path: '/login', component: Login, exact: false, layout: HeaderOnly },
];
