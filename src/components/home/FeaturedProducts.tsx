import React from 'react';
import { ProductCard } from '../product/ProductCard';
import { Product } from '../../types';

interface FeaturedProductsProps {
  products: Product[];
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function FeaturedProducts({ products, onQuickView, onAddToCart }: FeaturedProductsProps) {
  // Show only featured products (first 8)
  const featuredProducts = products.slice(0, 8);

  const handleAddToCart = (product: Product) => {
    // For quick add from featured products, use first available options
    const availableColor = product.colors.find(c => c.available);
    const availableSize = product.sizes.find(s => s.available);
    
    if (availableColor && availableSize && product.inStock) {
      onAddToCart(product, availableColor, availableSize, 1);
    }
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Productos destacados
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubre nuestras piezas más populares, elegidas por su calidad excepcional y diseño atemporal.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 rounded-xl font-medium transition-all duration-300">
            Ver todos los productos
          </button>
        </div>
      </div>
    </section>
  );
}