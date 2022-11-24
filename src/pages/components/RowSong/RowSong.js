import React from 'react';
import styles from './RowSong.module.scss';
import classNames from 'classnames/bind';

import MenuItem from '~/layouts/components/Sidebar/Menu/MenuItem';
import { LikeFooterIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import { faEllipsis, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsPlayingTrack, setIsPlaying } from '~/store/reducers/player';
import { addSong } from '~/store/actionsCreator/player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function RowSong({ index, song, className, ...passProps }) {
  const dispatch = useDispatch();
  const { isPlaying, idPlayingTrack } = useSelector(selectIsPlayingTrack);

  const classes = cx('song-row', {
    [className]: className,
  });

  const handleOnClickSong = (idSong, playingMode) => {
    if (playingMode) {
      dispatch(addSong(idSong));
      dispatch(setIsPlaying({ isPlaying: true, idPlayingTrack: idSong }));
    } else {
      dispatch(setIsPlaying({ isPlaying: false, idPlayingTrack: idSong }));
    }
  };

  return (
    <tr className={classes} tabIndex="0">
      {/* 1st column */}
      <td>
        <span className={cx('song-index')}>
          {isPlaying && idPlayingTrack === song?.track?.id ? (
            <img
              style={{ width: '14px', height: '14px' }}
              src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f93a2ef4.gif"
              alt=""
            />
          ) : (
            index + 1
          )}
        </span>

        {isPlaying && idPlayingTrack === song?.track?.id ? (
          <Tippy content={'Pause'} delay={200}>
            <span
              className={cx('play-btn')}
              onClick={() => handleOnClickSong(song?.track?.id, false)}
            >
              <FontAwesomeIcon icon={faPause} />
            </span>
          </Tippy>
        ) : (
          <Tippy
            content={`Play ${song?.track?.name}. by ${song?.track?.artists[0]?.name}`}
            delay={200}
          >
            <span
              className={cx('play-btn')}
              onClick={() => handleOnClickSong(song?.track?.id, true)}
            >
              <FontAwesomeIcon icon={faPlay} />
            </span>
          </Tippy>
        )}
      </td>

      {/* 2nd column */}
      <td className={cx('detail-column')}>
        <div className={cx('songImg-container')}>
          <img
            className={cx('song-img')}
            src={song?.track?.album?.images[0]?.url}
            alt={song?.track?.name}
            loading="lazy"
          />
        </div>
        <div className={cx('songName-container')}>
          <MenuItem
            className={cx('song-name')}
            title={song?.track?.name}
            to="/"
          />
          <MenuItem
            className={cx('artist')}
            title={song?.track?.artists[0]?.name}
            to="/"
          />
        </div>
      </td>

      {/* 3th column */}
      <td>
        <MenuItem
          className={cx('album-name')}
          title={song?.track?.album?.name}
          to="/"
        />
      </td>

      {/* 4th column */}
      <td>{new Date(song?.added_at).toDateString()}</td>

      {/* 5th column */}
      <td>
        <Tippy content="Save to Your Library" delay={200}>
          <button className={cx('likeSong-btn')}>
            <LikeFooterIcon width="16px" height="16px" />
          </button>
        </Tippy>
      </td>

      {/* 6th column */}
      <td className={cx('duration')}>
        <div className={cx('duration-container')}>
          {(+song?.track?.duration_ms / 60000).toFixed(2).replace('.', ':')}

          <Tippy
            content={`More options for ${song?.track?.name}. by ${song?.track?.artists[0]?.name}`}
            delay={200}
          >
            <button className={cx('song-option')}>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </Tippy>
        </div>
      </td>
    </tr>
  );
}

export default RowSong;
