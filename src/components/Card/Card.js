import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.scss';
import { Button } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { truncate } from '~/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addTracksToStore } from '~/store/actionsCreator/player';
import { selectIsPlayingTrack, setIsPlaying } from '~/store/reducers/player';

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
  const navigate = useNavigate();
  const { isPlaying, idPlayingTrack, indexPlayingTrack, idPlayingPlaylist } =
    useSelector(selectIsPlayingTrack);

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
      if (playingMode) {
        dispatch(
          addTracksToStore({ id, type }, (tracks) => {
            dispatch(
              setIsPlaying({
                isPlaying: true,
                idPlayingTrack: tracks && tracks[0].id,
                indexPlayingTrack: 0,
                idPlayingPlaylist: id,
              })
            );
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

  const handleOnClick = (item) => {
    if (!item) return;
    const { id, type } = item;
    navigate(`/${type}/${id}`);
  };

  return (
    <div className={classes} {...passProps} onClick={() => handleOnClick(item)}>
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
            loading="lazy"
          />

          <Button
            play
            className={cx('play-btn', {
              'playBtn-clicked': isPlaying && item?.id === idPlayingPlaylist,
            })}
            onClick={() =>
              handlePlayPlaylist(
                item,
                isPlaying && item?.id === idPlayingPlaylist ? false : true
              )
            }
          >
            <FontAwesomeIcon
              className={cx('play-icon')}
              icon={
                isPlaying && item?.id === idPlayingPlaylist ? faPause : faPlay
              }
            />
          </Button>
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
    </div>
  );
}

export default memo(Card);
