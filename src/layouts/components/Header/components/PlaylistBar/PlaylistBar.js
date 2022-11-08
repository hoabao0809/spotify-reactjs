import React from 'react';
import classNames from 'classnames/bind';

import styles from './PlaylistBar.module.scss';

const cx = classNames.bind(styles);

function PlaylistBar() {
  return (
    <div className={cx('wrapper')}>
      <h4>Playlist</h4>
    </div>
  );
}

export default PlaylistBar;
