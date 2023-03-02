import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/button/Button';
import Header from '../../components/header/Header';
import { useAuth } from '../../context/AuthContext';
import styles from './Login.module.scss';

const Login = () => {
    const [userCredential, setUserCredential] = useState('');
    const [error, setError] = useState(null);
    const auth = useAuth();
    const navigate = useNavigate();

    const handleChange = (e) => { 
        if(e.target.value === '') {
            setError('Por favor ingrese su CUIT o email.')
        } else {
            setUserCredential(e.target.value);
            setError(null);
        }
    }

    const handleLogin = (e) => {
        e.preventDefault();
        auth.login(userCredential);
        navigate("/", { replace: true });
    }

    return (
        <>
            <Header title="Iniciar sesión" showBackButton={false}/>
            <main className={styles.loginMain}>
                <form onSubmit={handleLogin}>
                    <label htmlFor="user" className={styles.label}>
                        <input type="text" id="user" value={userCredential} onChange={handleChange} placeholder="CUIT o Correo Electrónico" className={styles.userInput}/>
                    </label>
                    {error && <p className="error-message">{error}</p>}
                    <Button type="submit" disabled={userCredential === ''}>
                        Iniciar Sesión
                    </Button>
                </form>
                <Link to="/register" className={styles.registerLink}>
                    Aún no tengo cuenta
                </Link>
            </main>
        </>
    );
}


export default Login;

