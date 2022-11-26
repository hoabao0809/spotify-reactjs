import React, { Fragment, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import {
  faAngleUp,
  faBackwardStep,
  faForwardStep,
  faPause,
  faPlay,
  faRepeat,
  faShuffle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import styles from './Footer.module.scss';
import {
  LikeFooterIcon,
  PictureInPictureIcon,
  LyricsIcon,
  QueueIcon,
  ConnectToDeviceIcon,
  VolumeOffIcon,
  VolumeLowIcon,
  VolumeMediumIcon,
  VolumeHighIcon,
} from '~/components/Icons';
import { formatTime } from '~/utils';
import { useCurrentTracks } from '~/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsPlayingTrack, setIsPlaying } from '~/store/reducers/player';

const $ = document.querySelector.bind(document);
const cx = classNames.bind(styles);

function Footer() {
  const progressBarRef = useRef();
  const currentTime = useRef();
  const volumeBarRef = useRef();

  const dispatch = useDispatch();

  // Local States
  const { isPlaying, idPlayingTrack, indexPlayingTrack, idPlayingPlaylist } =
    useSelector(selectIsPlayingTrack);

  const currentTracks = useCurrentTracks();
  const currentSong = currentTracks && currentTracks[indexPlayingTrack];

  console.log(indexPlayingTrack, currentSong);

  const [currentVolume, setCurrentVolume] = useState(() => {
    const volumeLocalStorage = localStorage.getItem('playback');
    if (volumeLocalStorage) {
      return JSON.parse(volumeLocalStorage).volume;
    }
    return 1;
  });
  const [isMuted, setIsMuted] = useState(false);

  const preview_url =
    currentSong?.preview_url || currentSong?.audio_preview_url;
  const audioRef = useRef(
    new Audio(
      preview_url ||
        'https://c1-ex-swe.nixcdn.com/NhacCuaTui1010/ChungTaSauNay-TRI-6929586.mp3?st=cXI76wUdMSEV9Lyej4T9AA&e=1667613140&download=true'
    )
  );
  // Variables
  const previewDuration = formatTime(audioRef?.current?.duration);
  const artists = currentSong?.artists;

  const fallbackImg =
    'https://community.spotify.com/t5/image/serverpage/image-id/25294i2836BD1C1A31BDF2?v=v2';

  // Functions
  const handleOnClickArrowUp = () => {
    const popUpEle = $('#popup-container');
    const popUpImg = $('#popup-songImage');
    const footerImg = $('#footer-image');
    const footerAngleUp = $('#footer-angleUp');

    popUpEle.classList.add('popUpEle-show');
    footerImg.classList.add('footerImg-hide');
    popUpImg.setAttribute(
      'src',
      currentSong?.album?.images[0]?.url || fallbackImg
    );
    footerAngleUp.style.display = 'none';
  };

  const handleEventsSong = {
    handleMusic(_isPlaying) {
      if (_isPlaying) {
        dispatch(
          setIsPlaying({
            isPlaying: true,
            idPlayingTrack: currentSong?.id,
            indexPlayingTrack,
            idPlayingPlaylist,
          })
        );
        audioRef?.current.play();
      } else {
        dispatch(
          setIsPlaying({
            isPlaying: false,
            idPlayingTrack: currentSong?.id,
            indexPlayingTrack,
            idPlayingPlaylist,
          })
        );
        audioRef?.current.pause();
      }
    },
    handleAdjustVolume(e) {
      const volumeAdjust = e.target.value / 100;
      audioRef.current.volume = volumeAdjust;
    },
    handleOnTimeUpdate() {
      const _audioCurrentTime = Math.floor(
        (audioRef?.current?.currentTime * 100) / audioRef?.current?.duration
      );
      progressBarRef.current.value = _audioCurrentTime;
      progressBarRef.current.style.backgroundSize =
        _audioCurrentTime + '% 100%';

      currentTime.current.innerHTML = formatTime(
        audioRef?.current?.currentTime
      );
    },
    handleScrubbing(e) {
      const seekTime = (audioRef?.current?.duration / 100) * e.target.value;
      audioRef.current.currentTime = seekTime;
    },
    handleOnEnded() {
      audioRef.current.load();
      dispatch(
        setIsPlaying({ isPlaying: false, idPlayingTrack: currentSong?.id })
      );
      progressBarRef.current.style.backgroundSize = '0% 100%';
    },
    handleVolumeChange() {
      const _currentVolume = audioRef.current.volume;
      const volumeLocalStorage = JSON.stringify({
        volume: _currentVolume,
      });
      localStorage.setItem('playback', volumeLocalStorage);
      setCurrentVolume(_currentVolume);

      if (isMuted) {
        volumeBarRef.current.style.backgroundSize = '0% 100%';
      } else {
        volumeBarRef.current.style.backgroundSize =
          _currentVolume * 100 + '% 100%';
      }
    },
    handleToggleMuted() {
      setIsMuted(!isMuted);

      // Bug: first time click mute setState not return expexted result
      if (!isMuted) {
        audioRef.current.muted = true;

        volumeBarRef.current.style.backgroundSize = '0% 100% !important';
        volumeBarRef.current.value = 0;
      } else {
        audioRef.current.muted = false;
        volumeBarRef.current.value = currentVolume * 100;
        volumeBarRef.current.style.backgroundSize =
          currentVolume * 100 + '% 100%';
      }
    },
  };

  useEffect(() => {
    const audio = audioRef.current;
    const onPlay = () => audio.play();

    if (isPlaying && audio) {
      audio.addEventListener('canplay', () => onPlay());
      onPlay().catch((err) => {
        console.log(err);
      });
      return;
    } else {
      audio.pause();
    }

    return () => {
      if (audio) {
        audio.removeEventListener('canplay', onPlay);
      }
    };
  }, [isPlaying]);

  useEffect(() => {
    progressBarRef.current.style.backgroundSize = '0% 100%';

    return () => {};
  }, [idPlayingTrack]);

  return (
    <footer className={cx('wrapper')}>
      <div className={cx('detail')}>
        <div className={cx('detail-container')}>
          <div id="footer-image" className={cx('image-container')}>
            <img
              className={cx('image')}
              src={currentSong?.album?.images[0]?.url || fallbackImg}
              alt=""
            />
            <Tippy content="Expand" delay={200}>
              <button
                id="footer-angleUp"
                className={cx('btn-anglePopUp')}
                onClick={() => handleOnClickArrowUp()}
              >
                <FontAwesomeIcon icon={faAngleUp} />
              </button>
            </Tippy>
          </div>
          <div className={cx('song-info')}>
            <Link className={cx('name')}>{currentSong?.name}</Link>

            {artists?.map((artist, index) => (
              <Fragment key={index}>
                <Link className={cx('artist')}>{artist.name}</Link>
                {index === artists.length - 1 ? '' : ', '}
              </Fragment>
            ))}
          </div>
        </div>
        <div className={cx('interactions')}>
          <Tippy content="Save to Your Library" delay={200}>
            <button type="button">
              <LikeFooterIcon />
            </button>
          </Tippy>
          <Tippy content="Picture in Picture" delay={200}>
            <button type="button">
              <PictureInPictureIcon />
            </button>
          </Tippy>
        </div>
      </div>
      <div className={cx('player')}>
        <div id="controls" className={cx('controls')}>
          <Tippy content="Enable shuffle" delay={200}>
            <button>
              <FontAwesomeIcon icon={faShuffle} />
            </button>
          </Tippy>
          <Tippy content="Previous" delay={200}>
            <button>
              <FontAwesomeIcon icon={faBackwardStep} />
            </button>
          </Tippy>
          {isPlaying ? ( //1st time default: false
            <Tippy content="Pause" delay={200}>
              <button
                className={cx('play-btn')}
                onClick={() => handleEventsSong.handleMusic(false)}
              >
                <FontAwesomeIcon id="pauseBtn" icon={faPause} />
              </button>
            </Tippy>
          ) : (
            <Tippy content="Play" delay={200}>
              <button
                className={cx('play-btn')}
                onClick={() => handleEventsSong.handleMusic(true)}
              >
                <FontAwesomeIcon
                  id="playBtn"
                  icon={faPlay}
                  style={{ position: 'relative', left: '1px' }}
                />
              </button>
            </Tippy>
          )}

          <Tippy content="Next" delay={200}>
            <button>
              <FontAwesomeIcon icon={faForwardStep} />
            </button>
          </Tippy>
          <Tippy content="Enable repeat" delay={200}>
            <button>
              <FontAwesomeIcon icon={faRepeat} />
            </button>
          </Tippy>
        </div>
        <div className={cx('progress')}>
          <span ref={currentTime}>0:00</span>
          <input
            type="range"
            min="0"
            max="100"
            step="2"
            className={cx('progress-bar', 'song-progress')}
            ref={progressBarRef}
            onInput={(e) => handleEventsSong.handleScrubbing(e)}
          />
          <span>{(isNaN(previewDuration) && '0:30') || previewDuration}</span>
        </div>
      </div>
      <div className={cx('devices')}>
        <Tippy content="Enable repeat" delay={200}>
          <button type="button">
            <LyricsIcon />
          </button>
        </Tippy>
        <Tippy content="Queue" delay={200}>
          <button type="button">
            <QueueIcon />
          </button>
        </Tippy>
        <Tippy content="Connect to a device" delay={200}>
          <button type="button">
            <ConnectToDeviceIcon />
          </button>
        </Tippy>
        <div className={cx('volume-container')}>
          {isMuted ? (
            <Tippy content="Unmute" delay={200}>
              <button
                type="button"
                onClick={() => handleEventsSong.handleToggleMuted()}
              >
                <VolumeOffIcon />
              </button>
            </Tippy>
          ) : (
            <Tippy content="Mute" delay={200}>
              <button
                type="button"
                onClick={() => handleEventsSong.handleToggleMuted()}
              >
                {isMuted || currentVolume === 0 ? (
                  <VolumeOffIcon />
                ) : currentVolume < 0.4 ? (
                  <VolumeLowIcon />
                ) : currentVolume > 0.8 ? (
                  <VolumeHighIcon />
                ) : (
                  <VolumeMediumIcon />
                )}
              </button>
            </Tippy>
          )}

          <input
            type="range"
            min="0"
            max="100"
            ref={volumeBarRef}
            className={cx('progress-bar', 'volume-bar')}
            onInput={(e) => handleEventsSong.handleAdjustVolume(e)}
          />
        </div>
      </div>
      <audio
        // allow="autoplay"
        ref={audioRef}
        src={
          preview_url ??
          'https://c1-ex-swe.nixcdn.com/NhacCuaTui1010/ChungTaSauNay-TRI-6929586.mp3?st=cXI76wUdMSEV9Lyej4T9AA&e=1667613140&download=true'
        }
        onTimeUpdate={() => handleEventsSong.handleOnTimeUpdate()}
        onEnded={() => handleEventsSong.handleOnEnded()}
        onVolumeChange={() => handleEventsSong.handleVolumeChange()}
        onLoadStart={() => {
          progressBarRef.current.value = 0;
          volumeBarRef.current.value = currentVolume * 100;
          audioRef.current.volume = currentVolume;
          volumeBarRef.current.style.backgroundSize =
            currentVolume * 100 + '% 100%';
        }}
      ></audio>
    </footer>
  );
}

export default Footer;
