import styles from './ItemIntegrantes.module.css';
import card from '../../assets/carta.png';
import Inclinacion from '../Inclinacion3D/Inclinacion';
import { useRef } from 'react';

function ItemIntegrantes({ID, nombre, rol, imagen, color}){

    const cartaRef = useRef(null);

    const handleMouseMove = (e) => {
        const { rotarX, rotarY } = Inclinacion(e, cartaRef.current);

        cartaRef.current.style.transform =
        `perspective(800px) rotateX(${rotarX}deg) rotateY(${rotarY}deg) scale(1.05)`;
    };

    const handleMouseLeave = () => {
        cartaRef.current.style.transform =
        "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    };

    return(
        <>
            <div
                ref={cartaRef}
                className={styles.integranteContent}
                style={{ "--color-brillo": color }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
            >

                <div className={styles.integranteContent}>

                    <img className={styles.card} src={card} alt="carta" />
                    
                    <div className={styles.integranteCard}>

                        <div className={styles.imagenContainer}>
                            <img className={styles.imagen} src={imagen} alt={nombre} />
                        </div>

                        <div className={styles.integranteInfo}>
                            <h1>{nombre}</h1>
                            <p>{rol}</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );

}

export default ItemIntegrantes;
