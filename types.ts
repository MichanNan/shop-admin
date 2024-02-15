export interface Category {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  amount: number;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Image {
  id: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Size {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Color {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  id: string;
  orderId: string;
  order: Order;
  productId: string;
  product: Product;
  amount: number;
}

export interface Order {
  id: string;
  orderItems: OrderItem[];
  clientId: string;
  client: Client;
  isPaid: boolean;
  name: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Client {
  id: string;
}
