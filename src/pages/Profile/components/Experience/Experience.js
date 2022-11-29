import React from 'react';
import classNames from 'classnames/bind';
import styles from './Experience.module.scss';

const cx = classNames.bind(styles);

function Experience() {
  return (
    <div className={cx('wrapper')}>
      <h2 className={cx('title')}>Project Experience</h2>

      <div className={cx('experience-container')}>
        <div className={cx('experience-card')}>
          <h4 className={cx('experience-header-copy')}>
            FIVERR FREELANCE WEBSITE
          </h4>
          <h5 className={cx('work-dates')}>OCT 2022 - NOV 2022</h5>
          <div className={cx('heart-bullet')}>
            <span className={cx('bullet-text')}>
              Tech Stack: Typescript, AngularJs, Angular Material UI, MongoDB
              (Mongoose), Express.js.
            </span>
            <span className={cx('bullet-text')}>
              Function: The application helps users book digital services
              offered by freelancers in various categories, and also allows
              admins to add, edit, delete users and gigs.
            </span>
            <span className={cx('bullet-text')}>
              Designed and developed a creative portfolio website to showcase my
              work.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
