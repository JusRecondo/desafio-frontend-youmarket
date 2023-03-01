import { Link } from 'react-router-dom';
import styles from './ActionsList.module.scss';

const ActionsList = ({ actions }) => {
    return (
        <section>
            <h2 className={styles.title}>Acciones</h2>

            {actions && actions.length ? (
                <ul className={styles.actionsList}>
                    {actions.map(action => (
                        <li key={action.id} className={styles.listItem}>
                            <Link to={action.path}>
                                <img
                                    src={action.icon}
                                    alt={action.name}
                                    className={styles.actionIcon}
                                />
                                <p className={styles.actionName}>{action.name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No hay acciones disponibles.</p>
            )}
            
        </section>
    );
};

export default ActionsList;
