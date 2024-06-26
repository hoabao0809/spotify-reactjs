import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './MainView.module.scss';

const cx = classNames.bind(styles);

function MainView({ path, children }) {
  return (
    <Fragment>
      <div id="linear-gradient" className={cx('linear-gradient')} />

      <section className={cx('view-wrapper')}>{children}</section>
    </Fragment>
  );
}

export default MainView;
