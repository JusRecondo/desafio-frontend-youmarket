import Header from '../../components/header/Header';
import InfoCard from '../../components/infoCard/InfoCard';
import styles from './Home.module.scss';

const Home = () => {
    const userData = {
        name: 'Test',
        credit: '$10.000,00',
    };

    return (
        <>
            <Header title={`¡Hola ${userData.name}!`} />
            <main>
                <InfoCard>
                    <p className={styles.infoCredit}>
                        Mi Saldo: <strong>{userData.credit}</strong>
                    </p>
                </InfoCard>
            </main>
        </>
    );
};

export default Home;
