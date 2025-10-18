import { useState, useEffect } from 'react';
import { CartItem, Product, Color, Size } from '../types';

export function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('nord-cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem('nord-cart', JSON.stringify(items));
  }, [items]);

  const addItem = (
    product: Product,
    selectedColor: Color,
    selectedSize: Size,
    quantity: number = 1
  ) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(
        item =>
          item.product.id === product.id &&
          item.selectedColor.name === selectedColor.name &&
          item.selectedSize.name === selectedSize.name
      );

      if (existingItem) {
        return currentItems.map(item =>
          item === existingItem
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      const newItem: CartItem = {
        id: `${product.id}-${selectedColor.name}-${selectedSize.name}`,
        product,
        selectedColor,
        selectedSize,
        quantity
      };

      return [...currentItems, newItem];
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(itemId);
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeItem = (itemId: string) => {
    setItems(currentItems => currentItems.filter(item => item.id !== itemId));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  const getSubtotal = () => {
    return items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return {
    items,
    isOpen,
    setIsOpen,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalItems,
    getSubtotal
  };
}