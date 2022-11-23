import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import playerApi from '~/api/playerApi';

import {
  selectCurrentSong,
  addCurrentPlayingSong,
} from '~/store/reducers/player';

function useCurrentSong() {
  const dispatch = useDispatch();
  const currentSong = useSelector(selectCurrentSong);
  const [currentPlayingSong, setCurrentPlayingSong] = useState(null);

  useEffect(() => {
    if (Object.keys(currentSong).length === 0) {
      playerApi
        .getCurrentPlayingTrack()
        .then((response) => {
          if (response.status === 204 || response.status > 400) {
            return false;
          }

          dispatch(addCurrentPlayingSong(response));
          setCurrentPlayingSong(response);
        })
        .catch((error) => console.log(error));
    }

    setCurrentPlayingSong(currentSong);

    return () => {};
  }, [currentSong, dispatch]);

  return currentPlayingSong;
}

export default useCurrentSong;
