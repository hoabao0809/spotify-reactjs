import React, { Fragment } from 'react';
import styles from './TopItem.module.scss';
import classNames from 'classnames/bind';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { getAverageRGB } from '~/utils';
import { useDispatch, useSelector } from 'react-redux';
import { addTracksToStore } from '~/store/actionsCreator/player';
import { selectIsPlayingTrack, setIsPlaying } from '~/store/reducers/player';

const cx = classNames.bind(styles);

function TopItem({ topItem }) {
  const dispatch = useDispatch();
  const { isPlaying, idPlayingTrack, indexPlayingTrack, idPlayingPlaylist } =
    useSelector(selectIsPlayingTrack);

  // Function handles changing linear background when mousing over top items
  const handleOnMouseOver = (e) => {
    const topItemWrapper = e.target.closest('#topItem');
    const imgEle = topItemWrapper.querySelector('img');
    const dominantImgColor = getAverageRGB(imgEle);

    const { b, g, r } = dominantImgColor;
    const bgColor = `rgb(${r},${g},${b})`;
    document.querySelector('#linear-gradient').style.backgroundColor = bgColor;
  };

  const handlePlayPlaylist = (item, playingMode) => {
    const { id, type } = item;

    if (item) {
      if (playingMode) {
        dispatch(
          addTracksToStore({ id, type }, (tracks) => {
            dispatch(
              setIsPlaying({
                isPlaying: true,
                idPlayingTrack: tracks && tracks[0].id,
                indexPlayingTrack: 0,
                idPlayingPlaylist: id,
              })
            );
          })
        );
      } else {
        dispatch(
          setIsPlaying({
            isPlaying: false,
            idPlayingTrack,
            indexPlayingTrack,
            idPlayingPlaylist: id,
          })
        );
      }
    }
  };

  return (
    <Fragment>
      <div
        id="topItem"
        className={cx('wrapper')}
        onMouseOver={(e) => handleOnMouseOver(e)}
      >
        <div className={cx('image-container')}>
          <img className={cx('image')} src={topItem.images[0].url} alt="" />
        </div>
        <div className={cx('detail')}>
          {topItem.name}

          <Button
            play
            className={cx('button', {
              'playBtn-clicked': isPlaying && topItem?.id === idPlayingPlaylist,
            })}
            onClick={() =>
              handlePlayPlaylist(
                topItem,
                isPlaying && topItem?.id === idPlayingPlaylist ? false : true
              )
            }
          >
            <FontAwesomeIcon
              className={cx('play-icon')}
              icon={
                isPlaying && topItem?.id === idPlayingPlaylist
                  ? faPause
                  : faPlay
              }
            />
          </Button>
          {/* <Button play className={cx('button')}>
            <FontAwesomeIcon icon={faPlay} />
          </Button> */}
        </div>
      </div>
    </Fragment>
  );
}

export default TopItem;
