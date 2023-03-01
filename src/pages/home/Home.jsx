import Header from '../../components/header/Header';
import styles from './Home.module.scss';

const Home = () => {

    const userName = 'Test';

    return (
        <>
            <Header title={`¡Hola ${userName}!`}/>
        </>
    );
}


export default Home;