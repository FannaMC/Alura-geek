import { conexion } from "./conexion.js";

const lista = document.querySelector("[data-cards]");

//creacion de las tarjetas
export default function crearCard(nombre,precio,imagen,id) {
    const producto = document.createElement("div");
    producto.className = "card";
    producto.dataset.id = id;

    producto.innerHTML = `<div class="imagen">
                            <img src="${imagen}" class="juguete">
                        </div>
                        <div class="nombre">
                            <h2>${nombre}</h2>
                        </div>
                        <div class="informacion">
                            <p>${precio}</p>
                            <i class="fas fa-trash" data-id="${id}"></i>
                        </div>`;

    
    //evento de eliminacion
    const trashIcon = producto.querySelector(".fa-trash");
    trashIcon.addEventListener("click", async (event) => {
        const id = event.target.dataset.id;
        try {
            await conexion.eliminarProducto(id);
            producto.remove(); // Eliminar la tarjeta del DOM
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    });

    const deletePro = producto.querySelector(".boton_borrar");
    trashIcon.addEventListener("click", async (event) => {
        const id = event.target.dataset.id;
        try {
            await conexion.deleteProducto(id);
            producto.remove(); // Eliminar la tarjeta del DOM
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
        }
    });

    return producto;

}

//esta funcion muestra la lista de nuetro archivo JSON en la pagina
async function listarProductos () {
    try {
        const listaAPI = await conexion.listarProductos()

        listaAPI.forEach(element => lista.appendChild(crearCard(element.nombre,element.precio,element.imagen,element.id)))
    } catch {
        lista.innerHTML=`<h2>Ha ocurrido un problema con la conexion</h2>`
    }
}

listarProductos ();