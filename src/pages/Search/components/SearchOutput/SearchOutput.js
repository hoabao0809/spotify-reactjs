import React, { useEffect, useState } from 'react';

import styles from './SearchOutput.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import { MainViewWrapper } from '~/pages/components';
import config from '~/config';
import { SearchNavItem } from '../index';
import { addType, selectSearchState } from '~/store/reducers/search';
import { useDispatch, useSelector } from 'react-redux';
import { SearchAll } from '~/pages/Search/components';

const cx = classNames.bind(styles);

function SearchOutput() {
  let { keyword } = useParams();

  const typesArray = Object.keys(config.searchTypes);
  const searchType = useSelector(selectSearchState).type;
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(addType(null));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let SearchComponent = 'SearchAll';

  if (searchType) {
    SearchComponent = config.searchTypes[searchType].component;
  }

  const handleClickType = (typeSelected) => {
    dispatch(addType(typeSelected));
  };

  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div className={cx('navbar')}>
        <div className={cx('container')}>
          {typesArray.map((type, index) => {
            const typeItem = config.searchTypes[type];
            return (
              <SearchNavItem
                key={index}
                className={cx('nav-item')}
                to={`/search/${keyword}${typeItem.to}`}
                onClick={() => handleClickType(typeItem.type)}
                name={typeItem.name}
              />
            );
          })}
        </div>
      </div>

      <div className={cx('outputs')}>
        {searchType == null ? (
          <SearchAll keyword={keyword} />
        ) : (
          <SearchComponent keyword={keyword} />
        )}
      </div>
    </MainViewWrapper>
  );
}

export default SearchOutput;
