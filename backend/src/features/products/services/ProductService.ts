import { prisma } from "@/config/prisma";
import { CreateProductInput, ProductType } from "../types/products";



class ProductService {
    // Obtener todos los productos
    public async getProducts() {
        try {
            return await prisma.product.findMany();
        } catch (error) {
            console.error("[ProductService] getProducts error:", error);
            throw new Error("Error al obtener los productos");
        }
    }

    // Obtener un producto por ID
    public async getProductById(productId: number) {
        try {
            const product = await prisma.product.findUnique({
                where: { id: productId },
            });

            if (!product) {
                throw new Error("Producto no encontrado");
            }

            return product;
        } catch (error) {
            console.error("[ProductService] getProductById error:", error);
            throw new Error("Error al obtener el producto");
        }
    }

    // Insertar nuevo producto
    public async insertProduct(productData: CreateProductInput) {
        try {
            const newProduct = await prisma.product.create({
                data: {
                    ...productData,
                },
            });

            return newProduct;
        } catch (error) {
            console.error("[ProductService] insertProduct error:", error);
            throw new Error("Error al insertar el producto");
        }
    }

    public async deleteProducts(productId: number) {
        try {
            const product = await prisma.product.findUnique({
                where: { id: productId },
            });

            if (!product) {
                throw new Error("Producto no encontrado");
            }

            return product;
        } catch (error) {
            console.error("[ProductService] getProductById error:", error);
            throw new Error("Error al obtener el producto");
        }
    }
    // public async updateProducts(prd_id: number, product: ProductType) { }
}

export const productService = new ProductService();
