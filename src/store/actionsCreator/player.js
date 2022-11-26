import {
  playerApi,
  albumApi,
  artistApi,
  playlistApi,
  showApi,
  episodeApi,
} from '~/api';

import { addTracksToState, addTrack } from '~/store/reducers/player';

export const addSong = (idSong) => {
  return (dispatch) => {
    playerApi
      .getTrack(idSong)
      .then((response) => {
        if (response.status === 204 || response.status > 400) {
          return false;
        }

        dispatch(addTracksToState(Array(response)));
      })
      .catch((error) => console.log(error));
  };
};

export const addTracksToStore = (id, type) => {
  return (dispatch) => {
    switch (type) {
      case 'album':
        albumApi
          .getAlbumTracks(id)
          .then((response) => {
            console.log(response);
            if (response.status === 204 || response.status > 400) {
              return false;
            }

            dispatch(addTracksToState(response.items));
          })
          .catch((error) => console.log(error));
        break;

      case 'playlist':
        playlistApi
          .getPlaylistItems(id)
          .then((response) => {
            if (response.status === 204 || response.status > 400) {
              return false;
            }

            const tracks = response.items.reduce((accumulator, currentItem) => {
              return [...accumulator, currentItem.track];
            }, []);

            dispatch(addTracksToState(tracks));
          })
          .catch((error) => console.log(error));
        break;

      case 'artist':
        artistApi
          .getArtistTopTracks(id)
          .then((response) => {
            if (response.status === 204 || response.status > 400) {
              return false;
            }
            dispatch(addTracksToState(response.tracks));
          })
          .catch((error) => console.log(error));
        break;

      case 'show':
        showApi
          .getShowEpisodes(id)
          .then((response) => {
            if (response.status === 204 || response.status > 400) {
              return false;
            }
            dispatch(addTracksToState(response.items));
          })
          .catch((error) => console.log(error));
        break;

      case 'episode':
        episodeApi
          .getEpisodes(id)
          .then((response) => {
            console.log(response);
            if (response.status === 204 || response.status > 400) {
              return false;
            }
            dispatch(addTrack(response));
          })
          .catch((error) => console.log(error));
        break;

      default:
        break;
    }
  };
};
