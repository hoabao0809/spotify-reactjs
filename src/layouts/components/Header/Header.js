import React from 'react';
import classNames from 'classnames/bind';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import history from 'history/browser';

import { SearchBar, PlaylistBar } from './components/index';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header({ path }) {
  let PathRenderComp;

  if (path.includes('/search')) {
    PathRenderComp = SearchBar;
  } else if (path.includes('/playlist')) {
    PathRenderComp = PlaylistBar;
  } else if (path.includes('/collection/playlists')) {
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
              opacity: window.history?.state?.idx === 0 ? '.7' : '1',
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
        </div>

        <div className={cx('header-buttons')}>
          <div className={cx('btn-actions')}>
            <Button
              href="https://www.spotify.com/vn-vi/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade"
              text
            >
              Premium
            </Button>
            <Button href="https://support.spotify.com/vn-vi/" text>
              Support
            </Button>
            <Button href="https://www.spotify.com/vn-vi/download/windows/" text>
              Download
            </Button>
          </div>

          <div className={cx('btn-user')}>
            <Button to="/search" text>
              Sign up
            </Button>
            <Button to="" primary>
              Log in
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
