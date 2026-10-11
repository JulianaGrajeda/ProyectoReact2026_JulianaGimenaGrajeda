import ItemListContainer from '../../componentes/ItemListContainer/ItemListContainer';
import styles from './Integrantes.module.css'
import ItemIntegrantes from '../../componentes/ItemsIntegrantes/ItemIntegrantes';

function Integrantes(){
    return(
        <section id="Integrantes" className={styles.integrantesSection}>
            <ItemListContainer url="/data/integrantes.json" Componente={ItemIntegrantes} mensaje="INTEGRANTES"/>
        </section>
    );
}

export default Integrantes;