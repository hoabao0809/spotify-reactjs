import React, { Fragment } from 'react';
import styles from './PlayBar.module.scss';
import classNames from 'classnames/bind';
import {
  addTracksToState,
  selectIsPlayingTrack,
  setIsPlaying,
} from '~/store/reducers/player';
import { selectPlaylists } from '~/store/reducers/playlists';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { LikeFullBgIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import { Button } from '~/components';

const cx = classNames.bind(styles);

function PlayBar({ topItem }) {
  const { isPlaying, idPlayingTrack, indexPlayingTrack, idPlayingPlaylist } =
    useSelector(selectIsPlayingTrack);
  const playlist = useSelector(selectPlaylists).playlist;

  const handlePlayPlaylist = (playingMode) => {};

  return (
    <div className={cx('play-section')}>
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
      <Tippy content="Remove from Your Library" delay={200}>
        <button className={cx('like-btn')}>
          <LikeFullBgIcon width="32px" height="32px" />
        </button>
      </Tippy>

      <Tippy content={`More options for `} delay={200}>
        <button className={cx('options')}>
          <FontAwesomeIcon icon={faEllipsis} />
        </button>
      </Tippy>
    </div>
  );
}

export default PlayBar;
