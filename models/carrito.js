import mongoose from 'mongoose';

let schema = mongoose.Schema;

let carritoSchema = new schema({
    items: { type: [], required: true }
})

let Carrito = mongoose.model("Carrito", carritoSchema)

export default Carrito;