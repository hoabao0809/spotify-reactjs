import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { faSearch, faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';

import styles from './SearchBar.module.scss';

const cx = classNames.bind(styles);

function SearchBar() {
  const navigate = useNavigate(null);
  const inputRef = useRef(null);

  const [searching, setSearching] = useState(false);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Handle onChange Search Input and navigate to SearchResult Component
  const handleOnChange = (e) => {
    const search = e.target.value.trim() || 'browse';
    e.target.value ? setSearching(true) : setSearching(false);
    navigate(`/search/${search}`);
  };

  const handleEraseSearch = () => {
    inputRef.current.value = '';
    inputRef.current.focus();
    setSearching(false);
    navigate(`/search/browse`);
  };

  return (
    <div className={cx('wrapper')}>
      <FontAwesomeIcon
        className={cx('icon-search')}
        icon={faSearch}
        onClick={() => inputRef.current.focus()}
      />
      <input
        type="text"
        name="search"
        className={cx('input')}
        placeholder="What do you want to listen to?"
        onChange={(e) => handleOnChange(e)}
        ref={inputRef}
        spellCheck={false}
      />
      {searching && (
        <FontAwesomeIcon
          className={cx('icon-clear')}
          icon={faClose}
          onClick={() => handleEraseSearch()}
        />
      )}
    </div>
  );
}

export default SearchBar;
