import {
  SearchAll,
  SearchTrack,
  SearchComponent,
} from '~/pages/Search';

const searchTypes = {
  all: {
    name: 'All',
    type: null,
    component: SearchAll,
    to: '',
  },
  albums: {
    name: 'Albums',
    type: 'albums',
    component: SearchComponent,
    to: '/albums',
  },
  artists: {
    name: 'Artists',
    type: 'artists',
    component: SearchComponent,
    to: '/artists',
    css: 'roundImg',
  },
  tracks: {
    name: 'Tracks',
    type: 'tracks',
    component: SearchTrack,
    to: '/tracks',
  },
  playlists: {
    name: 'Playlists',
    type: 'playlists',
    component: SearchComponent,
    to: '/playlists',
  },
  shows: {
    name: 'Shows',
    type: 'shows',
    component: SearchComponent,
    to: '/shows',
  },
  episodes: {
    name: 'Episodes',
    type: 'episodes',
    component: SearchComponent,
    to: '/episodes',
  },
  audiobooks: {
    name: 'Audiobooks',
    type: 'audiobooks',
    component: SearchComponent,
    to: '/audiobooks',
  },
};

export default searchTypes;
