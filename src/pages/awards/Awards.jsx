import Header from '../../components/header/Header';
import styles from './Awards.module.scss';
import AwardsActions from '../../mocks/awards-actions.json';
import ActionsList from '../../components/actionsList/ActionsList';
import AccountsForm from '../../components/accountsForm/AccountsForm';
import AccountsMock from '../../mocks/accounts.json';
import { useCallback, useMemo, useState } from 'react';
import SearchBar from '../../components/searchBar/SearchBar';
import { useAccounts } from '../../hooks/useAccounts';
import { useSearch } from '../../hooks/useSearch';
import { debounce } from '../../lib/debounce';

const Awards = () => {
    const { search, setSearch, searchError } = useSearch();
    const { accounts, searchAccountByNameOrEmail, error, loading } = useAccounts({ search });
    const [selectedAccount, setSelectedAccount] = useState(null);

    const handleAccountChange = e => {
        setSelectedAccount(e.target.value);
    };

    const handleAccountSubmit = e => {
        e.preventDefault();
        alert(selectedAccount);
    };


    const debouncedGetAccounts = useCallback(debounce(search => {
        searchAccountByNameOrEmail(search);
    }, 300), []);

    const handleSearchChange = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
        debouncedGetAccounts(newSearch);
    }


    return (
        <>
            <Header title="¿A quién querés premiar?" />
            <main>
                <ActionsList actions={AwardsActions} title="Nuevas cuentas" />
                <SearchBar
                    handleChange={handleSearchChange}
                    value={search}
                    placeholder="Buscar por nombre o email"
                    error={searchError}
                />
                {!error ? 
                    loading ? 
                    <p>Cargando cuentas...</p>
                    :
                    <AccountsForm
                        accounts={accounts}
                        handleChange={handleAccountChange}
                        handleSubmit={handleAccountSubmit}
                        checkedOption={selectedAccount}
                    />
                : <p className={styles.errorMessage}>{error}</p>
                }
            </main>
        </>
    );
};

export default Awards;
