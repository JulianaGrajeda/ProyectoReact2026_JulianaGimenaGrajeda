import styles from './ItemList.module.css';
import { useState, useRef } from "react";

function ItemList({items, Componente, mensaje}){
    
    return(
        <div className={styles.itemsContainer}>

            <h1 className={styles.tituloProductos}>{mensaje}</h1>

            <div className={styles.itemsCards}>
                {
                    items.map((item) => (
                        <Componente key={item.id} {...item} />
                    ))
                }
            </div>
        </div>
    );
}

export default ItemList;