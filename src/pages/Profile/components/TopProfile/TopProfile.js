import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './TopProfile.module.scss';
import { userApi } from '~/api';
import { Button } from '~/components';

import { SKILLS } from '../../data';

const cx = classNames.bind(styles);

function TopProfile() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userApi.getCurrentUserProfile().then((response) => {
      if (response) {
        setCurrentUser(response);
      }
    });

    return () => {};
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('user-info')}>
        <h2 className={cx('title')}>Developer Pick</h2>

        <div className={cx('heading-section')}>
          <div className={cx('image-container')}>
            <img
              src={currentUser?.images[0]?.url}
              alt="avatar"
              className={cx('image')}
              loading="lazy"
            />
          </div>

          <div className={cx('btn-user')}>
            <div className={cx('sub_heading')}>
              <div className={cx('sub_heading--img')}>
                <img
                  src={currentUser?.images[0]?.url}
                  alt="avatar"
                  loading="lazy"
                  className={cx('image')}
                />
              </div>
              <div className={cx('menu-content')}>
                <span>Get In Touch!</span>
              </div>
            </div>

            <div className={cx('contacts')}>
              <span>Contact Information</span>

              <div className={cx('contacts__list')}>
                <Button text className={cx('contact--item')}>
                  0705973012
                </Button>
                <Button
                  href="https://github.com/hoabao0809"
                  text
                  className={cx('contact--item')}
                >
                  Github
                </Button>
                <Button
                  href="mailto:hoabao.0809@gmail.com"
                  text
                  className={cx('contact--item')}
                >
                  Email
                </Button>
                <Button
                  href="https://drive.google.com/file/d/1Yi6MaFljQ239vJtssLzDk9Wb-6bka83A/view?usp=share_link"
                  text
                  className={cx('contact--item')}
                >
                  My CV
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx('skills')}>
        <h2 className={cx('title')}>Skills</h2>
        <div className={cx('skills__content')}>
          {SKILLS.map((skill, index) => {
            return (
              <Button key={index} text className={cx('skill')}>
                {skill.icon}
                <span className={cx('skill-name')}>{skill.name}</span>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TopProfile;
