import { getLocalStorage } from "./local-storage.js";

export function protegerRuta(){
    const usuario = getLocalStorage("usuario");
    if(!usuario){
        window.location.href = "../../index.html"
    }
}