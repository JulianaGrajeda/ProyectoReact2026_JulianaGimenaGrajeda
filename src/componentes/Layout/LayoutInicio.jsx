import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";

export function LayoutInicio(){
    return(
        <div>
            <Header />
                <main>
                    <Outlet />
                </main>
            <Footer />
        </div>
    );
}