import React, { memo } from 'react';
import classNames from 'classnames/bind';

import styles from './ProjectCard.module.scss';
import { Button } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { truncate } from '~/utils';

const cx = classNames.bind(styles);

function ProjectCard({ item, href, horizontal, className, to, ...passProps }) {
  const classes = cx('wrapper', {
    [className]: className,
    horizontal,
  });

  return (
    <div className={classes} {...passProps}>
      <div className={cx('container')}>
        <div className={cx('image-container')}>
          <img className={cx('image')} src={item.image} alt="" loading="lazy" />

          <Button play className={cx('play-btn')} href={href}>
            <FontAwesomeIcon className={cx('play-icon')} icon={faCode} />
          </Button>
        </div>
        <div className={cx('content')}>
          <h5 className={cx('name')}>
            {item?.name && truncate(item?.name, 15)}
          </h5>
          <span className={cx('type')}>{item.description}</span>
        </div>
      </div>
    </div>
  );
}

export default memo(ProjectCard);
