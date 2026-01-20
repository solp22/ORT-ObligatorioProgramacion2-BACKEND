import { registrarUsuario, listarUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario, loginUsuario } from "../services/usuarioService.js";

export const registrarUsuarioController = async (req, res) => {
    try {
        //Ejecutar metodo del servicio
        const nuevoUsuario = await registrarUsuario(req.body);
        res.status(201).send(nuevoUsuario);
    } catch (error) {
        res.status(400).send(error.message);
    } finally {
        //Se ejecuta siempre
    }
}

export const listarUsuariosController = async (req, res) => {
    try {
        const usuarios = await listarUsuarios();
        res.status(200).send(usuarios);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const obtenerUsuarioController = async (req, res) => {
    try {
        const usuario = await obtenerUsuario(req.params.id);
        res.status(200).send(usuario);
    } catch (error) {
        res.status(404).send(error.message);
    }
}

export const eliminarUsuarioController = async (req, res) => {
    try {
        await eliminarUsuario(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(404).send(error.message);
    }
}


export const actualizarUsuarioController = async (req, res) => {
    try {
        const usuarioActualizado = await actualizarUsuario(req.params.id, req.body);
        res.status(200).send(usuarioActualizado);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const loginUsuarioController = async (req, res) => {
    try {
        const resultado = await loginUsuario(req.body);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};