import BotonSubir from '../../componentes/BotonSubir/BotonSubir';
import HeroTienda from '../../Secciones/HeroTienda/HeroTienda';
import Productos from '../../Secciones/Productos/Productos';

function Tienda(){
    return(
        <>
            <BotonSubir />
            <HeroTienda />
            <Productos />
        </>
    );
}

export default Tienda;