import { z } from "zod";
import { CreateProductInput } from "../types/products";

// Zod schema ajustado a CreateProductInput (sin createdAt, updatedAt, isActive)
export const ProductCreateSchema = z.object({
  name: z.string()
    .min(2, { message: 'El nombre debe tener al menos 2 caracteres' })
    .max(100, { message: 'El nombre no debe exceder 100 caracteres' }),

  description: z.string()
    .max(500, { message: 'La descripción no debe exceder 500 caracteres' })
    .optional(),

  price: z.number()
    .positive({ message: 'El precio debe ser mayor a 0' })
    .refine(p => p < 100000, { message: 'El precio no debe superar los 100,000' }),

  stock: z.number()
    .int({ message: 'El stock debe ser un número entero' })
    .nonnegative({ message: 'El stock no puede ser negativo' }),

  categoryId: z.number()
    .int({ message: 'El ID de categoría debe ser un entero' })
    .positive({ message: 'El ID de categoría debe ser mayor a 0' })
    .optional()
});

// Función de safe parse
export function safeParseProduct(data: unknown) {
  return ProductCreateSchema.safeParse(data);
}
