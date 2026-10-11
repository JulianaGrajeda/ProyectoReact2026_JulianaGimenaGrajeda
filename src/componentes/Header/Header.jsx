import styles from './Header.module.css';
import logo from '../../assets/logo.png';

function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.headerContent}>

                <a href="#Home"><img className={styles.logo} src={logo} alt="logo"/></a>

                <nav className={styles.navMenu}>
                    <ul className={styles.navList}>
                        <li><a className={styles.navItem} href="#Home">Inicio</a></li>
                        <li><a className={styles.navItem} href="#Integrantes">Integrantes</a></li>
                        <li><a className={styles.navItem} href="#Merch">Merch</a></li>
                        <li><a className={styles.navItem} href="#">Contacto</a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

export default Header;