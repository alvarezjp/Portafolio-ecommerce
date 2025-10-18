export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  images: string[];
  colors: Color[];
  sizes: Size[];
  category: string;
  subcategory?: string;
  description: string;
  materials: string;
  rating: number;
  reviewCount: number;
  badge?: 'new' | 'sale' | 'bestseller' | 'limited' | 'out-of-stock';
  inStock: boolean;
  lowStock?: boolean;
}

export interface Color {
  name: string;
  value: string;
  available: boolean;
}

export interface Size {
  name: string;
  available: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedColor: Color;
  selectedSize: Size;
  quantity: number;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
}

export interface Address {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  region: string;
  postalCode: string;
  country: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shipping: {
    address: Address;
    method: 'standard' | 'express';
    cost: number;
  };
  payment: {
    method: 'card' | 'paypal' | 'transfer';
    status: 'pending' | 'completed' | 'failed';
  };
  subtotal: number;
  tax: number;
  discount: number;
  total: number;
  status: 'processing' | 'shipped' | 'delivered';
  createdAt: string;
}

export interface Filter {
  category?: string;
  sizes?: string[];
  colors?: string[];
  priceRange?: [number, number];
  materials?: string[];
  inStock?: boolean;
}

export type SortOption = 'relevance' | 'price-asc' | 'price-desc' | 'newest' | 'rating';
export type ViewMode = 'grid' | 'list';

export interface CheckoutStep {
  id: number;
  title: string;
  completed: boolean;
  current: boolean;
}