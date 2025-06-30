// export interface User {
//   id: number;
//   email: string;
//   password: string;
//   name?: string;
//   phone?: string;
//   isVerified: boolean;
//   createdAt: Date;
//   updatedAt: Date;
// }

export interface ProductType {
  id: number;
  name: string;
  description?: string;
  price: number;
  stock: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  categoryId?: number;
}

type CreateProductInput = Pick<
  ProductType,
  "name" | "price" | "stock" | "categoryId" | "description"
>;

export interface Category {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

// export interface Order {
//   id: number;
//   userId: number;
//   status: string;
//   total: number;
//   createdAt: Date;
//   updatedAt: Date;
//   paidAt?: Date;
//   shippedAt?: Date;
// }

// export interface OrderItem {
//   id: number;
//   orderId: number;
//   productId: number;
//   quantity: number;
//   price: number;
// }
