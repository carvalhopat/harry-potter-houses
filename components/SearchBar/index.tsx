import useSearchBar from './useSearchBar';
import styles from './SearchBar.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';
import cx from 'classnames';
import MenuDropdown from '../MenuDropdown';

function SearchBar() {
  const {
    onSearchSubmit,
    onChooseTermType,
    onSearchTerm,
    currentSearchedValue,
    currentTermTypeValue,
    menuOptions
  } = useSearchBar();

  return (
    <div className={styles.searchBar}>
      <div className={styles.termType}>
        <MenuDropdown
          selectedOption={`Filter by ${currentTermTypeValue}`}
          customClass={cx(styles.selectedOption)}
        >
          {menuOptions.map((type) => (
            <div
              className={styles.typeOption}
              key={type}
              onClick={() => onChooseTermType(type)}
              data-testid={`select-option-${type}`}
            >
              {type}
            </div>
          ))}
        </MenuDropdown>
      </div>

      <form onSubmit={(e) => onSearchSubmit(e)}>
        <input
          onChange={(e) => onSearchTerm(e)}
          id="search"
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search..."
          defaultValue={currentSearchedValue}
        />
      </form>
    </div>
  );
}

export default SearchBar;
