import React, { useState } from 'react';
import styles from './Discography.module.scss';
import classNames from 'classnames/bind';
import { CategoryWrapper, RowSixSongs } from '~/components';

const cx = classNames.bind(styles);

const ALBUM_TYPES = {
  album: { name: 'Albums', type: 'album' },
  single: { name: 'Singles and EPs', type: 'single' },
  compilation: { name: 'Compilations', type: 'compilation' },
  appears_on: { name: 'Appears On', type: 'appears_on' },
};

function Discography({ albums }) {
  // Generate Set of album types group
  const setTypes = new Set(albums?.map((item) => item.album_group));
  const availableTypes = [];
  setTypes.forEach((type) => {
    const typeItem = ALBUM_TYPES[type];
    availableTypes.push(typeItem);
  });

  const [selectedType, setSelectedType] = useState();

  // Filter albums item by selected type
  const albumItemsByType = albums
    ?.filter(
      (album) =>
        (selectedType && album.album_group === selectedType) ||
        (!selectedType && availableTypes[0]?.type)
    )
    .slice(0, 6);

  return (
    <CategoryWrapper title="Discography" className={cx('wrapper')}>
      <div className={cx('nav-items')}>
        {availableTypes.map((item, index) => {
          return (
            <div
              key={index}
              className={cx('nav-link', {
                active:
                  (!selectedType && item.type === availableTypes[0]?.type) ||
                  (selectedType && item.type === selectedType),
              })}
              onClick={() => setSelectedType(item.type)}
            >
              {item.name}
            </div>
          );
        })}
      </div>

      <div className={cx('content')}>
        <RowSixSongs items={albumItemsByType} />
      </div>
    </CategoryWrapper>
  );
}

export default Discography;
