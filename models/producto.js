import mongoose from "mongoose";

const schema = mongoose.Schema;

const productoSchema = new schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  imagen: { type: String, required: true },
  descripcion: { type: String, required: true },
  type: { type: String, required: true },
  miniaturas: { type: [], required: true }
});

const Producto = mongoose.model("Producto", productoSchema);

export default Producto;
