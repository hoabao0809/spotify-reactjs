import React, { useEffect, useState } from 'react';
import styles from './Profile.module.scss';
import classNames from 'classnames/bind';

import { MainViewWrapper, EndingSeparation } from '~/pages/_components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEllipsis,
  faHeart,
  faKeyboard,
} from '@fortawesome/free-solid-svg-icons';
import { Button } from '~/components';
import { TopProfile, Projects, About, Experience } from './components';

const cx = classNames.bind(styles);
const $ = document.querySelector.bind(document);

function Profile() {
  const [like, setLike] = useState(false);
  const [followed, setFollowed] = useState(false);

  useEffect(() => {
    if ($('#linear-gradient')) {
      $('#linear-gradient').style.backgroundColor = '#a2b2d7';
      $('#linear-gradient').style.backgroundImage =
        'linear-gradient(180deg, #082434, #121212 25%);';
      $('#linear-gradient').style.height = '90%';
    }

    return () => {
      if ($('#linear-gradient')) {
        $('#linear-gradient').style.height = '332px';
      }
    };
  }, []);

  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div className={cx('top-container')}>
        <div className={cx('cover-img')}>
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
                <h1>Dang Nguyen Bao Hoa</h1>
              </div>
              <div className={cx('heading-title')}>
                <FontAwesomeIcon icon={faKeyboard} />
                <span className={cx('job-title')}>Frontend Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('details-container')}>
        <div className={cx('interaction-section')}>
          {/* <Tippy content={like ? 'Unlike' : 'Like'} delay={200}> */}
          {like ? (
            <Button
              play
              className={cx('unlike-btn')}
              onClick={() => setLike(!like)}
            >
              <FontAwesomeIcon className={cx('unlike-icon')} icon={faHeart} />
            </Button>
          ) : (
            <Button
              play
              className={cx('like-btn')}
              onClick={() => setLike(!like)}
            >
              <FontAwesomeIcon className={cx('like-icon')} icon={faHeart} />
            </Button>
          )}
          {/* </Tippy> */}

          <button
            text
            className={cx('following-btn', {
              followed,
            })}
            onClick={() => setFollowed(!followed)}
          >
            {followed ? 'Following' : 'Follow'}
          </button>

          <button className={cx('options')}>
            <FontAwesomeIcon icon={faEllipsis} />
          </button>
        </div>

        {/* Top Artist */}
        <TopProfile />

        {/* Popular Projects */}
        <Projects />

        {/* About */}
        <About />

        {/* About */}
        <Experience />
      </div>

      <EndingSeparation />
    </MainViewWrapper>
  );
}

export default Profile;
