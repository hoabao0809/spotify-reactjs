import React, { useEffect, useRef, useState } from 'react';
import styles from './SearchOutput.module.scss';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';

import { MainViewWrapper, EndingSeparation } from '~/pages/_components';
import config from '~/config';
import { SearchNavItem, SearchAll } from '~/pages/Search';
import { addType, selectSearchState } from '~/store/reducers/search';
import { useDispatch, useSelector } from 'react-redux';
import { useDebounce } from '~/hooks';
import { searchApi } from '~/api';

const cx = classNames.bind(styles);
const $ = document.querySelector.bind(document);

function SearchOutput() {
  const dispatch = useDispatch();

  const navbarSearchRef = useRef();
  let { keyword } = useParams();
  const searchType = useSelector(selectSearchState).type;
  const [availableTypes, setAvailableTypes] = useState(['all']);
  const newKeyword = useDebounce(keyword, 2000);
  const types =
    'album%2Cartist%2Cplaylist%2Ctrack%2Cshow%2Cepisode%2Caudiobook';
  const props = {};
  let SearchComponent = 'SearchAll';

  // Fetch search all types API and filter out empty types => dynamically render search navbar
  useEffect(() => {
    searchApi
      .getSearch(newKeyword, types, 'VN', 1)
      .then((response) => {
        if (!response) {
          throw new Error('Could not fetch data');
        }
        const filteredNullSearch = Object.keys(response).filter(
          (result) => response[result].items.length > 0
        );
        filteredNullSearch.unshift('all');
        setAvailableTypes(filteredNullSearch);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [newKeyword]);

  // Reset type in store to null when directing to another page
  useEffect(() => {
    return () => {
      dispatch(addType(null));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Handle navbar search sticky when scrolling
  useEffect(() => {
    const rightPaneEle = $('#rightPane');
    const navbarSearch = navbarSearchRef.current;
    rightPaneEle.addEventListener('scroll', () => {
      if (rightPaneEle.scrollTop > 200) {
        navbarSearch.classList.add('navbarSearchRef-sticky');
      } else {
        navbarSearch.classList.remove('navbarSearchRef-sticky');
      }
    });

    return () => {
      rightPaneEle.removeEventListener('scroll', () => {});
      navbarSearch.classList.remove('navbarSearchRef-sticky');
    };
  }, []);

  // Filter Component in config to render
  if (searchType) {
    SearchComponent = config.searchTypes[searchType].component;

    // Pass props (customized css) to Card Component
    switch (searchType) {
      case 'albums':
        props.customAlbumSearch = true;
        break;

      case 'artists':
        props.roundImg = true;
        break;

      case 'playlists':
        props.customPlaylistSearch = true;
        break;

      case 'shows':
        props.customShowSearch = true;
        break;
      default:
        break;
    }
  }

  // Handle when click navbar search button
  const handleClickType = (typeSelected) => {
    dispatch(addType(typeSelected));
  };

  return (
    <MainViewWrapper className={cx('custom-wrapper')}>
      <div ref={navbarSearchRef} className={cx('navbar')}>
        <div className={cx('container')}>
          {availableTypes?.map((type, index) => {
            const typeItem = config.searchTypes[type];

            return (
              <SearchNavItem
                key={index}
                className={cx('nav-item')}
                to={`/search/${keyword}${typeItem.to}`}
                onClick={() => handleClickType(typeItem.type)}
                name={typeItem.name}
              />
            );
          })}
        </div>
      </div>

      <div className={cx('outputs')}>
        {searchType == null ? (
          <SearchAll keyword={keyword} />
        ) : (
          <SearchComponent
            keyword={keyword}
            searchType={searchType}
            {...props}
          />
        )}
      </div>

      <EndingSeparation />
    </MainViewWrapper>
  );
}

export default SearchOutput;
