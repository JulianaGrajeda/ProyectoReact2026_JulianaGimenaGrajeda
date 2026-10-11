import styles from './HeroTienda.module.css';
import banner from '../../assets/bannerDollz.png';

function HeroTienda(){
    return(
        <section className={styles.heroBanner}>
            <img src={banner} alt="banner adollz" />
        </section>
    );
}

export default HeroTienda;