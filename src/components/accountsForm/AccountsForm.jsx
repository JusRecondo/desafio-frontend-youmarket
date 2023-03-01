import Button from '../button/Button';
import styles from './AccountsForm.module.scss';

const Accounts = ({ accounts, handleChange, handleSubmit, checkedOption }) => {
    const printInitials = string => {
        return string
            .split(' ')
            .map(word => word[0])
            .join('');
    };

    return (
        <section>
            <h2 className={styles.title}>Tus cuentas</h2>

            {accounts && accounts.length ? (
                <form onSubmit={handleSubmit} className={styles.accountsForm}>
                    {accounts.map(account => (
                        <label className={styles.accountLabel} key={account.id}>
                            <span className={styles.initials}>
                                {printInitials(account.name)}
                            </span>
                            {account.name} <br />
                            {account.email}
                            <input
                                type="radio"
                                name="account"
                                value={account.name}
                                onChange={handleChange}
                                checked={checkedOption === account.name}
                                className={styles.accountInput}
                            />
                        </label>
                    ))}
                    <Button type="submit">CONTINUAR</Button>
                </form>
            ) : (
                <p>No hay cuentas disponibles.</p>
            )}
        </section>
    );
};

export default Accounts;
