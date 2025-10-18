import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useCart } from '../../hooks/useCart';
import { cn } from '../../lib/utils';

interface HeaderProps {
  onCartOpen: () => void;
  currentPage?: string;
}

export function Header({ onCartOpen, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { getTotalItems } = useCart();

  const navigation = [
    { name: 'Tienda', href: '/catalog' },
    { name: 'Colecciones', href: '/collections' },
    { name: 'Contacto', href: '/contact' }
  ];

  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-slate-900">
              NORD Wear
            </h1>
          </div>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search size={16} />}
                className="w-full"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  currentPage === item.href 
                    ? 'text-blue-600' 
                    : 'text-slate-700'
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Mobile */}
            <button className="md:hidden text-slate-600 hover:text-slate-900">
              <Search size={20} />
            </button>

            {/* User Account */}
            <button className="text-slate-600 hover:text-slate-900 transition-colors">
              <User size={20} />
            </button>

            {/* Wishlist */}
            <button className="text-slate-600 hover:text-slate-900 transition-colors">
              <Heart size={20} />
            </button>

            {/* Cart */}
            <button
              onClick={onCartOpen}
              className="relative text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ShoppingBag size={20} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems > 99 ? '99+' : totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-600 hover:text-slate-900"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <Input
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search size={16} />}
              />

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'py-2 text-base font-medium transition-colors hover:text-blue-600',
                      currentPage === item.href 
                        ? 'text-blue-600' 
                        : 'text-slate-700'
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}