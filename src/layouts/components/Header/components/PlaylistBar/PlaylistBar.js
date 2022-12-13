import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import {
  addTracksToState,
  selectIsPlayingTrack,
  setIsPlaying,
} from '~/store/reducers/player';

import styles from './PlaylistBar.module.scss';
import { Button } from '~/components';
import { selectPlaylists } from '~/store/reducers/playlists';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function PlaylistBar() {
  const dispatch = useDispatch();
  const playlist = useSelector(selectPlaylists).playlist;
  const { isPlaying, idPlayingTrack, indexPlayingTrack, idPlayingPlaylist } =
    useSelector(selectIsPlayingTrack);

  const handlePlayPlaylist = (playingMode) => {
    if (playlist?.tracks?.items) {
      const tracks = playlist?.tracks?.items?.reduce((prev, next) => {
        return [...prev, next.track];
      }, []);

      if (idPlayingPlaylist !== playlist?.id) {
        dispatch(addTracksToState(tracks));
        dispatch(
          setIsPlaying({
            isPlaying: true,
            idPlayingTrack: playlist?.tracks?.items[0]?.track?.id,
            indexPlayingTrack: 0,
            idPlayingPlaylist: playlist.id,
          })
        );
      } else {
        if (playingMode && indexPlayingTrack === 0) {
          dispatch(addTracksToState(tracks));
          dispatch(
            setIsPlaying({
              isPlaying: true,
              idPlayingTrack: playlist?.tracks?.items[0]?.track?.id,
              indexPlayingTrack: 0,
              idPlayingPlaylist: playlist.id,
            })
          );
        } else if (playingMode && indexPlayingTrack > 0) {
          dispatch(
            setIsPlaying({
              isPlaying: true,
              idPlayingTrack,
              indexPlayingTrack,
              idPlayingPlaylist: playlist.id,
            })
          );
        } else {
          dispatch(
            setIsPlaying({
              isPlaying: false,
              idPlayingTrack,
              indexPlayingTrack,
              idPlayingPlaylist: playlist.id,
            })
          );
        }
      }
    }
  };

  return (
    <div id="playlist_bar" className={cx('wrapper')}>
      {isPlaying && idPlayingPlaylist === playlist?.id ? (
        <Button
          play
          className={cx('play-btn')}
          onClick={() => handlePlayPlaylist(false)}
        >
          <FontAwesomeIcon className={cx('play-icon')} icon={faPause} />
        </Button>
      ) : (
        <Button
          play
          className={cx('play-btn')}
          onClick={() => handlePlayPlaylist(true)}
        >
          <FontAwesomeIcon className={cx('play-icon')} icon={faPlay} />
        </Button>
      )}

      <div className={cx('name')}>
        <span>{playlist?.name}</span>
      </div>
    </div>
  );
}

export default PlaylistBar;
