import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Essential',
    price: 29990,
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5867364/pexels-photo-5867364.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: [
      { name: 'Blanco', value: '#FFFFFF', available: true },
      { name: 'Negro', value: '#000000', available: true },
      { name: 'Gris', value: '#9CA3AF', available: true }
    ],
    sizes: [
      { name: 'XS', available: true },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true }
    ],
    category: 'Camisetas',
    subcategory: 'Básicos',
    description: 'Camiseta de algodón 100% orgánico con corte clásico. Perfecta para el día a día con su diseño minimalista y comodidad excepcional.',
    materials: '100% Algodón orgánico',
    rating: 4.5,
    reviewCount: 124,
    badge: 'new',
    inStock: true
  },
  {
    id: '2',
    name: 'Polera Oversize',
    price: 29990,
    originalPrice: 34990,
    images: [
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: [
      { name: 'Arena', value: '#D2B48C', available: true },
      { name: 'Oliva', value: '#6B7280', available: true }
    ],
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: false }
    ],
    category: 'Poleras',
    subcategory: 'Oversize',
    description: 'Polera oversize de algodón premium con caída relajada. Ideal para looks casuales con estilo contemporáneo.',
    materials: '95% Algodón, 5% Elastano',
    rating: 4.2,
    reviewCount: 89,
    badge: 'sale',
    inStock: true
  },
  {
    id: '3',
    name: 'Pantalón Slim Fit',
    price: 49990,
    images: [
      'https://images.pexels.com/photos/1240892/pexels-photo-1240892.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2479312/pexels-photo-2479312.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: [
      { name: 'Negro', value: '#000000', available: true },
      { name: 'Azul Marino', value: '#1E3A8A', available: true }
    ],
    sizes: [
      { name: '28', available: true },
      { name: '30', available: true },
      { name: '32', available: true },
      { name: '34', available: true },
      { name: '36', available: true }
    ],
    category: 'Pantalones',
    subcategory: 'Slim Fit',
    description: 'Pantalón slim fit de gabardina elastizada. Diseño minimalista con corte moderno para un look sofisticado.',
    materials: '97% Algodón, 3% Elastano',
    rating: 4.7,
    reviewCount: 156,
    inStock: true
  },
  {
    id: '4',
    name: 'Chaqueta Ligera',
    price: 69990,
    images: [
      'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: [
      { name: 'Gris', value: '#6B7280', available: true },
      { name: 'Azul', value: '#3B82F6', available: true }
    ],
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true }
    ],
    category: 'Chaquetas',
    subcategory: 'Ligeras',
    description: 'Chaqueta ligera perfecta para entretiempo. Diseño funcional con bolsillos internos y cierre invisible.',
    materials: '100% Poliéster reciclado',
    rating: 4.6,
    reviewCount: 203,
    badge: 'bestseller',
    inStock: true
  },
  {
    id: '5',
    name: 'Hoodie Minimal',
    price: 54990,
    images: [
      'https://images.pexels.com/photos/4210334/pexels-photo-4210334.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7148621/pexels-photo-7148621.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: [
      { name: 'Negro', value: '#000000', available: true },
      { name: 'Verde Bosque', value: '#065F46', available: true }
    ],
    sizes: [
      { name: 'XS', available: false },
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true }
    ],
    category: 'Hoodies',
    subcategory: 'Básicos',
    description: 'Hoodie de felpa francesa con diseño minimalista. Capucha ajustable y bolsillo canguro para máxima comodidad.',
    materials: '80% Algodón orgánico, 20% Poliéster reciclado',
    rating: 4.4,
    reviewCount: 178,
    inStock: true,
    lowStock: true
  },
  {
    id: '6',
    name: 'Jeans Straight',
    price: 59990,
    images: [
      'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3965548/pexels-photo-3965548.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: [
      { name: 'Índigo', value: '#4338CA', available: true },
      { name: 'Negro', value: '#000000', available: true }
    ],
    sizes: [
      { name: '28', available: true },
      { name: '30', available: true },
      { name: '32', available: true },
      { name: '34', available: true },
      { name: '36', available: true }
    ],
    category: 'Jeans',
    subcategory: 'Straight',
    description: 'Jeans de corte straight en denim japonés premium. Construcción resistente con acabados minimalistas.',
    materials: '98% Algodón, 2% Elastano',
    rating: 4.3,
    reviewCount: 145,
    inStock: true
  },
  {
    id: '7',
    name: 'Camisa Oxford',
    price: 44990,
    images: [
      'https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: [
      { name: 'Celeste', value: '#7DD3FC', available: true },
      { name: 'Blanco', value: '#FFFFFF', available: true }
    ],
    sizes: [
      { name: 'S', available: true },
      { name: 'M', available: true },
      { name: 'L', available: true },
      { name: 'XL', available: true }
    ],
    category: 'Camisas',
    subcategory: 'Oxford',
    description: 'Camisa Oxford de algodón premium con botones de madera natural. Corte clásico adaptado a siluetas modernas.',
    materials: '100% Algodón Oxford',
    rating: 4.8,
    reviewCount: 92,
    inStock: true
  },
  {
    id: '8',
    name: 'Zapatillas Canvas',
    price: 64990,
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    colors: [
      { name: 'Blanco', value: '#FFFFFF', available: false },
      { name: 'Negro', value: '#000000', available: false }
    ],
    sizes: [
      { name: '39', available: false },
      { name: '40', available: false },
      { name: '41', available: false },
      { name: '42', available: false },
      { name: '43', available: false }
    ],
    category: 'Calzado',
    subcategory: 'Sneakers',
    description: 'Zapatillas de lona con suela de goma vulcanizada. Diseño atemporal con detalles minimalistas.',
    materials: 'Lona 100% Algodón, Suela de goma natural',
    rating: 4.1,
    reviewCount: 67,
    badge: 'out-of-stock',
    inStock: false
  }
];