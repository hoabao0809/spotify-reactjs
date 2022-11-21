/**
 * @Topic Handle popup window
 * @Issue Cannot retrieve data (hash access_token) in popup/new tab/ new window (for security reasons)
 * @Solution Use window.location to open authorization page (in same tab), after that Spotify server will redirect to your redirect registered page (in this case /login#access-token) => use window.location.hash to get data
 * @Note Some alternatives to navigation: - useNavigate, Link, window.open(), window.location
 */

import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import Button from '~/components/Button';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const SCOPE =
  'user-read-playback-state user-modify-playback-state user-read-currently-playing user-top-read user-follow-read playlist-read-private user-library-read';
const REDIRECT_URI = 'http://localhost:3000/login';
const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const ACCESS_TOKEN = 'accessToken';
const URL = `https://accounts.spotify.com/authorize?response_type=token&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}&show_dialog=true`;

const getDataFromHash = (hash) => {
  const restHash = hash.split('#')[1];
  const keyStrings = restHash.split('&');

  const data = keyStrings.reduce((prev, current, index, arr) => {
    prev[`${current.split('=')[0]}`] = current.split('=')[1];

    return prev;
  }, {});

  return data;
};

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.location.hash) {
      const hash = window.location.hash;
      const data = getDataFromHash(hash);

      localStorage.setItem(
        ACCESS_TOKEN,
        JSON.stringify({
          expires_in: Date.now() + Number(data.expires_in) * 1000,
          access_token: data.access_token,
        })
      );
      navigate('/');
    }
  }, [navigate]);

  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <img
          src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
          alt="spotify-logo"
          className={cx('logo-img')}
        />
        <h1>
          Millions of songs. <br />
          Free on Spotify.
        </h1>
        <Button
          className={cx('button')}
          primary
          onClick={() => (window.location = URL)}
        >
          Login
        </Button>
        <p>
          <span>Don't have an account?</span>
          <span>SIGNUP</span>
        </p>
      </div>
    </div>
  );
}

export default Login;
