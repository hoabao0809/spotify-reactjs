import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Card.module.scss';
import Button from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Card({ item, roundImg, squareImg, className, to, ...passProps }) {
  // console.log(item);

  const {  images, name, type } = item;

  const classes = cx('wrapper', {
    [className]: className,
    roundImg,
    squareImg,
  });

  return (
    <Link className={classes} {...passProps}>
      <div className={cx('container')}>
        <div className={cx('image-container')}>
          <img className={cx('image')} src={images[0]?.url} alt="" />
          <Button className={cx('play-btn')} play>
            <FontAwesomeIcon icon={faPlay} />
          </Button>
        </div>
        <div className={cx('content')}>
          <h5>{name}</h5>
          <span>{type.charAt(0).toUpperCase() + type.slice(1)}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
