import useSearchBar from './useSearchBar';
import styles from './SearchBar.module.scss';
import React from 'react';

function SearchBar() {
  const {
    onSearchSubmit,
    onChooseTermType,
    onSearchTerm,
    currentSearchedValue,
    currentTermTypeValue
  } = useSearchBar();

  return (
    <div className={styles.searchBar}>
      <div className={styles.termType}>
        <select
          name="termType"
          id="termType"
          value={currentTermTypeValue || ''}
          onChange={(e) => onChooseTermType(e)}
        >
          <option data-testid="select-option-name" value="name">
            Filter by Name
          </option>
          <option data-testid="select-option-species" value="species">
            Filter by Species
          </option>
        </select>
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
