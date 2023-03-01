import styles from './InfoCard.module.scss';

const InfoCard = ({ children }) => {

    return (
        <section className={styles.infoCard}>
            {children}
        </section>
    );
};

export default InfoCard;
