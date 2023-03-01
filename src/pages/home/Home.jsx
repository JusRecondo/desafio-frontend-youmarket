import ActionsList from '../../components/actionsList/ActionsList';
import Header from '../../components/header/Header';
import InfoCard from '../../components/infoCard/InfoCard';
import styles from './Home.module.scss';
import HomeActions from '../../mocks/home-actions.json';

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
                    <h2 className={styles.infoTitle}>
                        Mi Saldo
                    </h2>
                    <strong className={styles.credit}>{userData.credit}</strong>
                </InfoCard>
                <ActionsList actions={HomeActions} />
            </main>
        </>
    );
};

export default Home;
