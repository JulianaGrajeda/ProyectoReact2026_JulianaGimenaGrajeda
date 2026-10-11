import Home from '../../Secciones/Home/Home'
import Integrantes from '../../Secciones/Integrantes/Integrantes';
import Merch from '../../Secciones/Merch/Merch';
import BotonSubir from '../../componentes/BotonSubir/BotonSubir';



function Inicio() {

    return (
        <>
            <BotonSubir />
            <Home />
            <Integrantes />
            <Merch />
        </>
    );
}

export default Inicio;
