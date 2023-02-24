import { useState, useRef, useEffect } from "react";

// Styles
import styles from "./styles.module.scss";

function SearchBox({ setSearchTerm }) {
  const [isActive, setIsActive] = useState(false);
  const [searchFieldVal, setSearchFieldVal] = useState("");
  const searchInputRef = useRef(null);

  const handleSubmission = (evt) => {
    evt.preventDefault();

    setSearchTerm(searchFieldVal);
    setSearchFieldVal("");
  };

  const handleOnChange = (evt) => {
    setSearchFieldVal(evt.target.value);
  };

  const handleClick = () => {
    setIsActive((prevState) => (prevState = !prevState));
  };

  useEffect(() => {
    searchInputRef.current.focus();

    return () => {
      searchInputRef.current.blur();
    };
  }, [isActive]);

  return (
    <form
      className={`${styles.search} ${isActive ? styles.searchActive : ""}`}
      id="search-bar"
      onSubmit={handleSubmission}
    >
      <input
        type="search"
        className={styles.input}
        placeholder="Search by location"
        ref={searchInputRef}
        value={searchFieldVal}
        onChange={handleOnChange}
      />

      <button
        type="button"
        className={styles.button}
        id="search-button"
        onClick={handleClick}
      >
        <i className={`ri-search-2-line ${styles.icon}`}></i>
        <i className={`ri-close-fill ${styles.close}`}></i>
      </button>
    </form>
  );
}

export default SearchBox;
