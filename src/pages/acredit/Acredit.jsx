import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import InfoCard from '../../components/infoCard/InfoCard';
import styles from './Acredit.module.scss';

const Acredit = () => {

    return (
        <>
            <Header title='¿Cuánto querés ingresar?' />
            <main>
                <InfoCard title="Saldo">
                    <p>$0</p>
                </InfoCard>
                <Button>
                    CONTINUAR
                </Button>
            </main>
        </>
    );
}


export default Acredit;