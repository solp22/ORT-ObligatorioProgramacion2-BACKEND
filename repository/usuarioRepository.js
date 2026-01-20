import Usuario from "../models/usuario.js"

export const crearUsuario = async (data) => {
    let nuevoUsuario = new Usuario(data);
    return await nuevoUsuario.save();
}

export const obtenerUsuarios = async () => {
    return await Usuario.find();
}

export const obtenerUsuarioPorId = async (id) => {
    return await Usuario.findById(id);
}

export const eliminarUsuarioPorId = async (id) => {
    await Usuario.findByIdAndDelete(id);
}

export const actualizarUsuarioPorId = async (id, data) => {
    return await Usuario.findByIdAndUpdate(id, data, { new: true });
}

export const obtenerUsuarioPorEmail = async (email) => {
    return await Usuario.findOne({ email });
};