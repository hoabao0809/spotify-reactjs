import React, { memo } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { truncate } from '~/utils';

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

  console.log(item);
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

          <Button className={cx('play-btn')} play>
            <FontAwesomeIcon className={cx('play-icon')} icon={faPlay} />
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
    </Link>
  );
}

export default memo(Card);
