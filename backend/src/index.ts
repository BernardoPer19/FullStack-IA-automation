import express from "express";
import { productRouter } from "./features/products/routes/products.routes";

const app = express();
app.use(express.json());

app.use("/products", productRouter); // ✅ Esto es válido

app.listen(3000, () => {
    console.log("Servidor iniciado en http://localhost:3000");
});
