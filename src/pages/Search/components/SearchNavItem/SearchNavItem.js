import styles from './SearchNavItem.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import { memo } from 'react';

const cx = classNames.bind(styles);

function SearchNavItem({ className, onClick, name, to }) {
  return (
    <NavLink
      className={(nav) =>
        cx(
          'search-item',
          { active: nav.isActive },
          {
            [className]: className,
          }
        )
      }
      to={to}
      onClick={onClick}
    >
      <span className={cx('name')}>{name}</span>
    </NavLink>
  );
}

export default memo(SearchNavItem);
