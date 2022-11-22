import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import history from 'history/browser';

import { SearchBar, PlaylistBar } from './components/index';
import Button from '~/components/Button';

const cx = classNames.bind(styles);
const $ = document.querySelector.bind(document);

function Header({ path }) {
  const headerRef = useRef();
  let PathRenderComp;

  useEffect(() => {
    const rightPaneEle = $('#rightPane');
    rightPaneEle.addEventListener('scroll', () => {
      if (rightPaneEle.scrollTop > 200) {
        headerRef.current.classList.add('header-sticky');
      } else {
        headerRef.current.classList.remove('header-sticky');
      }
    });

    return () => {
      rightPaneEle.removeEventListener('scroll', () => {});
    };
  }, []);

  if (path.includes('/search')) {
    PathRenderComp = SearchBar;
  } else if (path.includes('/playlist')) {
    PathRenderComp = PlaylistBar;
  } else if (path.includes('/collection/playlists')) {
    PathRenderComp = PlaylistBar;
  }

  return (
    <div id='header' ref={headerRef} className={cx('wrapper')} >
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
            <Button href="https://github.com/hoabao0809/spotify-reactjs" text>
              Source Code
            </Button>
          </div>

          <div className={cx('btn-user')}>
            <Button to="" primary>
              Hoa Dou
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
