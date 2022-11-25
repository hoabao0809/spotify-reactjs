import styles from './EndingSeparation.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function EndingSeparation() {
  return <div className={cx('separation')}></div>;
}

export default EndingSeparation;
