import Producto from "../models/producto.js";

export const crearProducto = async (data) => {
    const nuevoProducto = new Producto(data);
    return await nuevoProducto.save();
};

export const obtenerProductos = async () => {
    return await Producto.find();
};

export const obtenerProductoPorId = async (id) => {
    return await Producto.findById(id);
};

export const eliminarProductoPorId = async (id) => {
    await Producto.findByIdAndDelete(id);
};

export const actualizarProductoPorId = async (id, data) => {
    return await Producto.findByIdAndUpdate(id, data, { new: true });
};
