import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from "cors";


// Controllers Usuario
import { 
    registrarUsuarioController, 
    listarUsuariosController, 
    obtenerUsuarioController, 
    eliminarUsuarioController, 
    actualizarUsuarioController,
    loginUsuarioController
} from './controllers/usuarioController.js';

// Controllers Producto
import {
    registrarProductoController,
    listarProductosController,
    obtenerProductoController,
    eliminarProductoController,
    actualizarProductoController
} from './controllers/productoController.js';

// Controllers Carrito
import {
    registrarCarritoController,
    listarCarritoController,
    eliminarCarritoController,
    actualizarCarritoController
} from './controllers/carritoController.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

// Conexión a Mongo
mongoose.connect(process.env.MONGO_URI);

let db = mongoose.connection;

db.once("open", () => {
    console.log("la conexion fue exitosa");
});

// RUTAS USUARIO
app.post('/login', loginUsuarioController);
app.post('/usuario', registrarUsuarioController);
app.get('/usuario', listarUsuariosController);
app.get('/usuario/:id', obtenerUsuarioController);
app.delete('/usuario/:id', eliminarUsuarioController);
app.put('/usuario/:id', actualizarUsuarioController);

// RUTAS PRODUCTO
app.post('/producto', registrarProductoController);
app.get('/producto', listarProductosController);
app.get('/producto/:id', obtenerProductoController);
app.delete('/producto/:id', eliminarProductoController);
app.put('/producto/:id', actualizarProductoController);

// RUTAS CARRITO
app.post('/carrito', registrarCarritoController);
app.get('/carrito', listarCarritoController);
app.delete('/carrito', eliminarCarritoController);
app.put('/carrito', actualizarCarritoController);


// Logger
app.use((req, res, next) => {
    console.log(`metodo ${req.method} en la URL ${req.url}`);
    next();
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
