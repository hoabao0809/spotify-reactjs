import playlistsApi from '~/api/playlists';

import { addPlaylists } from '~/store/reducers/playlists';

export const fetchPlaylists = () => {
  return (dispatch) => {
    playlistsApi
      .getPlaylist()
      .then((response) => {
        if (!response) {
          throw new Error('Could not fetch data');
        }

        dispatch(addPlaylists(response.items));
      })
      .catch((err) => console.log(err));
  };
};
