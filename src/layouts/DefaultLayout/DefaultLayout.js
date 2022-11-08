import React, { Fragment } from 'react';
import SplitPane from 'react-split-pane';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

import Header from '../components/Header/Header';
import Sidebar from '~/layouts/components/Sidebar';
import Footer from '../components/Footer/Footer';

const cx = classNames.bind(styles);

function DefaultLayout({ path, children }) {
  return (
    <Fragment>
      <SplitPane
        split="vertical"
        defaultSize={250}
        minSize={200}
        maxSize={350}
        className={cx('wrapper')}
      >
        {/*--------- Left window ------- */}
        <Sidebar />

        {/*--------- Right window ------- */}
        <div className={cx('container')}>
          <Header path={path} isLoggedIn />
          <div>{children}</div>
        </div>
      </SplitPane>

      <div className={cx('footer')}>
        <Footer />
      </div>
    </Fragment>
  );
}

export default DefaultLayout;
