import React, { useState, useMemo } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ProductFilters } from '../components/catalog/ProductFilters';
import { ProductSort } from '../components/catalog/ProductSort';
import { ProductGrid } from '../components/catalog/ProductGrid';
import { MiniCart } from '../components/cart/MiniCart';
import { QuickView } from '../components/product/QuickView';
import { ToastContainer } from '../components/ui/ToastContainer';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/useToast';
import { products } from '../data/products';
import { Product, Filter, SortOption, ViewMode, Color, Size } from '../types';
import { ChevronRight } from 'lucide-react';

export function Catalog() {
  const { isOpen: cartOpen, setIsOpen: setCartOpen, addItem } = useCart();
  const { toasts, addToast, removeToast } = useToast();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [filters, setFilters] = useState<Filter>({});
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  // Filter and sort products
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...products];

    // Apply filters
    if (filters.category) {
      filtered = filtered.filter(p => p.category === filters.category);
    }
    if (filters.sizes && filters.sizes.length > 0) {
      filtered = filtered.filter(p => 
        p.sizes.some(s => filters.sizes!.includes(s.name) && s.available)
      );
    }
    if (filters.colors && filters.colors.length > 0) {
      filtered = filtered.filter(p => 
        p.colors.some(c => filters.colors!.includes(c.name) && c.available)
      );
    }
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(p => p.price >= min && p.price <= max);
    }
    if (filters.materials && filters.materials.length > 0) {
      filtered = filtered.filter(p => 
        filters.materials!.some(m => p.materials.includes(m))
      );
    }
    if (filters.inStock) {
      filtered = filtered.filter(p => p.inStock);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-asc':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => a.badge === 'new' ? -1 : 1);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return filtered;
  }, [filters, sortBy]);

  const handleQuickView = (product: Product) => {
    setQuickViewProduct(product);
  };

  const handleAddToCart = (product: Product) => {
    // This function now receives the product with selected variants
    addItem(product.product, product.color, product.size, product.quantity);
    addToast(`${product.product.name} añadido al carrito`, 'success');
    setCartOpen(true);
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

  const handleClearFilters = () => {
    setFilters({});
  };

  const handleViewCart = () => {
    setCartOpen(false);
    console.log('Navigate to cart page');
  };

  const handleCheckout = () => {
    setCartOpen(false);
    console.log('Navigate to checkout');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onCartOpen={() => setCartOpen(true)} currentPage="/catalog" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm text-slate-600 mb-8">
          <a href="/" className="hover:text-slate-900">Inicio</a>
          <ChevronRight size={16} />
          <span className="text-slate-900">Tienda</span>
          {filters.category && (
            <>
              <ChevronRight size={16} />
              <span className="text-slate-900">{filters.category}</span>
            </>
          )}
        </nav>

        <div className="flex gap-8">
          {/* Sidebar Filters - Desktop */}
          <div className="hidden lg:block">
            <ProductFilters
              filters={filters}
              onFiltersChange={setFilters}
              onClearFilters={handleClearFilters}
            />
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            {/* Mobile Filters + Sort */}
            <div className="flex items-center justify-between lg:hidden">
              <ProductFilters
                filters={filters}
                onFiltersChange={setFilters}
                onClearFilters={handleClearFilters}
                isMobile
              />
            </div>

            {/* Sort and View Options */}
            <ProductSort
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              totalResults={filteredAndSortedProducts.length}
            />

            {/* Products Grid */}
            <ProductGrid
              products={filteredAndSortedProducts}
              viewMode={viewMode}
              onQuickView={handleQuickView}
              onAddToCart={handleQuickAddToCart}
            />

            {/* Pagination - Would be implemented in a real app */}
            {filteredAndSortedProducts.length > 12 && (
              <div className="flex justify-center mt-12">
                <div className="flex items-center gap-2">
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed">
                    Anterior
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">1</button>
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50">2</button>
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50">3</button>
                  <button className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50">
                    Siguiente
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
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