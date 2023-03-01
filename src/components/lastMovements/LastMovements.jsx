import styles from './LastMovements.module.scss';

const LastMovements = ({ movements }) => {
    return (
        <section className={styles.lastMovements}>
            <h2>Últimos Movimientos</h2>
            {movements && movements.length ? (
                <ul className={styles.lastMovementsList}>
                    {movements.map(movement => (
                        <li key={movement.id} 
                            className={`${styles.listItem} ${styles[movement.type]}`}
                        >
                            <p>
                                {movement.description}
                            </p>
                            <p className={styles.details}>
                                {movement.type === 'income' ? 
                                `+${movement.amount}`
                                :
                                `-${movement.amount}`}
                                <br />
                                {movement.date}
                            </p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay movimientos disponibles.</p>
            )}
        </section>
    );
};

export default LastMovements;
