import ItemList from "../ItemList/ItemList";
import {useEffect, useState} from "react";

function ItemListContainer({url, Componente, mensaje}){

    const [items, setItems] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function traerItems(){
            try{
                const respuesta = await fetch(url);
                if (!respuesta.ok) throw new Error("No se pudo cargar la información. ");
                const datos = await respuesta.json();
                setItems(datos);
            }catch(err){
                setError(err.message);
            }finally{
                setCargando(false);
            }
        }

        traerItems();
    }, [url]);

    if (cargando) return <p>Cargando Items. Por favor, espere... </p>;

    if(error) return <p>Error: {error}</p>;

    return(
        <ItemList 
            items={items} 
            Componente={Componente} 
            mensaje={mensaje}
        />
    );
}

export default ItemListContainer;