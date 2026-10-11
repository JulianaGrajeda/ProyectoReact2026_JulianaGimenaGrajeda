import styles from './BotonSubir.module.css';

function BotonSubir(){
    return(
        <a href="#" className={styles.btnSubir} title="Volver al inicio">
            <i className="fa-solid fa-chevron-up"></i>
        </a>
    );
}

export default BotonSubir;