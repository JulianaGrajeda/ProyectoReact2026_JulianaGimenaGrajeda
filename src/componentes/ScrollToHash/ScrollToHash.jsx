import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToHash() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {

        setTimeout(() => {
            const elemento = document.getElementById(hash.slice(1));
            if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
        }, 100);
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
}

export default ScrollToHash;