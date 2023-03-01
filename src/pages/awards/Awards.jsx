import Header from '../../components/header/Header';
import styles from './Awards.module.scss';
import AwardsActions from '../../mocks/awards-actions.json';
import ActionsList from '../../components/actionsList/ActionsList';
import AccountsForm from '../../components/accountsForm/AccountsForm';
import Accounts from '../../mocks/accounts.json';
import { useState } from 'react';

const Awards = () => {
    const [selectedAccount, setSelectedAccount] = useState(null);

    const handleAccountChange = e => {
        setSelectedAccount(e.target.value);
    };

    const handleAccountSubmit = e => {
        e.preventDefault();
        alert(selectedAccount);
    };

    return (
        <>
            <Header title="¿A quién querés premiar?" />
            <main>
                <ActionsList actions={AwardsActions} title="Nuevas cuentas" />
                <p>/ buscador /</p>
                <AccountsForm
                    accounts={Accounts}
                    handleChange={handleAccountChange}
                    handleSubmit={handleAccountSubmit}
                    checkedOption={selectedAccount}
                />
            </main>
        </>
    );
};

export default Awards;
