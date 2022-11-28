import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import { TopItem, MainViewWrapper, EndingSeparation } from '~/pages/components';
import Card from '~/components/Card';

import { selectTopUserItems } from '~/store/reducers/personalization';
import { fetchTopUserItems } from '~/store/actionsCreator/home';

const cx = classNames.bind(styles);

function Home() {
  const dispatch = useDispatch();
  const userTopItems = useSelector(selectTopUserItems);
  const hour = new Date().getHours();

  useEffect(() => {
    dispatch(fetchTopUserItems());

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div className={cx('greet')}>
        <h2>
          Good{' '}
          {(hour < 12 && 'Morning') || (hour < 18 && 'Afternoon') || 'Evening'}
        </h2>
      </div>
      <div className={cx('top-content')}>
        {userTopItems.slice(0, 6)?.map((topItem, index) => (
          <TopItem key={index} topItem={topItem} />
        ))}
      </div>

      <div className={cx('category-wrapper')}>
        <div className={cx('title')}>
          <Link>
            <h2>Jump back in</h2>
          </Link>
          <Link>
            <span>SEE ALL</span>
          </Link>
        </div>
        <div className={cx('category-container')}>
          {userTopItems.slice(0, 6)?.map((item, index) => (
            <Card key={index} item={item} roundImg />
          ))}
        </div>
      </div>

      <EndingSeparation />
    </MainViewWrapper>
  );
}

export default Home;
