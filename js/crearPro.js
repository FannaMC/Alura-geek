import { conexion } from "./conexion.js";

const formulario = document.querySelector("[data-formulario]");
const botonEnviar = document.querySelector(".boton_enviar");
const botonBorrar = document.querySelector(".boton_borrar");


//implementar la funcion para eliminar creada en el conexion.js

async function crearProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conexion.enviarProducto(nombre, precio, imagen);
        window.location.href = "../index.html";
    } catch (e) {
        alert(e);
    }
}

async function borrarProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    try {
        await conexion.deleteProducto(id);
        window.location.href = "../index.html";
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => crearProducto(evento));
formulario.removeEventListener("submit", evento => borrarProducto(evento));

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    const listaRes = {
        nombre: e.target.elements["nombre"].value,
        precio: e.target.elements["precio"].value,
        imagen: e.target.elements["imagen"].value,
    }
    //esta parte guarda los datos del formulario
    localStorage.setItem("registro", JSON.stringify(listaRes));
    window.location.href = "../index.html";
});