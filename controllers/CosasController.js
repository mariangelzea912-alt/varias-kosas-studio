import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage.js"
import { generalAlert } from "../helpers/alerts.js";
import { protegerRuta } from "../helpers/generators.js";

protegerRuta();

let usuario = getLocalStorage("usuario")

document.querySelector("#info-usuario").textContent = "USUARIO: " + usuario.nombre
document.querySelector("#btn-salir").addEventListener("click", function(){
    removeLocalStorage("usuario")
    window.location.href = "../../index.html"
})
