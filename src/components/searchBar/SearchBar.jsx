import styles from './SearchBar.module.scss';

const SearchBar = ({ handleChange, value, placeholder, error }) => {
    return (
        <form className={styles.searchBar} onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="searchAccount" className={styles.searchLabel}>
                <input
                    className={styles.searchInput}
                    type="text"
                    id="searchAccount"
                    onChange={handleChange}
                    value={value}
                    placeholder={placeholder}
                />
            </label>
            {error && <p className={styles.searchError}>{error}</p>}
        </form>
    );
};

export default SearchBar;
