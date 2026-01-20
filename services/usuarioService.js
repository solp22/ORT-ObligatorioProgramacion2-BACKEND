import { crearUsuario, obtenerUsuarios, obtenerUsuarioPorId, actualizarUsuarioPorId, eliminarUsuarioPorId, obtenerUsuarioPorEmail} from "../repository/usuarioRepository.js";

export const registrarUsuario = async (data) => {
    //validaciones
    if(!data.email || !data.contraseña) {
        throw new Error("Email y contraseña son requeridos");
    }

    if(!data.email.includes("@") || !data.email.includes(".")) {
        throw new Error("Ingresa una direccion de email valida");
    }

    if(data.contraseña.length < 3) {
        throw new Error("La contraseña tiene que tener al menos 3 caracteres");
    }
    //Delegar al Repositorio
    return await crearUsuario(data);
}

export const listarUsuarios = async () => {

    let usuarios = await obtenerUsuarios();

    if(usuarios.length == 0) {
        throw new Error("No hay usuarios para mostrar");
    }

    return usuarios;
}

export const obtenerUsuario = async (id) => {

    let usuario = await obtenerUsuarioPorId(id);

    if(!usuario) {
        throw new Error("Usuario no encontrado");
    }

    return usuario;
}

export const eliminarUsuario = async (id) => {

    let usuario = await obtenerUsuarioPorId(id);

    if(!usuario) {
        throw new Error("Usuario no encontrado");
    }

    await eliminarUsuarioPorId(id);
}

export const actualizarUsuario = async (id, data) => {

    let usuario = await obtenerUsuarioPorId(id);

    if(!usuario) {
        throw new Error("Usuario no encontrado");
    }

    if(data.contraseña && data.contraseña.length < 3){
        throw new Error("La contraseña tiene que tener al menos 3 caracteres");
    }

    if(data.email && !data.email.includes("@") || !data.email.includes(".")) {
        throw new Error("Ingresa una direccion de email valida");
    }

    return await actualizarUsuarioPorId(id, data);
}

export const loginUsuario = async (data) => {
    const { email, contraseña } = data;

    // Validaciones
    if (!email || !contraseña) {
        throw new Error("Email y contraseña son requeridos");
    }

    // Buscar usuario por email
    const usuario = await obtenerUsuarioPorEmail(email);

    if (!usuario) {
        throw new Error("Usuario no encontrado");
    }

    // Comparación de contraseña 
    if (usuario.contraseña !== contraseña) {
        throw new Error("Contraseña incorrecta");
    }

    return {
        mensaje: "Login exitoso",
        usuario: usuario
    };
};
