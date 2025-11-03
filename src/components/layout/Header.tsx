import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, Menu, X } from 'lucide-react';
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
  const navigate = useNavigate();
  const location = useLocation();

  const handleCollectionsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isMenuOpen) setIsMenuOpen(false);

    if (location.pathname === '/') {
      document.getElementById('featured-collections')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/', { state: { scrollTo: 'featured-collections' } });
    }
  };

  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Colecciones', href: '#', onClick: handleCollectionsClick },
    { name: 'Contacto', href: 'https://wa.me/1234567890', isExternal: true },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      navigate(`/search?q=${encodeURIComponent(trimmedQuery)}`);
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const renderNavLink = (item: any, isMobile = false) => {
    const className = cn(
      isMobile
        ? 'py-2 text-base font-medium transition-colors hover:text-white'
        : 'text-sm font-medium transition-colors hover:text-white',
      currentPage === item.href && !item.isExternal
        ? 'text-white' 
        : 'text-gray-300'
    );

    return (
      <a
        key={item.name}
        href={item.href}
        onClick={item.onClick}
        target={item.isExternal ? '_blank' : undefined}
        rel={item.isExternal ? 'noopener noreferrer' : undefined}
        className={className}
      >
        {item.name}
      </a>
    );
  };

  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-40 bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold text-white">
              NORD Wear
            </a>
          </div>

          {/* Search - Desktop */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Input
                placeholder="Buscar productos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                icon={<Search size={16} className="text-gray-400" />}
                className="w-full bg-gray-700 border-gray-600 text-white placeholder-gray-400"
              />
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => renderNavLink(item))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Cart */}
            <button
              onClick={onCartOpen}
              className="relative text-gray-300 hover:text-white transition-colors"
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
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch}>
                <Input
                  placeholder="Buscar productos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  icon={<Search size={16} className="text-gray-400" />}
                  className="bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                />
              </form>

              {/* Mobile Navigation */}
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => renderNavLink(item, true))}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}