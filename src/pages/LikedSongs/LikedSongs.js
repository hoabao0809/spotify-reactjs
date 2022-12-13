import React from 'react';
import styles from './LikedSongs.module.scss';
import classNames from 'classnames/bind';

import { MainViewWrapper, EndingSeparation } from '~/pages/_components';

const cx = classNames.bind(styles);

function LikedSongs() {
  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div>
        <h1>Liked Songs</h1>
      </div>
      <EndingSeparation />
    </MainViewWrapper>
  );
}

export default LikedSongs;
