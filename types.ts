export interface Category {
  id: string;
  name: string;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: Size;
  color: Color;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface Client {
  id: string;
  irder: Order[];
  nameL: string;
  email: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}
