import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { selectPlaylists } from '~/store/reducers/playlists';
import { fetchPlaylist } from '~/store/actionsCreator/mainView';
import { MainViewWrapper, Playlist } from '~/pages/components';
import { getAverageRGB } from '~/utils';
import Button from '~/components/Button';

import styles from './UserPlaylist.module.scss';
import { LikeFullBgIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faPlay } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);
const $ = document.querySelector.bind(document);

function UserPlaylist() {
  const { idPlaylist } = useParams('idPlaylist');
  const dispatch = useDispatch();
  const playlist = useSelector(selectPlaylists).playlist;
  const playlistName = useRef();
  const [dominantColor, setDominantColor] = useState('transparent');

  useEffect(() => {
    dispatch(fetchPlaylist(idPlaylist));

    return () => {};
  }, [idPlaylist, dispatch]);

  // Check if image loaded and set linear bgColor
  useEffect(() => {
    const imgEle = $('#playlist-image');
    const topContainerEle = $('#top-container');

    if (imgEle && playlist?.name) {
      // Change title font size depending on title's length
      if (playlist?.name?.length < 40) {
        playlistName.current.style.fontSize = '96px';
        playlistName.current.style.lineHeight = '96px';
      } else {
        playlistName.current.style.fontSize = '30px';
        playlistName.current.style.lineHeight = '32px';
      }

      //check imgEle is not null because 1st time idPlaylist changed return null
      imgEle.onload = function () {
        const dominantImgColor = getAverageRGB(imgEle);
        const { b, g, r } = dominantImgColor;
        const bgColor = `rgb(${r},${g},${b})`;

        $('#linear-gradient').style.backgroundColor = bgColor;
        $('#linear-gradient').style.backgroundImage =
          'linear-gradient(rgba(0, 0, 0, 0.3) 0, var(--background-base) 100%), var(--background-noise)';
        $('#linear-gradient').style.height = '90%';
        topContainerEle.style.background = `rgb(${r},${g},${b}),0.28`;
        setDominantColor(bgColor);
      };
    }

    return () => {
      $('#linear-gradient').style.height = '332px';
    };
  }, [idPlaylist, playlist?.name]);

  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div id="top-container" className={cx('top-container')}>
        <div className={cx('top-content')}>
          <div className={cx('playlist-img')}>
            {playlist?.images?.length > 0 ? (
              <img
                id="playlist-image"
                className={cx('main-image')}
                src={
                  playlist?.images[0]?.url ||
                  'https://media.cnn.com/api/v1/images/stellar/prod/og-ckjrh2mu8b2a-image.jpg?c=1x1&q=h_480,w_480,c_fill'
                }
                alt=""
                loading="lazy"
              />
            ) : (
              <></>
            )}
          </div>
          <div className={cx('playlist-infos')}>
            <h2 className={cx('title')}>PLAYLIST</h2>
            <span className={cx('name')}>
              <h1 ref={playlistName}>{playlist?.name}</h1>
            </span>
            <h2 className={cx('description')}>
              <div>{playlist?.description}</div>
            </h2>
            <div className={cx('author')}>
              <span>
                <Link>{playlist?.owner?.display_name}</Link>
              </span>
              <span>{playlist?.followers?.total} likes</span>
              <span>{playlist?.tracks?.total} songs,</span>
              <span>about {(180 * playlist?.tracks?.total) / 3600} hr</span>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('songs-container')}>
        <div className={cx('play-section')}>
          <Button play className={cx('play-btn')}>
            <FontAwesomeIcon className={cx('play-icon')} icon={faPlay} />
          </Button>

          <Tippy content="Remove from Your Library" delay={200}>
            <button className={cx('like-btn')}>
              <LikeFullBgIcon width="32px" height="32px" />
            </button>
          </Tippy>

          <Tippy content={`More options for ${playlist?.name}`} delay={200}>
            <button className={cx('options')}>
              <FontAwesomeIcon icon={faEllipsis} />
            </button>
          </Tippy>
        </div>

        <div className={cx('songs-section')}>
          <Playlist playlist={playlist} dominantColor={dominantColor} />
        </div>

        <div className={cx('footer')}></div>
      </div>
    </MainViewWrapper>
  );
}

export default UserPlaylist;
