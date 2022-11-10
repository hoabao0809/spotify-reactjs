import '~/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/layouts';

function App() {
  return (
    <Router>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component;
          let Layout = DefaultLayout;

          if (route.layout) {
            Layout = route.layout;
          } else if (route.layout === null) {
            Layout = Fragment;
          }

          return (
            <Route
              exact={route.exact}
              key={index}
              path={route.path}
              element={
                <Layout path={route.path}>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
  // }
}

export default App;
