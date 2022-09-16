import useSearchBar from './useSearchBar';
import styles from './SearchBar.module.scss';
import React from 'react';

function SearchBar() {
  const {
    onSearchSubmit,
    onChooseFilterType,
    onSearchTerm,
    currentSearchedValue,
    currentTermTypeValue
  } = useSearchBar();

  return (
    <div className={styles.searchBar}>
      <div className={styles.filterType}>
        <select
          name="filterType"
          id="filterType"
          defaultValue={currentTermTypeValue}
          onChange={(e) => onChooseFilterType(e)}
        >
          <option data-testid="select-option-name" value="name">Filter by name</option>
          <option data-testid="select-option-status" value="status">Filter by status</option>
        </select>
      </div>

      <form onSubmit={(e) => onSearchSubmit(e)}>
        <input
          onChange={(e) => onSearchTerm(e)}
          id="search"
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search"
          defaultValue={currentSearchedValue}
        />
      </form>
    </div>
  );
}

export default SearchBar;
