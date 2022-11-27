import React from 'react';
import styles from './PopperWrapper.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function PopperWrapper({ children }) {
  return <div className={cx('popper-wrapper')}>{children}</div>;
}

export default PopperWrapper;
