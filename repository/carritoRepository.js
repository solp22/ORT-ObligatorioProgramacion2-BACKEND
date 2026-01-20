import Carrito from "../models/carrito.js";

export const crearCarrito = async (data) => {
    const nuevoCarrito = new Carrito(data);
    return await nuevoCarrito.save();
};

export const obtenerCarrito = async () => {
    return await Carrito.find();
};

export const obtenerCarritoPorId = async (id) => {
    return await Carrito.findById(id);
};

export const eliminarCarritoPorId = async (id) => {
    await Carrito.findByIdAndDelete(id);
};

export const actualizarCarritoPorId = async (id, data) => {
    return await Carrito.findByIdAndUpdate(id, data, { new: true });
};

export const obtenerCarritoUnico = async () => {
    return await Carrito.findOne(); // solo uno
};

export const actualizarCarritoUnico = async (items) => {
    const carrito = await Carrito.findOne();
    
    if (!carrito) return null;

    carrito.items = items;
    return await carrito.save();
};

