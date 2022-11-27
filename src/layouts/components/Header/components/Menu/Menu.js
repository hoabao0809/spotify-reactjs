import React from 'react';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import {
  PopperWrapper,
  MenuItem,
} from '~/layouts/components/Header/components';
import { useSelector } from 'react-redux';
import { selectIsToggleUser } from '~/store/reducers/user';

const cx = classNames.bind(styles);

function Menu({ children, items }) {
  const { isToggleUser } = useSelector(selectIsToggleUser);

  const renderItems = () => {
    return items.map((item, index) => {
      return <MenuItem key={index} data={item} {...item} />;
    });
  };

  return (
    <Tippy
      interactive
      // content={currentUser?.display_name}
      placement="bottom-end"
      // className={cx('custom-tippy')}
      visible={isToggleUser}
      render={(attrs) => (
        <PopperWrapper>
          <div className={cx('menu-items')} tabIndex="-1" {...attrs}>
            {renderItems()}
          </div>
        </PopperWrapper>
      )}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
