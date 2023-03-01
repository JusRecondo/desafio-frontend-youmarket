import styles from './Button.module.scss';

const Button = ({ children, handleClick, customClass, disabled = false }) => {
    return (
        <button
            className={`${styles.button} ${customClass}`}
            onClick={handleClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
