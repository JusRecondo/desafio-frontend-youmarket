import styles from './InfoCard.module.scss';

const InfoCard = ({ title, children }) => {

    return (
        <section className={styles.infoCard}>
            <h2 className={styles.infoTitle}>{title}</h2>
            {children}
        </section>
    );
};

export default InfoCard;
