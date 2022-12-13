import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CategoryWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function CategoryWrapper({
  title,
  toOfTitle,
  toOfSeeAll,
  children,
  className,
}) {
  return (
    <div className={cx('category-wrapper')}>
      <div className={cx('title')}>
        <Link to={toOfTitle}>
          <h2>{title}</h2>
        </Link>
        <Link to={toOfSeeAll}>
          <span className={cx('see_all')} >SEE ALL</span>
        </Link>
      </div>
      <div
        className={cx('category-container', {
          [className]: className,
        })}
      >
        {children}
      </div>
    </div>
  );
}

export default CategoryWrapper;
