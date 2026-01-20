import { 
    crearProducto, 
    obtenerProductos, 
    obtenerProductoPorId, 
    actualizarProductoPorId, 
    eliminarProductoPorId 
} from "../repository/productoRepository.js";

export const registrarProducto = async (data) => {
    // Validaciones
    if (!data.nombre || !data.precio || !data.imagen || !data.descripcion || !data.type) {
        throw new Error("Nombre, precio, imagen, descripción y tipo son requeridos");
    }

    if (typeof data.precio !== "number" || data.precio <= 0) {
        throw new Error("El precio debe ser un número mayor a 0");
    }

    if (data.miniaturas && !Array.isArray(data.miniaturas)) {
        throw new Error("Las miniaturas deben ser un array de strings");
    }

    // Delegar al repositorio
    return await crearProducto(data);
};

export const listarProductos = async () => {
    const productos = await obtenerProductos();

    if (productos.length === 0) {
        throw new Error("No hay productos para mostrar");
    }

    return productos;
};

export const obtenerProducto = async (id) => {
    const producto = await obtenerProductoPorId(id);

    if (!producto) {
        throw new Error("Producto no encontrado");
    }

    return producto;
};

export const eliminarProducto = async (id) => {
    const producto = await obtenerProductoPorId(id);

    if (!producto) {
        throw new Error("Producto no encontrado");
    }

    await eliminarProductoPorId(id);
};

export const actualizarProducto = async (id, data) => {
    const producto = await obtenerProductoPorId(id);

    if (!producto) {
        throw new Error("Producto no encontrado");
    }

    if (data.precio && (typeof data.precio !== "number" || data.precio <= 0)) {
        throw new Error("El precio debe ser un número mayor a 0");
    }

    if (data.miniaturas && !Array.isArray(data.miniaturas)) {
        throw new Error("Las miniaturas deben ser un array de strings");
    }

    return await actualizarProductoPorId(id, data);
};
