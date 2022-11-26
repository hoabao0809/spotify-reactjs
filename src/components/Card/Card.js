import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { truncate } from '~/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addTracksToStore } from '~/store/actionsCreator/player';
import {
  selectIsPlayingTrack,
  setIsPlaying,
  selectCurrentTracks,
} from '~/store/reducers/player';

const cx = classNames.bind(styles);

function Card({
  item,
  roundImg,
  squareImg,
  horizontal,
  customAlbumSearch,
  customPlaylistSearch,
  customShowSearch,
  className,
  to,
  ...passProps
}) {
  const dispatch = useDispatch();
  const { isPlaying, idPlayingTrack, indexPlayingTrack, idPlayingPlaylist } =
    useSelector(selectIsPlayingTrack);
  const currentTracks = useSelector(selectCurrentTracks);

  const classes = cx('wrapper', {
    [className]: className,
    roundImg,
    squareImg,
    horizontal,
    customAlbumSearch,
    customPlaylistSearch,
    customShowSearch,
  });
  const fallbackImg =
    'https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2';
  const releaseDate = new Date(item?.release_date);

  const handlePlayPlaylist = (item, playingMode) => {
    const { id, type } = item;

    if (item) {
      if (playingMode && indexPlayingTrack === 0) {
        dispatch(addTracksToStore(id, type));

        dispatch(
          setIsPlaying({
            isPlaying: true,
            idPlayingTrack: currentTracks && currentTracks[0].id,
            indexPlayingTrack: 0,
            idPlayingPlaylist: id,
          })
        );
      } else if (playingMode && indexPlayingTrack > 0) {
        dispatch(
          setIsPlaying({
            isPlaying: true,
            idPlayingTrack,
            indexPlayingTrack,
            idPlayingPlaylist: id,
          })
        );
      } else {
        dispatch(
          setIsPlaying({
            isPlaying: false,
            idPlayingTrack,
            indexPlayingTrack,
            idPlayingPlaylist: id,
          })
        );
      }
    }
  };

  return (
    <Link className={classes} {...passProps}>
      <div className={cx('container')}>
        <div className={cx('image-container')}>
          <img
            className={cx('image')}
            src={
              (item?.images && item?.images[0]?.url) ||
              (item?.album && item?.album?.images[0]?.url) ||
              fallbackImg
            }
            alt=""
          />

          {isPlaying && item?.id === idPlayingPlaylist ? (
            <Button
              play
              className={cx('play-btn')}
              style={isPlaying && { bottom: '25px', opacity: 1 }}
              onClick={() => handlePlayPlaylist(item, false)}
            >
              <FontAwesomeIcon className={cx('play-icon')} icon={faPause} />
            </Button>
          ) : (
            <Button
              play
              className={cx('play-btn')}
              onClick={() => handlePlayPlaylist(item, true)}
            >
              <FontAwesomeIcon className={cx('play-icon')} icon={faPlay} />
            </Button>
          )}
        </div>
        <div className={cx('content')}>
          <h5 className={cx('name')}>
            {item?.name && truncate(item?.name, 15)}
          </h5>
          <span className={cx('type')}>
            {item?.type &&
              item?.type.charAt(0).toUpperCase() + item?.type.slice(1)}
          </span>
          <span className={cx('owner')}>
            By {item?.owner && item?.owner?.display_name}
          </span>
          <span className={cx('release')}>
            {item?.release_date && releaseDate.getFullYear()}
          </span>
          <span className={cx('artist')}>
            {item?.artists && item?.artists[0]?.name}
          </span>
          <span className={cx('publisher')}>{item?.publisher}</span>
        </div>
      </div>
    </Link>
  );
}

export default memo(Card);
