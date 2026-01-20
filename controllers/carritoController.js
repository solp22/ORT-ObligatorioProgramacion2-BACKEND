import { 
    guardarCarrito, 
    obtenerCarrito,
    eliminarCarrito,
    actualizarCarrito 
} from "../services/carritoService.js";

// POST /carrito → crea o actualiza
export const registrarCarritoController = async (req, res) => {
    try {
        const carrito = await guardarCarrito(req.body);
        res.status(200).send(carrito);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// GET /carrito → obtiene el carrito único
export const listarCarritoController = async (req, res) => {
    try {
        const carrito = await obtenerCarrito();
        res.status(200).send(carrito);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

// ❗ GET /carrito/:id → YA NO EXISTE EN ESTA LÓGICA
// ❗ PUT /carrito/:id → YA NO EXISTE
// ❗ No necesitamos actualizar por ID, todo se maneja por guardarCarrito()

export const eliminarCarritoController = async (req, res) => {
  try {
      const resultado = await eliminarCarrito();
      res.status(200).send(resultado);
  } catch (error) {
      res.status(400).send(error.message);
  }
};


export const actualizarCarritoController = async (req, res) => {
    try {
        const actualizado = await actualizarCarrito(req.body.items);
        res.status(200).send(actualizado);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
