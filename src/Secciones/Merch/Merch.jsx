import styles from './Merch.module.css';
import adollz from '../../assets/adollz.png';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

function Merch(){

    const seccionRef = useRef(null);
    const imagenRef = useRef(null);

    const handleMouseMove = (e) => {
        const rect = seccionRef.current.getBoundingClientRect();

        
        const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
        const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);

        const intensidad = 30;
        const intensidadFondo = 15;

        imagenRef.current.style.transform =
            `translate(${-x * intensidad}px, ${-y * intensidad}px)`;
        seccionRef.current.style.setProperty('--fx', `${x * intensidadFondo}px`);
        seccionRef.current.style.setProperty('--fy', `${y * intensidadFondo}px`);
    };

    const handleMouseLeave = () => {
        imagenRef.current.style.transform = 'translate(0px, 0px)';
        seccionRef.current.style.setProperty('--fx', '0px');
        seccionRef.current.style.setProperty('--fy', '0px');
    };

    return(
        <section
            id="Merch"
            ref={seccionRef}
            className={styles.merchSection}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >

            <div className={styles.merchContainer}>


                <div className={styles.merchContent}>
                    <p>MERCH OFICIAL</p>
                    <h1>ANGELIC SPICE</h1>
                </div>


                <div ref={imagenRef} className={styles.merchImages}>
                    <img src={adollz} alt="" />
                </div>

            </div>
            
                <Link to="/tienda" className={styles.merchButton}>Ver Merch</Link>
        </section>
    );
}

export default Merch;