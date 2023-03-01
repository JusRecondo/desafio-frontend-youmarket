import ActionsList from '../../components/actionsList/ActionsList';
import Header from '../../components/header/Header';
import InfoCard from '../../components/infoCard/InfoCard';
import styles from './Home.module.scss';
import HomeActions from '../../mocks/home-actions.json';
import MovementsMock from '../../mocks/last-movements.json';
import LastMovements from '../../components/lastMovements/LastMovements';

const Home = () => {
    const userData = {
        name: 'Test',
        credit: '$10.000,00',
    };

    return (
        <>
            <Header title={`¡Hola ${userData.name}!`} showBackButton={false} />
            <main>
                <InfoCard title="Mi Saldo" height="120px">
                    <strong className={styles.credit}>{userData.credit}</strong>
                </InfoCard>
                <ActionsList actions={HomeActions} title="Acciones" />
                <LastMovements movements={MovementsMock} />
            </main>
        </>
    );
};

export default Home;
