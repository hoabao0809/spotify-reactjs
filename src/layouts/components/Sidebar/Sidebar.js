import React, { Fragment, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Sidebar.module.scss';
import Menu, { MenuItem } from './Menu';
import config from '~/config';
import {
  HomeIcon,
  SearchIcon,
  YourLibraryIcon,
  HomeActiveIcon,
  SearchActiveIcon,
  YourLibraryActiveIcon,
  CreatePlaylistIcon,
  LikedSongsIcon,
} from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { selectPlaylists } from '~/store/reducers/playlists';
import { fetchPlaylists } from '~/store/actionsCreator/sidebar';
import { useDispatch, useSelector } from 'react-redux';

const $ = document.querySelector.bind(document);
const cx = classNames.bind(styles);

function Sidebar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { keyword } = useParams();
  const paramSearch = keyword ? `/${keyword}` : '/browse';
  const playlists = useSelector(selectPlaylists);

  useEffect(() => {
    dispatch(fetchPlaylists());

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnClickArrowDown = () => {
    const footerImg = $('#footer-image');
    const popUpEle = $('#popup-container');
    const footerAngleUp = $('#footer-angleUp');

    popUpEle.classList.remove('popUpEle-show');
    footerImg.classList.remove('footerImg-hide');
    footerAngleUp.style.display = 'block';
  };

  return (
    <Fragment>
      <aside className={cx('wrapper')}>
        <div className={cx('logo')} onClick={() => navigate('/')}>
          <img
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            alt="spotify-logo"
            className={cx('logo-img')}
          />
        </div>

        <div className={cx('sidebar-items')}>
          <Menu>
            <MenuItem
              title="Home"
              to={config.routes.home}
              icon={<HomeIcon />}
              activeIcon={<HomeActiveIcon />}
            />
            <MenuItem
              title="Search"
              to={config.routes.search + paramSearch}
              icon={<SearchIcon />}
              activeIcon={<SearchActiveIcon />}
            />
            <MenuItem
              title="Your Library"
              to={config.routes.yourLibrary}
              icon={<YourLibraryIcon />}
              activeIcon={<YourLibraryActiveIcon />}
            />
          </Menu>
        </div>

        <div className={cx('sidebar-items')}>
          <Menu>
            <MenuItem
              title="Create Playlist"
              to={config.routes.createPlaylist}
              icon={<CreatePlaylistIcon className={cx('create-playlist')} />}
              activeIcon={
                <CreatePlaylistIcon className={cx('create-playlist')} />
              }
            />
            <MenuItem
              title="Liked Songs"
              to={config.routes.likedSongs}
              icon={<LikedSongsIcon className={cx('liked-songs')} />}
              activeIcon={<LikedSongsIcon className={cx('liked-songs')} />}
            />
          </Menu>
        </div>

        <div className={cx('sidebar-items', 'playlist-section')}>
          <div className={cx('playlists-container')}>
            {playlists.map((playlist, index) => (
              <MenuItem
                key={index}
                title={playlist.name}
                to={config.routes.likedSongs}
              />
            ))}
          </div>
        </div>
      </aside>
      <div id="popup-container" className={cx('popup-container')}>
        <img id="popup-songImage" className={cx('popup-img')} alt="" />
        <button
          className={cx('btn-anglePopDown')}
          onClick={() => handleOnClickArrowDown()}
        >
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
      </div>
    </Fragment>
  );
}

export default Sidebar;
