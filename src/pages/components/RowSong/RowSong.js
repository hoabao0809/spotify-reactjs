import React, { memo } from 'react';
import styles from './RowSong.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import { useDispatch, useSelector } from 'react-redux';
import { faEllipsis, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';

import MenuItem from '~/layouts/components/Sidebar/Menu/MenuItem';
import { LikeFooterIcon } from '~/components/Icons';
import {
  selectIsPlayingTrack,
  addTracksToState,
  setIsPlaying,
} from '~/store/reducers/player';
import { addTracksToStore } from '~/store/actionsCreator/player';

const cx = classNames.bind(styles);

function RowSong({
  playlist_id,
  searchPlaylists,
  index,
  song,
  className,
  isSearchPlaylist,
  isUserPlaylist,
  ...passProps
}) {
  const dispatch = useDispatch();
  const { isPlaying, idPlayingTrack } = useSelector(selectIsPlayingTrack);

  const classes = cx('song-row', {
    [className]: className,
  });

  const handleOnClickSong = (idSong, playingMode, index) => {
    if (playingMode) {
      if (isSearchPlaylist) {
        dispatch(addTracksToState(searchPlaylists));
      } else if (isUserPlaylist) {
        dispatch(
          addTracksToStore(
            { id: playlist_id, type: 'playlist' },
            (tracks) => {}
          )
        );
      }
      dispatch(
        setIsPlaying({
          isPlaying: true,
          idPlayingTrack: idSong,
          indexPlayingTrack: index,
          idPlayingPlaylist: playlist_id,
        })
      );
    } else {
      dispatch(
        setIsPlaying({
          isPlaying: false,
          idPlayingTrack: idSong,
          indexPlayingTrack: index,
          idPlayingPlaylist: playlist_id,
        })
      );
    }
  };

  const renderSong = {
    id: (song?.track && song?.track?.id) || song?.id,
    name: (song?.track && song?.track?.name) || song?.name,
    imgSrc:
      (song?.track && song?.track?.album?.images[0]?.url) ||
      song?.album?.images[0]?.url,
    albumName: (song?.track && song?.track?.album?.name) || song?.album?.name,
    added_at: (song?.track && song?.added_at) || song?.album?.release_date,
    duration_ms: (song?.track && song?.track?.duration_ms) || song?.duration_ms,
    artists:
      (song?.track && song?.track?.artists[0]?.name) ||
      (song?.artists && song?.artists[0]?.name),
  };

  return (
    <tr className={classes} tabIndex="0">
      {/* 1st column */}
      <td>
        <span className={cx('song-index')}>
          {isPlaying && idPlayingTrack === renderSong.id ? (
            <img
              style={{ width: '14px', height: '14px' }}
              src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f93a2ef4.gif"
              alt=""
            />
          ) : (
            index + 1
          )}
        </span>

        {isPlaying && idPlayingTrack === renderSong.id ? (
          <Tippy content={'Pause'} delay={200}>
            <span
              className={cx('play-btn')}
              onClick={() => handleOnClickSong(renderSong.id, false, index)}
            >
              <FontAwesomeIcon icon={faPause} />
            </span>
          </Tippy>
        ) : (
          <Tippy
            content={`Play ${renderSong.name}. by ${renderSong.artists}`}
            delay={200}
          >
            <span
              className={cx('play-btn')}
              onClick={() => handleOnClickSong(renderSong.id, true, index)}
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
            src={renderSong.imgSrc}
            alt={renderSong.name}
            loading="lazy"
          />
        </div>
        <div className={cx('songName-container')}>
          <MenuItem
            className={cx('song-name')}
            title={renderSong.name}
            to="/"
          />
          <MenuItem
            className={cx('artist')}
            title={renderSong.artists}
            to="/"
          />
        </div>
      </td>

      {/* 3th column */}
      <td>
        <MenuItem
          className={cx('album-name')}
          title={renderSong.albumName}
          to="/"
        />
      </td>

      {/* 4th column */}
      <td>{new Date(renderSong.added_at).toDateString()}</td>

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
          {(+renderSong.duration_ms / 60000).toFixed(2).replace('.', ':')}

          <Tippy
            content={`More options for ${renderSong.name}. by ${renderSong.artists}`}
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

export default memo(RowSong);
