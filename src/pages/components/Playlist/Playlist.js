import styles from './Playlist.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour } from '@fortawesome/free-regular-svg-icons';

import MenuItem from '~/layouts/components/Sidebar/Menu/MenuItem';
import { LikeFooterIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import { faEllipsis, faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { memo, useEffect, useRef, useState } from 'react';
import { addSong } from '~/store/actionsCreator/player';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);
const $ = document.querySelector.bind(document);

function Playlist({ playlist, dominantColor }) {
  const tableHeaderRef = useRef();
  const dispatch = useDispatch();
  const [playingIndex, setPlayingIndex] = useState(null);

  // Handle window scroll set sticky to table header
  useEffect(() => {
    const rightPaneEle = $('#rightPane');
    const headerEle = $('#header');
    rightPaneEle.addEventListener('scroll', () => {
      if (rightPaneEle.scrollTop > 400) {
        tableHeaderRef.current.style.background = 'var(--background-base)';
        headerEle.style.background = dominantColor;
        headerEle.style.backgroundImage =
          'linear-gradient(rgba(0, 0, 0, 0.2) 0,rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.2) 100%)';
      } else {
        tableHeaderRef.current.style.background = 'none';
        headerEle.style.background = 'transparent';
        headerEle.style.backgroundImage = 'none';
      }
    });

    return () => {
      headerEle.style.background = 'transparent';
      headerEle.style.backgroundImage = 'none';
      rightPaneEle.removeEventListener('scroll', () => {});
    };
  }, [dominantColor]);

  const handleOnClickSong = (idSong, index) => {
    setPlayingIndex(index);
    dispatch(addSong(idSong));
  };

  return (
    <table>
      <thead ref={tableHeaderRef} className={cx('table-head')}>
        <tr>
          <th width="2%">#</th>
          <th width="43%">TITLE</th>
          <th width="30%">ALBUM</th>
          <th width="15%">DATE ADDED</th>
          <th width="4%"></th>
          <th width="6%">
            <FontAwesomeIcon icon={faClockFour} />
          </th>
        </tr>
      </thead>
      <tbody>
        {playlist?.tracks?.items?.map((song, index) => {
          return (
            <tr key={index} className={cx('song-row')} tabindex="0">
              {/* 1st column */}
              <td>
                <span className={cx('song-index')}>
                  {playingIndex === index + 1 ? (
                    <img
                      style={{ width: '14px', height: '14px' }}
                      src="https://open.spotifycdn.com/cdn/images/equaliser-animated-green.f93a2ef4.gif"
                      alt=""
                    />
                  ) : (
                    index + 1
                  )}
                </span>

                {playingIndex === index + 1 ? (
                  <Tippy content={'Pause'} delay={200}>
                    <span
                      className={cx('play-btn')}
                      // onClick={() =>
                      //   handleOnPauseSong(song?.track?.id, index + 1)
                      // }
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
                      onClick={() =>
                        handleOnClickSong(song?.track?.id, index + 1)
                      }
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
                  {(+song?.track?.duration_ms / 60000)
                    .toFixed(2)
                    .replace('.', ':')}

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
        })}
      </tbody>
    </table>
  );
}

export default memo(Playlist);
