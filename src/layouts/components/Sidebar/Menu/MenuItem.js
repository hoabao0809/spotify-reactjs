import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon, className }) {
  return (
    // NavLink sẽ cung cấp 1 callback có object trả về là nav, trong đó có isActive => từ đó tạo dynamic class để chỉnh active
    <NavLink
      className={(nav) =>
        cx(
          'menu-item',
          { active: nav.isActive },
          {
            [className]: className,
          }
        )
      }
     
      to={to}
    >
      {icon && activeIcon && (
        <>
          <span className={cx('icon')}>{icon}</span>
          <span className={cx('active-icon')}>{activeIcon}</span>
        </>
      )}
      <span className={cx('title')}>{title}</span>
    </NavLink>
  );
}

MenuItem.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  activeIcon: PropTypes.node,
  className: PropTypes.string,
};

export default MenuItem;
