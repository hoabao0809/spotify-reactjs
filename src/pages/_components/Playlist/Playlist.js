import { memo, useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClockFour } from '@fortawesome/free-regular-svg-icons';

import styles from './Playlist.module.scss';
import { RowSong } from '~/pages/_components';

const cx = classNames.bind(styles);
const $ = document.querySelector.bind(document);

function Playlist({ playlist, dominantColor, ...props }) {
  const tableHeaderRef = useRef();

  const tracks =
    (playlist?.tracks && playlist?.tracks?.items) || playlist?.items;

  // Handle window scroll set sticky to table header
  useEffect(() => {
    const rightPaneEle = $('#rightPane');
    const headerEle = $('#header');
    const tableHeader = tableHeaderRef.current;
    const playlistBar = $('#playlist_bar');

    rightPaneEle.addEventListener('scroll', () => {
      if (rightPaneEle.scrollTop > 400) {
        tableHeader.style.background = 'var(--background-base)';
        headerEle.style.background = dominantColor;
        headerEle.style.backgroundImage =
          'linear-gradient(rgba(0, 0, 0, 0.2) 0,rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0.2) 100%)';
        if (playlistBar) {
          playlistBar.style.opacity = 1;
        }
      } else {
        tableHeader.style.background = 'none';
        headerEle.style.background = 'transparent';
        headerEle.style.backgroundImage = 'none';
        if (playlistBar) {
          playlistBar.style.opacity = 0;
        }
      }
    });

    return () => {
      tableHeader.style.background = 'none';
      headerEle.style.background = 'transparent';
      headerEle.style.backgroundImage = 'none';
      rightPaneEle.removeEventListener('scroll', () => {});
    };
  }, [dominantColor]);

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
        {tracks?.map((song, index) => {
          return (
            <RowSong
              key={index}
              index={index}
              song={song}
              playlist_id={playlist.id}
              {...props}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default memo(Playlist);
