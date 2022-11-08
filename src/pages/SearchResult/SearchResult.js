import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './SearchResult.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SearchResult() {
  let { keyword } = useParams();

  // Thêm encodeURIComponent

  return <div key={keyword} className={cx('wrapper')}>
    <h1>{keyword}</h1>
  </div>;
}

export default SearchResult;
