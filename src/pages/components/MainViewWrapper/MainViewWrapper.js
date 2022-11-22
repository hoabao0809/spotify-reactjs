import React from 'react';
import classNames from 'classnames/bind';
import styles from './MainViewWrapper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({ children, className }) {
  return (
    <section className={cx('wrapper')}>
      <div
        className={cx('container', {
          [className]: className,
        })}
      >
        {children}
      </div>
    </section>
  );
}

export default Wrapper;
