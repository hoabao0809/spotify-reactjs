import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import {
  faAngleLeft,
  faAngleRight,
  faCaretDown,
  faExternalLink,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import history from 'history/browser';

import { SearchBar, PlaylistBar } from './components/index';
import Button from '~/components/Button';
import { userApi } from '~/api';
import { Menu } from '~/layouts/components/Header/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsToggleUser, toggleUser } from '~/store/reducers/user';

const cx = classNames.bind(styles);
const $ = document.querySelector.bind(document);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faExternalLink} />,
    title: 'Account',
    href: 'https://www.spotify.com/us/account/overview/?utm_source=spotify&utm_medium=menu&utm_campaign=your_account',
  },
  {
    icon: null,
    title: 'Profile',
    to: '/profile',
  },
  {
    icon: <FontAwesomeIcon icon={faExternalLink} />,
    title: 'Upgrade to Premium',
    href: 'https://www.spotify.com/us/premium/',
  },
  {
    icon: <FontAwesomeIcon icon={faExternalLink} />,
    title: 'Support',
    href: 'https://support.spotify.com/us/',
  },
  {
    icon: <FontAwesomeIcon icon={faExternalLink} />,
    title: 'Download',
    href: 'https://www.spotify.com/us/download/windows/',
  },
  {
    icon: null,
    title: 'Settings',
    to: '/',
  },
  {
    icon: null,
    title: 'Log out',
    to: '/',
    onClick: () => {
      localStorage.removeItem('accessToken');
    },
    separate: 'true',
  },
];

function Header({ path }) {
  const [currentUser, setCurrentUser] = useState();
  const headerRef = useRef();
  const dispatch = useDispatch();
  const { isToggleUser } = useSelector(selectIsToggleUser);

  let PathRenderComp;

  useEffect(() => {
    userApi.getCurrentUserProfile().then((response) => {
      if (response) {
        setCurrentUser(response);
      }
    });

    return () => {};
  }, []);

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
  } else {
    PathRenderComp = PlaylistBar;
  }

  const handleToggleUser = () => {
    if (isToggleUser) {
      dispatch(toggleUser({ isToggleUser: false }));
      document.querySelector('#tippy-1').style.display = 'none';
    } else {
      dispatch(toggleUser({ isToggleUser: true }));
      if (document.querySelector('#tippy-1')) {
        document.querySelector('#tippy-1').style.display = 'block';
      }
    }
  };

  return (
    <div id="header" ref={headerRef} className={cx('wrapper')}>
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
            <Menu items={MENU_ITEMS} isToggleUser>
              <div
                className={cx('menu-wrapper')}
                onClick={() => handleToggleUser()}
              >
                <div className={cx('menu-img')}>
                  <img
                    src={currentUser?.images[0]?.url}
                    alt="avatar"
                    className={cx('user-img')}
                  />
                </div>
                <div className={cx('menu-content')}>
                  <span>{currentUser?.display_name}</span>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
