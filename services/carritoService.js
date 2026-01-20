import {
    crearCarrito,
    obtenerCarritoUnico,
    actualizarCarritoUnico,
    eliminarCarritoPorId
} from "../repository/carritoRepository.js";

// CREA si NO existe
export const guardarCarrito = async (data) => {
    const { items } = data;

    if (!items) {
        throw new Error("Items son requeridos");
    }

    let carrito = await obtenerCarritoUnico();

    if (!carrito) {
        carrito = await crearCarrito({ items });
        return carrito;
    }

    return await actualizarCarritoUnico(items);
};

// OBTIENE (si no existe → crea vacío)
export const obtenerCarrito = async () => {
    let carrito = await obtenerCarritoUnico();

    if (!carrito) {
        carrito = await crearCarrito({ items: [] });
    }

    return carrito;
};

export const eliminarCarrito = async () => {
    // Buscar el carrito único
    const carrito = await obtenerCarritoUnico();

    if (!carrito) {
        throw new Error("No existe carrito para eliminar");
    }

    // Eliminarlo usando su ID
    await eliminarCarritoPorId(carrito._id);

    return { mensaje: "Carrito eliminado correctamente" };
};


export const actualizarCarrito = async (items) => {

    if (!items) {
        throw new Error("Items requeridos");
    }

    let carrito = await obtenerCarritoUnico();

    if (!carrito) {
        throw new Error("No existe carrito para actualizar");
    }

    carrito.items = items;

    return await carrito.save();
};
