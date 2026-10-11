import styles from './ItemsProductos.module.css';
import { useState, useEffect } from "react";


function ItemsProductos({id, nombre, precio, stock, imagen}){

    const [cantidad, setCantidad] = useState(0);

    const [esFavorito, setEsFavorito] = useState(false);
    
    useEffect(() => {
        console.log("El componente se renderizó ")
    }, []);

    const incrementar = () => {

        if (cantidad < stock){
            setCantidad(cantidad + 1);
        }
    }

    const decrementar = () => {

        if (cantidad > 0){
            setCantidad(cantidad - 1);
        }
    }

    const agregarAlCarrito = () => {
        alert(`Agregaste ${cantidad} unidades de ${nombre} al carrito.`)
    }

    const agregarFavorito = () => {
        setEsFavorito(!esFavorito);
    }

    return(
        <div className={styles.card}>
            

            <div className={styles.cardTitle}>
                <span
                    onClick={agregarFavorito}
                >
                    {esFavorito ? <i class="fa-solid fa-heart" ></i> : <i class="fa-regular fa-heart"></i>}
                </span>
            </div>
            
            <img src={imagen} alt={nombre} className={styles.imagenProducto}/>

            <div className={styles.productoInfo}>
                <h3>{nombre}</h3>

                <p>Precio: ${precio}</p>
                <p>Stock: {stock}</p>
            </div>

            <div className={styles.contador}>
                <button onClick={decrementar}>-</button>
                <p>{cantidad}</p>
                <button onClick={incrementar}>+</button>
            </div>

            <button onClick={agregarAlCarrito} className={styles.agregarCarritoBtn}>Agregar al Carrito</button>

        </div>
    );
}

export default ItemsProductos;