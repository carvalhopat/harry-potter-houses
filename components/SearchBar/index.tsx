import useSearchBar from './useSearchBar';
import styles from './SearchBar.module.scss';
import React, { useState } from 'react';
import Image from 'next/image';

function SearchBar() {
  const {
    onSearchSubmit,
    onChooseTermType,
    onSearchTerm,
    currentSearchedValue,
    currentTermTypeValue
  } = useSearchBar();

  const [mostrar, setMostrar] = useState(false);
  const lista = ['Name', 'Species'].filter((type) => type !== currentTermTypeValue);

  return (
    <div className={styles.searchBar}>
      <div className={styles.termType}>
        <div className={styles.selectedOption} onClick={() => setMostrar(!mostrar)}>
          Filter by {currentTermTypeValue}
          <Image src="/arrow-down.svg" width="10" height="10" alt="Open house's menu" />
        </div>
        {mostrar &&
          lista.map((type) => (
            <div
              className={styles.menuOptions}
              key={type}
              onClick={() => {
                onChooseTermType(type);
                setMostrar(false);
              }}
              data-testid={`select-option-${type}`}
            >
              {type}
            </div>
          ))}
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
