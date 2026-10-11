import HeaderTienda from "../HeaderTienda/HeaderTienda.jsx";
import FooterTienda from "../FooterTienda/FooterTienda.jsx";
import { Outlet } from "react-router-dom";

export function LayoutTienda(){
    return(
        <div>
            <HeaderTienda />
                <main>
                    <Outlet />
                </main>
            <FooterTienda />
        </div>
    );
}