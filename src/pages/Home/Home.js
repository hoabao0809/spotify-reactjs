import React, { useEffect } from 'react';
import './Home.module.scss';
import browseApi from '~/api/browseApi';

function Home() {
  useEffect(() => {
    browseApi
      .getNewReleases('VN', 6)
      .then((response) => {
        if (response) {
          console.log(response);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
