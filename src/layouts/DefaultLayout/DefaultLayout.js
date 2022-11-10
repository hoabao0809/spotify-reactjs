import React, { Fragment, useEffect } from 'react';
import SplitPane from 'react-split-pane';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import { Header, Footer, Sidebar, MainView } from '~/layouts/components';

import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function DefaultLayout({ path, children }) {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem('accessToken');

  // Redirect to login page if there is no accessToken
  useEffect(() => {
    if (!accessToken) {
      navigate('/login');
    }
  }, [accessToken, navigate]);

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
          <Header path={path} />
          <MainView path={path}>{children}</MainView>
        </div>
      </SplitPane>

      <div className={cx('footer')}>
        <Footer />
      </div>
    </Fragment>
  );
}

export default DefaultLayout;
