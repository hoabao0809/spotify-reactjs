import { SearchAll, SearchAlbum } from '~/pages/Search/components/index';

const searchTypes = {
  all: {
    name: 'All',
    type: null,
    component: SearchAll,
    to: ''
  },
  album: {
    name: 'Album',
    type: 'album',
    component: SearchAlbum,
    to: '/album'
  },
  playlist: {
    name: 'Playlist',
    type: 'playlist',
    component: 'SearchPlaylist',
    to: '/playlist'
  },
  track: {
    name: 'Track',
    type: 'track',
    component: 'SearchTrack',
    to: '/track'
  },
  show: {
    name: 'Show',
    type: 'show',
    component: 'SearchShow',
    to: '/show'
  },
  episode: {
    name: 'Episode',
    type: 'episode',
    component: 'SearchEpisode',
    to: '/episode'
  },
  audiobook: {
    name: 'Audiobook',
    type: 'audiobook',
    component: 'SearchAudiobook',
    to: '/audiobook'
  },
};

// const searchTypes = [
//   {
//     path: '/',
//     type: 'all',
//     component: SearchAll,
//   },
//   {
//     name: 'Album',
//     type: 'album',
//     component: SearchAlbum,
//   },
//   {
//     name: 'Playlist',
//     type: 'playlist',
//     component: 'SearchPlaylist',
//   },
//   {
//     name: 'Track',
//     type: 'track',
//     component: 'SearchTrack',
//   },
//   {
//     name: 'Show',
//     type: 'show',
//     component: 'SearchShow',
//   },
//   {
//     name: 'Episode',
//     type: 'episode',
//     component: 'SearchEpisode',
//   },
//   {
//     name: 'Audiobook',
//     type: 'audiobook',
//     component: 'SearchAudiobook',
//   },
// ];

export default searchTypes;
