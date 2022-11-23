import playerApi from '~/api/playerApi';
import { addCurrentPlayingSong } from '~/store/reducers/player';

export const addSong = (idSong) => {
  return (dispatch) => {
    playerApi
      .getTrack(idSong)
      .then((response) => {
        if (response.status === 204 || response.status > 400) {
          return false;
        }

        dispatch(addCurrentPlayingSong(response));
      })
      .catch((error) => console.log(error));
  };
};
