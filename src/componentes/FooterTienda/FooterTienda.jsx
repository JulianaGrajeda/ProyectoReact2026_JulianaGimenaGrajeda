import styles from './FooterTienda.module.css';
import { Link } from "react-router-dom";


function FooterTienda(){
    return(

        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                
                <div className={styles.footerTop}>
                    <nav className={styles.navFooter}>
                        <ul className={styles.navListFooter}>
                            <li><Link to="/#Home"  className={styles.navItemFooter} >Inicio</Link></li>
                            <li><Link to="/#Integrantes"  className={styles.navItemFooter} >Integrantes</Link></li>
                            <li><Link to="/#Merch"  className={styles.navItemFooter} >Merch</Link></li>
                            <li><Link to="/"  className={styles.navItemFooter} >Contacto</Link></li>
                        </ul>
                    </nav>
                </div>

                <hr className={styles.footerDivider} />

                <div className={styles.footerBottom}>

                    <div className={styles.footerInfo}>
                        <p className={styles.footerText}>© 2024 Mi Aplicación. Todos los derechos reservados.</p>
                    </div>

                    <div className={styles.socialMedia}>
                        <a href="https://www.instagram.com/adollz.oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i class="fa-brands fa-instagram"></i></a>
                        <a href="https://www.tiktok.com/@adollz.oficial?is_from_webapp=1&sender_device=pc"><i class="fa-brands fa-tiktok"></i></a>
                        <a href="https://www.youtube.com/@ADOLLZ"><i class="fa-brands fa-youtube"></i></a>
                        <a href="https://x.com/AdollzOficial?s=20"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://open.spotify.com/intl-es/artist/1u98tBOXzodOmuGbqXTedL?si=5u4icxL2Sh6q23cxT-M_HA"><i class="fa-brands fa-spotify"></i></a>
                    </div>

                </div>
            </div>
        </footer>
    );
}

export default FooterTienda;