import React from 'react';
import classNames from 'classnames/bind';
import styles from './About.module.scss';
import ParticleBackground from '../ParticleBackground/ParticleBackground';

const cx = classNames.bind(styles);

function About() {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('about-container')}>
        <h2 className={cx('title')}>About</h2>

        <div className={cx('about-content')}>
          <ParticleBackground />
          <div className={cx('about-item')}>
            <p>Hi, I am Bao Hoa.</p>

            <p>I am a developer who is highly interested in JavaScript.</p>
            <p>
              My tech stack has been full-stack JS such as React, Angular with
              Javascript and TypeScript.
            </p>
          </div>
        </div>
      </div>

      <div className={cx('education-container')}>
        <h2 className={cx('title')}>Education</h2>

        <div className={cx('education-content')}>
          <div className={cx('education-box')}>
            <h4 className={cx('edu-month')}>Feb</h4>
            <h4 className={cx('edu-year')}>28</h4>
          </div>
          <div className={cx('edu-text')}>
            <h4 className={cx('edu-institute')}>FUNiX - A member of FPT</h4>
            <h4 className={cx('edu-course')}>
              Web Fullstack Javascript • Feb 2022 - Oct 2022
            </h4>
          </div>
        </div>

        <div className={cx('education-content')}>
          <div className={cx('education-box')}>
            <h4 className={cx('edu-month')}>Sep</h4>
            <h4 className={cx('edu-year')}>30</h4>
          </div>
          <div className={cx('edu-text')}>
            <h4 className={cx('edu-institute')}>
              Academy of International Studies
            </h4>
            <h4 className={cx('edu-course')}>
              English Language • Sep 2014 - Oct 2018
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
