import React from 'react';
import styles from './Category.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Category({ category }) {
  const { icons, name } = category;
  let randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  return (
    <div className={cx('wrapper')} style={{ backgroundColor: randomColor }}>
      <div className={cx('container')}>
        <div className={cx('name')}>
          <span>{name}</span>
        </div>
        <div className={cx('icon')}>
          <img className={cx('img')} src={icons[0].url} alt={name} />
        </div>
      </div>
    </div>
  );
}

export default Category;
