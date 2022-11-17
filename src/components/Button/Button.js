import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Button({
  to,
  href,
  children,
  primary,
  text,
  play,
  className,
  onClick,
  ...passProps
}) {
  let Comp = 'button';

  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    props.target = '_blank';
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    text,
    play
  });

  return (
    <Comp className={classes} {...props}>
      {children}
    </Comp>
  );
}

export default Button;
