import React from 'react';

import styles from './SearchAlbum.module.scss';
import classNames from 'classnames/bind';

import { MainViewWrapper } from '~/pages/components';

const cx = classNames.bind(styles);

function SearchAlbum() {
  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      Search album
    </MainViewWrapper>
  );
}

export default SearchAlbum;
