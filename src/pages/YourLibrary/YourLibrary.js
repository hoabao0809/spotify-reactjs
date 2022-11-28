import React from 'react';
import styles from './YourLibrary.module.scss';
import classNames from 'classnames/bind';

import { MainViewWrapper, EndingSeparation } from '~/pages/components';

const cx = classNames.bind(styles);

function YourLibrary() {
  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div>
        <h1>Your Library</h1>
      </div>
      <EndingSeparation />
    </MainViewWrapper>
  );
}

export default YourLibrary;
