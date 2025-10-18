import React, { useState } from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/home/Hero';
import { FeaturedCollections } from '../components/home/FeaturedCollections';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Benefits } from '../components/home/Benefits';
import { Newsletter } from '../components/home/Newsletter';
import { MiniCart } from '../components/cart/MiniCart';
import { QuickView } from '../components/product/QuickView';
import { ToastContainer } from '../components/ui/ToastContainer';
import { useCart } from '../hooks/useCart';
import { useToast } from '../hooks/useToast';
import { products } from '../data/products';
import { Product, Color, Size } from '../types';

export function Home() {
  const { isOpen: cartOpen, setIsOpen: setCartOpen, addItem } = useCart();
  const { toasts, addToast, removeToast } = useToast();
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const handleShopNow = () => {
    // Navigate to catalog - in a real app this would use router
    console.log('Navigate to catalog');
  };

  const handleViewCollection = () => {
    // Navigate to collections - in a real app this would use router
    console.log('Navigate to collections');
  };

  const handleCollectionClick = (collectionId: string) => {
    // Navigate to specific collection - in a real app this would use router
    console.log('Navigate to collection:', collectionId);
  };

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

  const handleViewCart = () => {
    setCartOpen(false);
    // Navigate to cart page - in a real app this would use router
    console.log('Navigate to cart page');
  };

  const handleCheckout = () => {
    setCartOpen(false);
    // Navigate to checkout - in a real app this would use router
    console.log('Navigate to checkout');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onCartOpen={() => setCartOpen(true)} currentPage="/" />
      
      <main>
        <Hero 
          onShopNow={handleShopNow}
          onViewCollection={handleViewCollection}
        />
        
        <FeaturedCollections onCollectionClick={handleCollectionClick} />
        
        <FeaturedProducts
          products={products}
          onQuickView={handleQuickView}
          onAddToCart={handleQuickAddToCart}
        />
        
        <Benefits />
        
        <Newsletter />
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