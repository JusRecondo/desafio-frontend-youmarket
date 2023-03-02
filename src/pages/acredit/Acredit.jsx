import { useState } from 'react';
import Button from '../../components/button/Button';
import CurrencyInput from '../../components/currencyInput/CurrencyInput';
import Header from '../../components/header/Header';
import InfoCard from '../../components/infoCard/InfoCard';
import styles from './Acredit.module.scss';

const Acredit = () => {

    const [credit, setCredit] = useState('$0');

    const handleInputCurrencyChange = (e) => {
        setCredit(e.target.value);
    }


    return (
        <>
            <Header title='¿Cuánto querés ingresar?' />
            <main className={styles.main}>
                <InfoCard title="Saldo" height="200px">
                    <CurrencyInput handleChange={handleInputCurrencyChange} value={credit}/>
                </InfoCard>
                <Button disabled={credit === '$0' || credit === ''}>
                    Continuar
                </Button>
            </main>
        </>
    );
}


export default Acredit;