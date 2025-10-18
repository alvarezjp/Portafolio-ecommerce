import React from 'react';
import { ProductCard } from '../product/ProductCard';
import { Product, ViewMode } from '../../types';

interface ProductGridProps {
  products: Product[];
  viewMode: ViewMode;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

export function ProductGrid({ products, viewMode, onQuickView, onAddToCart }: ProductGridProps) {
  const handleAddToCart = (product: Product) => {
    // For quick add from catalog, use first available options
    const availableColor = product.colors.find(c => c.available);
    const availableSize = product.sizes.find(s => s.available);
    
    if (availableColor && availableSize && product.inStock) {
      onAddToCart(product, availableColor, availableSize, 1);
    }
  };

  if (products.length === 0) {
    return (
      <div className="bg-white rounded-xl p-12 text-center shadow-sm border border-slate-200">
        <div className="w-24 h-24 bg-slate-100 rounded-full mx-auto mb-6 flex items-center justify-center">
          <span className="text-4xl text-slate-400">🔍</span>
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-2">
          No encontramos productos
        </h3>
        <p className="text-slate-600 mb-6">
          Intenta ajustar los filtros o busca algo diferente.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
          Limpiar filtros
        </button>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <div className="space-y-4">
        {products.map(product => (
          <div key={product.id} className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="flex gap-6">
              <div className="w-48 aspect-square bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => onQuickView(product)}
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">
                      {product.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-yellow-400">
                        {'★'.repeat(Math.floor(product.rating))}{'☆'.repeat(5 - Math.floor(product.rating))}
                      </span>
                      <span className="text-sm text-slate-500">({product.reviewCount})</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-900">
                      ${product.price.toLocaleString('es-CL')}
                    </div>
                    {product.originalPrice && (
                      <div className="text-sm text-slate-500 line-through">
                        ${product.originalPrice.toLocaleString('es-CL')}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {product.colors.filter(c => c.available).slice(0, 4).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-slate-200"
                        style={{ backgroundColor: color.value }}
                        title={color.name}
                      />
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => onQuickView(product)}
                      className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      Vista rápida
                    </button>
                    <button
                      onClick={() => handleAddToCart(product)}
                      disabled={!product.inStock}
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {product.inStock ? 'Añadir al carrito' : 'Agotado'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
}