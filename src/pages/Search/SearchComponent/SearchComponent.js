/**
 * SearchComponent: Component with format of 6 items in each row
 * ...props: custom css of certain kind of search type, applied in Card Component
 */

import React, { useEffect } from 'react';

import styles from './SearchComponent.module.scss';
import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '~/store/actionsCreator/search';
import { selectSearchResult, addSearchResult } from '~/store/reducers/search';
import { RowSixSongs } from '~/components';

const cx = classNames.bind(styles);

function SearchComponent({ keyword, searchType, ...props }) {
  const dispatch = useDispatch();
  const newKeyword = useDebounce(keyword, 2000);
  const searchResult = useSelector(selectSearchResult);

  const typeByApi = searchType.substr(0, searchType.length - 1); // substring 's' character to match API search type
  const searchItems = searchResult[searchType]?.items;

  useEffect(() => {
    dispatch(fetchSearch(newKeyword, typeByApi, 'VN', null));

    return () => {
      dispatch(addSearchResult({}));
    };
  }, [newKeyword, dispatch, typeByApi]);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('content-section')}>
        <RowSixSongs items={searchItems} {...props} />
      </div>
    </section>
  );
}

export default SearchComponent;


