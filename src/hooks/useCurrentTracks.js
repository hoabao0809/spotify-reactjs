import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { playerApi } from '~/api';

import { selectCurrentTracks, addTrack } from '~/store/reducers/player';

function useCurrentTracks() {
  const dispatch = useDispatch();
  const currentTracks = useSelector(selectCurrentTracks);
  const [currentPlayingTracks, setCurrentPlayingTracks] = useState(null);

  useEffect(() => {
    if (currentTracks?.length === 0) {
      playerApi
        .getCurrentPlayingTrack()
        .then((response) => {
          if (response.status === 204 || response.status > 400) {
            return false;
          }
          dispatch(addTrack(response.item));
          setCurrentPlayingTracks(response.item);
        })
        .catch((error) => console.log(error));
    }

    setCurrentPlayingTracks(currentTracks);

    return () => {};
  }, [currentTracks, dispatch]);

  return currentPlayingTracks;
}

export default useCurrentTracks;
