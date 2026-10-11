import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { LayoutInicio } from './componentes/Layout/LayoutInicio.jsx';
import { LayoutTienda } from './componentes/Layout/LayoutTienda.jsx';
import './App.css';
import Inicio from './Paginas/Inicio/Inicio.jsx';
import Tienda from './Paginas/Tienda/Tienda.jsx';
import ScrollToHash from './componentes/ScrollToHash/ScrollToHash.jsx';


function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
        <Routes>
          <Route element={<LayoutInicio />}>
            <Route path="/" element={<Inicio />} />
          </Route>

          <Route element={<LayoutTienda />}>
            <Route path="/tienda" element={<Tienda />} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
