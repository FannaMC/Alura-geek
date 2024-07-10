async function listarProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();
    return conexionConvertida;
}



async function enviarProducto(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nombre: nombre,
            precio: precio,
            imagen: imagen,
        })
    })
    const conexionConvertida = conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el producto");
    }

    return conexionConvertida;
}

//funcion para eliminar | pasar un id | pasar el header

//eliminar
async function deleteProducto(id) {
    const url = `http://localhost:3001/productos/${id}`;

    const conexion = await fetch(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
    })
    const conexionConvertida = conexion.json();

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    return conexionConvertida;
}

//eliminar desde bote de basura
async function eliminarProducto(id) {
    const url = `http://localhost:3001/productos/${id}`;

    const conexion = await fetch(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" }
    })

    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al enviar el video");
    }

    const conexionConvertida = conexion.json();
    return conexionConvertida;
}

export const conexion = {
    listarProductos, enviarProducto, eliminarProducto, deleteProducto
}