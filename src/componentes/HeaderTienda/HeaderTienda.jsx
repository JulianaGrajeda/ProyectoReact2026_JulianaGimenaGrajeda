import logo from '../../assets/logo.png';
import styles from './HeaderTienda.module.css';
import { Link } from 'react-router-dom';

export function HeaderTienda(){
    return(
        <header className={styles.headerTienda}>
            <div className={styles.headerTiendaContent}>
                <Link to="/" className={styles.merchButton}><img className={styles.logoTienda} src={logo} alt="Logo de Adollz" /></Link>
                <h1>Merch Oficial</h1>
            </div>
        </header>
    );
}

export default HeaderTienda;