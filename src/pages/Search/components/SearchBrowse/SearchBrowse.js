import React, { useEffect } from 'react';

import styles from './SearchBrowse.module.scss';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '~/store/reducers/categories';
import { fetchCategories } from '~/store/actionsCreator/categories';
import { Category } from '~/pages/components';

const cx = classNames.bind(styles);

function SearchBrowse() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(fetchCategories('SE', null));

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <h1 className={cx('title')}>Browse all</h1>

        <div className={cx('categories')}>
          {categories.map((category, index) => (
            <Category key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchBrowse;
