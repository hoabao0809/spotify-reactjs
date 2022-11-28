import React from 'react';
import styles from './CreatePlaylist.module.scss';
import classNames from 'classnames/bind';

import { MainViewWrapper, EndingSeparation } from '~/pages/components';

const cx = classNames.bind(styles);

function CreatePlaylist() {
  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div>
        <h1>Create Playlist</h1>
      </div>
      <EndingSeparation />
    </MainViewWrapper>
  );
}

export default CreatePlaylist;
