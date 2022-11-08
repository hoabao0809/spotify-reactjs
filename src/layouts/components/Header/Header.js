import React from 'react';
import classNames from 'classnames/bind';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import history from 'history/browser';
import { SearchBar, PlaylistBar } from './components';

const cx = classNames.bind(styles);

function Header({ path, isLoggedIn = false }) {
  let PathRenderComp;

  if (path.includes('/search')) {
    PathRenderComp = SearchBar;
  } else if (path === '/collection/playlists') {
    PathRenderComp = PlaylistBar;
  }

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('breadcrumbs')}>
          <FontAwesomeIcon
            className={cx('breadcrumb-btn')}
            icon={faAngleLeft}
            onClick={() => history.back()}
            style={{
              cursor:
                window.history?.state?.idx === 0 ? 'not-allowed' : 'pointer',
            }}
          />
          <FontAwesomeIcon
            className={cx('breadcrumb-btn')}
            icon={faAngleRight}
            onClick={() => {
              history.forward();
            }}
          />
        </div>

        <div className={cx('path-render')}>
          {path === '/' ? <div></div> : <PathRenderComp />}
          {/* <PathRenderComp /> */}
          {/* <div className={cx('search-wrapper')}>
            <FontAwesomeIcon className={cx('search-icon')} icon={faSearch} />
            <input
              type="text"
              name="search"
              className={cx('search-input')}
              placeholder="What do you want to listen to?"
            />
          </div> */}
        </div>

        <div className={cx('header-buttons')}>
          <h4>Right section</h4>
        </div>
      </div>
    </div>
  );
}

export default Header;
