import { 
    registrarProducto, 
    listarProductos, 
    obtenerProducto, 
    actualizarProducto, 
    eliminarProducto 
} from "../services/productoService.js";

export const registrarProductoController = async (req, res) => {
    try {
        const nuevoProducto = await registrarProducto(req.body);
        res.status(201).send(nuevoProducto);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const listarProductosController = async (req, res) => {
    try {
        const productos = await listarProductos();
        res.status(200).send(productos);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const obtenerProductoController = async (req, res) => {
    try {
        const producto = await obtenerProducto(req.params.id);
        res.status(200).send(producto);
    } catch (error) {
        res.status(404).send(error.message);
    }
};

export const eliminarProductoController = async (req, res) => {
    try {
        await eliminarProducto(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).send(error.message);
    }
};

export const actualizarProductoController = async (req, res) => {
    try {
        const productoActualizado = await actualizarProducto(req.params.id, req.body);
        res.status(200).send(productoActualizado);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
