import React, { Fragment, useState } from 'react';
import styles from './TopItem.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { getAverageRGB } from '~/utils/getAverageRGB';

const cx = classNames.bind(styles);

function TopItem({ topItem }) {
  // Function handles changing linear background when mousing over top items
  const handleOnMouseOver = (e) => {
    const topItemWrapper = e.target.closest('#topItem');
    const imgEle = topItemWrapper.querySelector('img');
    const dominantImgColor = getAverageRGB(imgEle);

    const { b, g, r } = dominantImgColor;
    const bgColor = `rgb(${r},${g},${b})`;
    document.querySelector('#linear-gradient').style.backgroundColor = bgColor;
  };

  return (
    <Fragment>
      <div
        id="topItem"
        className={cx('wrapper')}
        onMouseOver={(e) => handleOnMouseOver(e)}
      >
        <div className={cx('image-container')}>
          <img className={cx('image')} src={topItem.images[0].url} alt="" />
        </div>
        <div className={cx('detail')}>
          {topItem.name}
          <Button play className={cx('button')}>
            <FontAwesomeIcon icon={faPlay} />
          </Button>
        </div>
      </div>
    </Fragment>
  );
}

export default TopItem;
