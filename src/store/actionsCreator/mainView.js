import { playlistApi } from '~/api';

import { addPlaylist } from '~/store/reducers/playlists';

export const fetchPlaylist = (idPlaylist) => {
  console.log(idPlaylist)
  return (dispatch) => {
    playlistApi
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
