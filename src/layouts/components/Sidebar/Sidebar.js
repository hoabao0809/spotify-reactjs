import React from 'react';
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

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <div className={cx('logo')}>
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
            to={config.routes.search}
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
    </aside>
  );
}

export default Sidebar;
