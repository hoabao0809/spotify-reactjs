import React, { useEffect } from 'react';

import styles from './SearchAll.module.scss';
import classNames from 'classnames/bind';

import { useDebounce } from '~/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearch } from '~/store/actionsCreator/search';
import { selectSearchResult, addSearchResult } from '~/store/reducers/search';

import Card from '~/components/Card';
import RowSingleSong from '~/components/RowSingleSong';
import RowSixSongs from '~/components/RowSixSongs';

const cx = classNames.bind(styles);

function SearchAll({ keyword }) {
  const dispatch = useDispatch();
  const newKeyword = useDebounce(keyword, 2000);
  const searchResult = useSelector(selectSearchResult);

  const types =
    'album%2Cartist%2Cplaylist%2Ctrack%2Cshow%2Cepisode%2Caudiobook';

  // Filter out no result search by type
  const filteredNullSearch = Object.keys(searchResult).filter((result) => {
    return searchResult[result].items.length > 0;
  });

  useEffect(() => {
    dispatch(fetchSearch(newKeyword, types, 'VN', 6));

    return () => {
      dispatch(addSearchResult({}));
    };
  }, [newKeyword, dispatch]);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('top-section')}>
        <div className={cx('top-result')}>
          <div className={cx('title')}>
            <h2>Top result</h2>
          </div>
          <Card item={searchResult?.artists?.items[0]} roundImg horizontal />
        </div>
        <div className={cx('top-songs')}>
          <div className={cx('title')}>
            <h2>Top Songs</h2>
          </div>
          <div className={cx('songs-container')}>
            {searchResult?.tracks?.items?.slice(0, 4).map((song, index) => (
              <RowSingleSong key={index} index={index} song={song} />
            ))}
          </div>
        </div>
      </div>

      <div className={cx('content-section')}>
        {filteredNullSearch.map((type, index) => {
          const typeItems = searchResult[type]?.items;

          const props = {};
          if (type === 'artists') {
            props.roundImg = true;
          }

          return (
            <div key={index}>
              <div className={cx('title')}>
                <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
              </div>
              <RowSixSongs items={typeItems} {...props} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SearchAll;
