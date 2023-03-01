import styles from './Button.module.scss';

const Button = ({ children, handleClick, disabled = false }) => {
    return (
        <button
            className={styles.button}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
