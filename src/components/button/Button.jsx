import styles from './Button.module.scss';

const Button = ({ children, onClick, customClass, disabled = false, type = 'button' }) => {
    return (
        <button
            className={`${styles.button} ${customClass ?? ''}`}
            onClick={onClick}
            disabled={disabled}
            type={type}
        >
            {children}
        </button>
    );
};

export default Button;
