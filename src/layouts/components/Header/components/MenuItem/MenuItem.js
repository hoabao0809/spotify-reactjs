import React from 'react';
import styles from './MenuItem.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function MenuItem({ data, ...props }) {
  const classes = cx('menu-item', {
    separate: data.separate === 'true',
  });
  return (
    <Button {...props} text className={classes}>
      <div className={cx('title')}>{data.title}</div>
      <div className={cx('icon')}>{data.icon}</div>
    </Button>
  );
}

export default MenuItem;
