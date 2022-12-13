import React, { memo, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TopArtist.module.scss';
import { Button, RowSingleSong } from '~/components';

const cx = classNames.bind(styles);

function TopArtist({ artist, topAlbum, topTracks }) {
  const [seeMore, setSeeMore] = useState(false);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('popular-container')}>
        <h2 className={cx('title')}>Popular</h2>
        <div className={cx('popular-content')}>
          {seeMore
            ? topTracks?.map((song, index) => (
                <RowSingleSong
                  key={index}
                  index={index}
                  song={song}
                  tracks={topTracks}
                />
              ))
            : topTracks
                ?.slice(0, 6)
                .map((song, index) => (
                  <RowSingleSong
                    key={index}
                    index={index}
                    song={song}
                    tracks={topTracks}
                  />
                ))}
        </div>

        {seeMore ? (
          <Button
            pureText
            className={cx('see-more')}
            onClick={() => setSeeMore(!seeMore)}
          >
            see less
          </Button>
        ) : (
          <Button
            pureText
            className={cx('see-more')}
            onClick={() => setSeeMore(!seeMore)}
          >
            see more
          </Button>
        )}
      </div>

      <div className={cx('user-info')}>
        <h2 className={cx('title')}>Artist pick</h2>

        <div className={cx('heading-section')}>
          <div className={cx('image-container')}>
            <img
              src={topAlbum?.images[0]?.url}
              alt="avatar"
              className={cx('image')}
              loading="lazy"
            />
          </div>

          <div className={cx('btn-artist')}>
            <div className={cx('sub_heading')}>
              <div className={cx('sub_heading--img')}>
                <img
                  src={artist?.images[0]?.url}
                  alt="avatar"
                  className={cx('image')}
                  loading="lazy"
                />
              </div>
              <div className={cx('menu-content')}>
                <span>Get In Touch!</span>
              </div>
            </div>

            <Button pureText to={'/'} className={cx('topAlbum')}>
              {topAlbum?.name}
            </Button>
            <span className={cx('topAlbum-type')}>Album</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(TopArtist);
