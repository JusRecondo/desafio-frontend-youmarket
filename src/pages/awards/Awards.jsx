import { useState } from 'react';
import styles from './Awards.module.scss';
import Header from '../../components/header/Header';
import AwardsActions from '../../mocks/awards-actions.json';
import ActionsList from '../../components/actionsList/ActionsList';
import AccountsForm from '../../components/accountsForm/AccountsForm';
import SearchBar from '../../components/searchBar/SearchBar';
import Loader from '../../components/loader/Loader';
import { useAccounts } from '../../hooks/useAccounts';

const Awards = () => {
    const [search, setSearch] = useState('');
    const [selectedAccount, setSelectedAccount] = useState(null);
    const { accounts, searchAccountByNameOrEmail, error, loading } = useAccounts({ search });

    const handleAccountChange = e => {
        setSelectedAccount(e.target.value);
    };

    const handleAccountSubmit = e => {
        e.preventDefault();
        alert(selectedAccount);
    };


    const handleSearchChange = (e) => {
        const newSearch = e.target.value;
        setSearch(newSearch);
        searchAccountByNameOrEmail(newSearch);
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
                />
                {!error ? 
                    loading ? 
                    <Loader />
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
