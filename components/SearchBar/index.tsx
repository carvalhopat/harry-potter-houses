import useSearchBar from "./useSearchBar";
import styles from "./SearchBar.module.scss";

function SearchBar({ onSearch }: any) {
  const { onSearchSubmit, onChooseFilterType, onTypeTerm, currentValue } =
    useSearchBar({ onSearch });

  return (
    <div className={styles.searchBar}>
      <div className={styles.filterType}>
        {/* <label htmlFor="cars">Choose a car:</label> */}
        <select
          name="filterType"
          id="filterType"
          onChange={(e) => onChooseFilterType(e)}
        >
          <option value="name" selected>
            Filter by name
          </option>
          <option value="status">Filter by status</option>
        </select>
      </div>

      <form onSubmit={(e) => onSearchSubmit(e)}>
        <input
          onChange={(e) => onTypeTerm(e)}
          id="search"
          type="text"
          name="search"
          autoComplete="off"
          placeholder="Search"
          defaultValue={currentValue}
        />
        {/* <button type="submit">Go</button> */}
      </form>
    </div>
  );
}

export default SearchBar;
