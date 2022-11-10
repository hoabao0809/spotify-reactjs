import React, { Fragment } from 'react';
import classNames from 'classnames/bind';
import styles from './MainView.module.scss';

const cx = classNames.bind(styles);

function MainView({ path, children }) {
  return (
    <Fragment>
      {path === '/' ? (
        <div className={cx('linear-gradient')}></div>
      ) : (
        <Fragment />
      )}
      <section className={cx('view-wrapper')}>
        <h1>{children}</h1>
      </section>
    </Fragment>
  );
}

export default MainView;
