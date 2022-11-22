import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './Home.module.scss';
import { TopItem, MainViewWrapper } from '~/pages/components';
import Card from '~/components/Card';

import { selectTopUserItems } from '~/store/reducers/personalization';
import { fetchTopUserItems } from '~/store/actionsCreator/home';

const cx = classNames.bind(styles);

function Home() {
  const dispatch = useDispatch();
  const userTopItems = useSelector(selectTopUserItems);
  // const pane1Width = document.querySelector('.Pane1')?.style.width; // Nghiên cứu sau, khi resize thì splice array 5 items

  useEffect(() => {
    dispatch(fetchTopUserItems());

    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div className={cx('greet')}>
        <h4>Good evening</h4>
      </div>
      <div className={cx('top-content')}>
        {userTopItems.slice(0, 6)?.map((topItem, index) => (
          <TopItem key={index} topItem={topItem} />
        ))}
      </div>

      <div className={cx('category-wrapper')}>
        <div className={cx('title')}>
          <Link>
            <h2>Title</h2>
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

      {/* List part */}

      {/* list.map(item => {
          h4. title
          seeAll
          <Card squareImg roundImg to /> 
        })
            * asda
           */}
    </MainViewWrapper>
  );
}

export default Home;
