/**
 * Component with format of six items per row
 * ...props: custom css (drilled from SearchComponent Component) applied in Card Component
 */

import React, { memo } from 'react';
import styles from './RowSixSongs.module.scss';
import classNames from 'classnames/bind';
import Card from '~/components/Card';

const cx = classNames.bind(styles);

function RowSixSongs({ items, ...props }) {
  return (
    <div className={cx('row-container')}>
      {items?.map((item, index) => (
        <Card key={index} item={item} {...props} />
      ))}
    </div>
  );
}

export default memo(RowSixSongs);
