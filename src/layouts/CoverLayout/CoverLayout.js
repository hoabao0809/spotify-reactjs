import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './CoverLayout.module.scss';

const cx = classNames.bind(styles);

function CoverLayout({ path, children }) {
  return (
    <Fragment>
      <div className={cx('wrapper')}>{children}</div>
      <div className={cx('bg-gradient')} />
    </Fragment>
  );
}

export default CoverLayout;
