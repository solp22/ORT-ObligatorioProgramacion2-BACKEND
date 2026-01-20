import mongoose from 'mongoose';

let schema = mongoose.Schema;

let usuarioSchema = new schema({
    email: { type: String, required: true },
    contraseña: { type: String, required: true },
})

let Usuario = mongoose.model("Usuario", usuarioSchema)

export default Usuario;