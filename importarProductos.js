// importarProductos.js
import mongoose from "mongoose";
import fs from "fs";

// 🔗 Tu conexión a MongoDB
const MONGO_URI = "mongodb+srv://admin:admin@cluster0.toy2tzp.mongodb.net/prueba?appName=Cluster0";

// 📦 Definición del Schema
const productoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  imagen: String,
  descripcion: String,
  type: String,
  miniaturas: [String]
});

const Producto = mongoose.model("Producto", productoSchema);

async function importarDatos() {
  try {
    console.log("🔌 Conectando a MongoDB...");
    await mongoose.connect(MONGO_URI);

    console.log("📂 Leyendo productos...");
    const data = JSON.parse(fs.readFileSync("./productos.json", "utf8"));

    console.log("⬆️ Insertando productos sin borrar los existentes...");
    await Producto.insertMany(data);

    console.log("✅ Datos agregados con éxito 😄");
    process.exit();
  } catch (error) {
    console.error("❌ Error al importar:", error);
    process.exit(1);
  }
}

importarDatos();
