import styles from './Button.module.scss';

const Button = ({ children, handleClick, customClass, disabled = false, type = 'button' }) => {
    return (
        <button
            className={`${styles.button} ${customClass}`}
            onClick={handleClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
