import React from 'react';
import { useParams } from 'react-router-dom';
import styles from './Search.module.scss';
import classNames from 'classnames/bind';
import { MainViewWrapper } from '~/pages/components';
import { SearchBrowse, SearchOutput } from './components/index';

const cx = classNames.bind(styles);

function SearchResult() {
  let { keyword } = useParams();

  // Thêm encodeURIComponent

  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      {keyword === 'browse' ? <SearchBrowse /> : <SearchOutput />}
    </MainViewWrapper>
  );
}

export default SearchResult;
