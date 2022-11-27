import React from 'react';
import styles from './RowSingleSong.module.scss';
import classNames from 'classnames/bind';

import MenuItem from '~/layouts/components/Sidebar/Menu/MenuItem';
import { LikeFooterIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import { faEllipsis, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectIsPlayingTrack,
  setIsPlaying,
  addTracksToState,
} from '~/store/reducers/player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function RowSingleSong({ index, song, tracks, className, ...passProps }) {
  const dispatch = useDispatch();
  const { isPlaying, idPlayingTrack } = useSelector(selectIsPlayingTrack);

  const classes = cx('song-row', {
    [className]: className,
  });

  const handleOnClickSong = (idSong, playingMode, index) => {
    if (playingMode) {
      dispatch(addTracksToState(tracks));

      dispatch(
        setIsPlaying({
          isPlaying: true,
          idPlayingTrack: idSong,
          indexPlayingTrack: index,
        })
      );
    } else {
      dispatch(
        setIsPlaying({
          isPlaying: false,
          idPlayingTrack: idSong,
          indexPlayingTrack: index,
        })
      );
    }
  };

  return (
    <div className={classes} tabIndex="0">
      <div className={cx('detail-column')}>
        <div className={cx('songImg-container')}>
          <img
            className={cx('song-img')}
            src={song?.album?.images[0]?.url}
            alt={song?.name}
            loading="lazy"
          />
          {isPlaying && idPlayingTrack === song?.id ? (
            <Tippy content={'Pause'} delay={200}>
              <div className={cx('play-container')}>
                <span
                  className={cx('play-btn')}
                  onClick={() => handleOnClickSong(song?.id, false, index)}
                >
                  <FontAwesomeIcon icon={faPause} />
                </span>
              </div>
            </Tippy>
          ) : (
            <Tippy
              content={`Play ${song?.name}. by ${song?.artists[0]?.name}`}
              delay={200}
            >
              <div className={cx('play-container')}>
                <span
                  className={cx('play-btn')}
                  onClick={() => handleOnClickSong(song?.id, true, index)}
                >
                  <FontAwesomeIcon icon={faPlay} />
                </span>
              </div>
            </Tippy>
          )}
        </div>
        <div className={cx('songName-container')}>
          <MenuItem className={cx('song-name')} title={song?.name} to="/" />
          <MenuItem
            className={cx('artist')}
            title={song?.artists[0]?.name}
            to="/"
          />
        </div>
      </div>

      <div className={cx('right-section')}>
        <Tippy content="Save to Your Library" delay={200}>
          <button className={cx('likeSong-btn')}>
            <LikeFooterIcon width="16px" height="16px" />
          </button>
        </Tippy>

        <div className={cx('duration')}>
          <div className={cx('duration-container')}>
            {(+song?.duration_ms / 60000).toFixed(2).replace('.', ':')}

            <Tippy
              content={`More options for ${song?.name}. by ${song?.artists[0]?.name}`}
              delay={200}
            >
              <button className={cx('song-option')}>
                <FontAwesomeIcon icon={faEllipsis} />
              </button>
            </Tippy>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RowSingleSong;
