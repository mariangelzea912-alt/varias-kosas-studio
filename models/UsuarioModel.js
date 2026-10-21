const usuarios = [
  {
    nombre: "Mariangel Zea Alvarez",
    telefono: "3228192343",
    correo: "correo@correo.com",
    contrasena: "1234567890",
    id: "id1234567890",
  },
  {
    nombre: "Melany Soto Zapata",
    telefono: "3238574014",
    correo: "melan@12correo.com",
    contrasena: "1357924680",
    id: "id1254637839",
  }
];

export function guradarUsuario(){

}

export function buscarUsuario(correo, contrasena){
    let auth = usuarios.some((usuario)=> correo == usuario.correo && contrasena == usuario.contrasena)
    return auth
}

