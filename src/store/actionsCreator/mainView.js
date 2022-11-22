import playlistsApi from '~/api/playlists';

import { addPlaylist } from '~/store/reducers/playlists';

export const fetchPlaylist = (idPlaylist) => {
  return (dispatch) => {
    playlistsApi
      .getPlaylist(idPlaylist)
      .then((response) => {
        if (!response) {
          throw new Error('Could not fetch data');
        }
        dispatch(addPlaylist(response));
      })
      .catch((err) => console.log(err));
  };
};
