import Button from "../../components/button/Button";
import Header from "../../components/header/Header";
import { useAuth } from "../../context/AuthContext";

const Settings = () => {
    const auth = useAuth();

    const handleClick = () => {
        auth.logout();
    }

    return (
        <>
            <Header title="Ajustes" />
            <main>
                <Button onClick={handleClick}>
                    Cerrar Sesión
                </Button>
            </main>
        </>
    );
}

export default Settings;