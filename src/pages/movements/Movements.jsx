import Header from "../../components/header/Header";
import LastMovements from "../../components/lastMovements/LastMovements";
import MovementsMock from '../../mocks/last-movements.json';

const Movements = () => {
    return (
        <>
            <Header title='Movimientos' />
            <main>
                <LastMovements movements={MovementsMock}/>
            </main>
        </>
    );
}

export default Movements;