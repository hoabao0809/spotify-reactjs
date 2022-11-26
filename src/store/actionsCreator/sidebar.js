import { playlistApi } from '~/api';

import { addPlaylists } from '~/store/reducers/playlists';

export const fetchPlaylists = () => {
  return (dispatch) => {
    playlistApi
      .getUserPlaylists()
      .then((response) => {
        if (!response) {
          throw new Error('Could not fetch data');
        }

        dispatch(addPlaylists(response.items));
      })
      .catch((err) => console.log(err));
  };
};
