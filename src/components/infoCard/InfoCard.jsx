import styles from './InfoCard.module.scss';

const InfoCard = ({ title, children, height, customClass }) => {


    return (
        <section className={`${styles.infoCard} ${customClass ?? ''}`} style={{height: height}}>
            <h2 className={styles.infoTitle}>{title}</h2>
            {children}
        </section>
    );
};

export default InfoCard;
