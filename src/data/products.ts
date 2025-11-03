import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Camiseta Essential',
    price: 29990,
    images: [
      'https://rimage.ripley.cl/home.ripley/Attachment/WOP/1/2000405622393/full_image-2000405622393.webp',
      'https://rimage.ripley.cl/home.ripley/Attachment/WOP/1/2000405622393/image1-2000405622393.webp',
      'https://rimage.ripley.cl/home.ripley/Attachment/WOP/1/2000405622393/image2-2000405622393.webp'
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
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/2950/MPM10001486120/full_image-3.jpeg',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/2950/MPM10001486120/imagen2-3.jpeg',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/2950/MPM10001486120/imagen3-3.jpeg'
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
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/1270/MPM10002942881/full_image-5.jpeg',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/1270/MPM10002942881/imagen2-5.jpeg',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/1270/MPM10002942881/imagen3-5.jpeg'
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
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/3061/MPM10002880363/full_image-1.jpeg',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/3061/MPM10002880363/imagen2-1.jpeg',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/3061/MPM10002880363/imagen3-1.jpeg'
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
      'https://media.falabella.com/falabellaCL/17427717_1/w=1500,h=1500,fit=pad',
      'https://media.falabella.com/falabellaCL/17427717_2/w=1500,h=1500,fit=pad',
      'https://media.falabella.com/falabellaCL/17427717_3/w=1500,h=1500,fit=pad'
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
      'https://media.falabella.com/falabellaCL/883171134_1/w=1500,h=1500,fit=pad',
      'https://media.falabella.com/falabellaCL/883171134_2/w=1500,h=1500,fit=pad',
      'https://media.falabella.com/falabellaCL/883171134_3/w=1500,h=1500,fit=pad'
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
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/3313/MPM00024263468/full_image-4.jpeg',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/3313/MPM00024263468/imagen2-4.jpeg',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/3313/MPM00024263468/imagen3-4.jpeg'
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
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/3550/MPM10001953316/full_image-3',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/3550/MPM10001953316/imagen2-3',
      'https://rimage.ripley.cl/home.ripley/Attachment/MKP/3550/MPM10001953316/imagen4-3'
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