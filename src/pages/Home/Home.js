import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Home.module.scss';
import TopItem from '~/pages/components/TopItem';
import { selectTopUserItems } from '~/store/reducers/personalization';
import { fetchTopUserItems } from '~/store/actionsCreator/home-actions';

const cx = classNames.bind(styles);

function Home() {
  const dispatch = useDispatch();
  const userTopItems = useSelector(selectTopUserItems).slice(0, 6);

  useEffect(() => {
    dispatch(fetchTopUserItems());

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className={cx('greet')}>
          <h4>Good evening</h4>
        </div>
        <div className={cx('top-content')}>
          {userTopItems?.map((topItem, index) => (
            <TopItem key={index} topItem={topItem} />
          ))}
        </div>

        {/* List part */}
        
      </div>
    </section>
  );
}

export default Home;
