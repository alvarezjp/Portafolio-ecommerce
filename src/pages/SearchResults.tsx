import React, { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductGrid } from '../components/catalog/ProductGrid';
import { MiniCart } from '../components/cart/MiniCart';
import { QuickView } from '../components/product/QuickView';
import { ToastContainer } from '../components/ui/ToastContainer';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/useToast';
import { products } from '../data/products';
import { Product, Color, Size } from '../types';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function SearchResults() {
  const { isOpen: cartOpen, setIsOpen: setCartOpen, addItem } = useCart();
  const { toasts, addToast, removeToast } = useToast();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const query = useQuery();
  const searchQuery = query.get('q') || '';

  const searchResults = useMemo(() => {
    if (!searchQuery) {
      return [];
    }
    return products.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const handleQuickAddToCart = (product: Product, color: Color, size: Size, quantity: number) => {
    addItem(product, color, size, quantity);
    addToast(`${product.name} añadido al carrito`, 'success');
    setCartOpen(true);
  };

  const handleQuickViewAddToCart = (
    product: Product, 
    color: Color, 
    size: Size, 
    quantity: number
  ) => {
    addItem(product, color, size, quantity);
    addToast(`${product.name} añadido al carrito`, 'success');
    setQuickViewProduct(null);
    setCartOpen(true);
  };

  const handleViewCart = () => {
    setCartOpen(false);
    // Navigate to cart page logic here
  };

  const handleCheckout = () => {
    setCartOpen(false);
    // Navigate to checkout logic here
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onCartOpen={() => setCartOpen(true)} currentPage="/search" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Resultados de Búsqueda</h1>
          <p className="text-slate-600">
            {searchResults.length} {searchResults.length === 1 ? 'resultado' : 'resultados'} para "{searchQuery}"
          </p>
        </div>

        <ProductGrid
          products={searchResults}
          viewMode="grid"
          onQuickView={handleQuickView}
          onAddToCart={handleQuickAddToCart}
        />
      </main>

      <Footer />

      <MiniCart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onViewCart={handleViewCart}
        onCheckout={handleCheckout}
      />

      <QuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleQuickViewAddToCart}
      />

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  );
}
