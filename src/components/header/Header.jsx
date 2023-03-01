import { useNavigate } from 'react-router-dom';
import styles from './Header.module.scss';
import BackBtnIcon from './backbtn-icon.svg';

const Header = ({ title, showBackButton = true }) => {
    const navigate = useNavigate();

    return (
        <header className={styles.header}>
            {showBackButton && (
                <button className={styles.backBtn} onClick={() => navigate(-1)}>
                    <img src={BackBtnIcon} alt="Volver a página anterior" />
                </button>
            )}
            <h1 className={styles.title}>{title}</h1>
        </header>
    );
};

export default Header;
