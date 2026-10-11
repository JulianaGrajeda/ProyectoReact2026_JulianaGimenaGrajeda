import ItemsProductos from '../../componentes/ItemsProductos/ItemsProductos';
import styles from './Productos.module.css';
import ItemListContainer from '../../componentes/ItemListContainer/ItemListContainer'

function Productos(){
    return(
        <section id="Productos" className={styles.productosSection}>
            
            <div className={styles.productosContainer}>

                <div className={styles.productosCards}>
                    <ItemListContainer url="/data/productos.json" Componente={ItemsProductos} mensaje="PRODUCTOS"/>
                </div>
            </div>
        
        </section>
    );
}

export default Productos;
