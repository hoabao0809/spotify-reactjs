import React, { useEffect, useState } from 'react';
import styles from './Artist.module.scss';
import classNames from 'classnames/bind';
import {
  MainViewWrapper,
  EndingSeparation,
  PlayBar,
  TopArtist,
  Discography,
} from '~/pages/_components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFullDetailArtist } from '~/store/actionsCreator/artist';
import { selectArtist, addArtistInfos } from '~/store/reducers/artist';
import { CategoryWrapper, RowSixSongs } from '~/components';
import { formatCommaNumber } from '~/utils';

const cx = classNames.bind(styles);

function Artist() {
  const dispatch = useDispatch();
  const { artist, albums, relatedArtists, topTracks } =
    useSelector(selectArtist);
  const { idArtist } = useParams();
  const randomNumber = Math.floor(Math.random() * topTracks?.length);

  useEffect(() => {
    dispatch(fetchFullDetailArtist(idArtist));

    return () => {
      dispatch(
        addArtistInfos({
          artist: null,
          albums: null,
          relatedArtists: null,
          topTracks: null,
        })
      );
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idArtist]);

  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div className={cx('top-container')}>
        <div
          className={cx('cover-img')}
          style={{ backgroundImage: `url(${albums?.items[0]?.images[0].url})` }}
        >
          <div className={cx('top-content')}>
            <div className={cx('infos')}>
              <div className={cx('verified-parent')}>
                <img
                  src="https://uploads-ssl.webflow.com/6156d79b685c2b652cd52eb9/61582aa077e8d924705c0bfa_verified-symbol.svg"
                  loading="lazy"
                  alt=""
                  className={cx('verified-symbol')}
                />
                <h1 className={cx('heading-2')}>Verified</h1>
              </div>
              <div className={cx('name-heading')}>
                <h1>{artist?.name}</h1>
              </div>
              <div className={cx('heading-title')}>
                <span className={cx('job-title')}>
                  {artist && formatCommaNumber(artist?.followers.total)}{' '}
                  followers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className={cx('artist-container')}>
        {/* PlayBar */}
        <PlayBar />
        {/* TopArtist */}
        <TopArtist
          artist={artist}
          topAlbum={albums?.items[0]}
          topTracks={topTracks}
        />
        {/* Discography */}
        <Discography albums={albums?.items} />
        {/* Fans also like */}
        <CategoryWrapper title="Fans also like">
          <RowSixSongs items={relatedArtists?.slice(0, 6)} roundImg />
        </CategoryWrapper>

        <CategoryWrapper title="About">
          <div className={cx('about-container')}>
            <button
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%), url(${
                  topTracks && topTracks[randomNumber].album?.images[0].url
                })`,
              }}
              className={cx('about-img')}
            >
              <div className={cx('about-content')}>
                <span className={cx('about-followers')}>
                  {artist && formatCommaNumber(artist?.followers.total)}{' '}
                  followers
                </span>
                <span className={cx('about-name')}>I'm {artist?.name}.</span>
              </div>
            </button>
          </div>
        </CategoryWrapper>

        <EndingSeparation />
      </section>
    </MainViewWrapper>
  );
}

export default Artist;
