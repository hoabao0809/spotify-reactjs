import React, { useEffect } from 'react';

import styles from './SearchTrack.module.scss';
import classNames from 'classnames/bind';
import { useDebounce } from '~/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '~/store/actionsCreator/search';
import { selectSearchResult, addSearchResult } from '~/store/reducers/search';
import { Playlist } from '~/pages/_components';

const cx = classNames.bind(styles);

function SearchTrack({ keyword }) {
  const dispatch = useDispatch();
  const newKeyword = useDebounce(keyword, 2000);
  const searchResult = useSelector(selectSearchResult);

  useEffect(() => {
    dispatch(fetchSearch(newKeyword, 'track', 'VN', null));

    return () => {
      dispatch(addSearchResult({}));
    };
  }, [newKeyword, dispatch]);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('content-section')}>
        <Playlist
          playlist={searchResult}
          dominantColor="#121212"
          isSearchPlaylist
          searchPlaylists={searchResult?.tracks?.items}
        />
      </div>
    </section>
  );
}

export default SearchTrack;
