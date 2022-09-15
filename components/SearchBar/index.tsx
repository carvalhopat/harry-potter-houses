import useSearchBar from './useSearchBar';
import styles from './SearchBar.module.scss';

function SearchBar({ onSearch }: any) {
  const { onSearchSubmit, onChooseFilterType, onSearchTerm, currentSearchedValue, currentTermTypeValue } = useSearchBar({
    onSearch
  });

  return (
    <div className={styles.searchBar}>
      <div className={styles.filterType}>
        {/* <label htmlFor="cars">Choose a car:</label> */}
        <select name="filterType" id="filterType" defaultValue={currentTermTypeValue} onChange={(e) => onChooseFilterType(e)}>
          <option value="name">
            Filter by name
          </option>
          <option value="status">Filter by status</option>
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
        {/* <button type="submit">Go</button> */}
      </form>
    </div>
  );
}

export default SearchBar;
