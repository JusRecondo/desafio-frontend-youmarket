import styles from './InfoCard.module.scss';

const InfoCard = ({ title, children, height }) => {


    return (
        <section className={styles.infoCard} style={{height: height}}>
            <h2 className={styles.infoTitle}>{title}</h2>
            {children}
        </section>
    );
};

export default InfoCard;
