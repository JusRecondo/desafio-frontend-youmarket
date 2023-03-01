import styles from './SearchBar.module.scss';

const SearchBar = ({ handleChange, value, placeholder }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
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
        </form>
    );
};

export default SearchBar;
