import React, { useState } from 'react';
import { Heart, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../../types';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { formatCurrency, formatRating } from '../../lib/utils';
import { cn } from '../../lib/utils';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  className?: string;
}

export function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart,
  className 
}: ProductCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleImageHover = () => {
    if (product.images.length > 1) {
      setCurrentImageIndex(1);
    }
  };

  const handleImageLeave = () => {
    setCurrentImageIndex(0);
  };

  const availableColors = product.colors.filter(color => color.available);
  const availableSizes = product.sizes.filter(size => size.available);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  return (
    <div className={cn('group relative bg-white rounded-xl overflow-hidden', className)}>
      {/* Image */}
      <div 
        className="relative aspect-square overflow-hidden bg-slate-100 cursor-pointer"
        onMouseEnter={handleImageHover}
        onMouseLeave={handleImageLeave}
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.images[currentImageIndex]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.badge && (
            <Badge variant={product.badge}>
              {product.badge === 'new' && 'Nuevo'}
              {product.badge === 'sale' && `-${discountPercentage}%`}
              {product.badge === 'bestseller' && 'Bestseller'}
              {product.badge === 'limited' && 'Limitado'}
              {product.badge === 'out-of-stock' && 'Agotado'}
            </Badge>
          )}
          {product.lowStock && product.inStock && (
            <Badge variant="limited">Stock bajo</Badge>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsWishlisted(!isWishlisted);
            }}
            className={cn(
              'p-2 rounded-full backdrop-blur-sm transition-colors',
              isWishlisted 
                ? 'bg-red-100 text-red-600' 
                : 'bg-white/90 text-slate-600 hover:text-red-600'
            )}
          >
            <Heart size={16} fill={isWishlisted ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2 bg-white/90 text-slate-600 hover:text-blue-600 rounded-full backdrop-blur-sm transition-colors"
          >
            <Eye size={16} />
          </button>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <div className="absolute bottom-4 left-4 right-4">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product);
              }}
              disabled={!product.inStock}
              className="w-full"
              size="sm"
              icon={<ShoppingBag size={16} />}
            >
              {product.inStock ? 'Añadir al carrito' : 'Agotado'}
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400 text-sm">{formatRating(product.rating)}</span>
          <span className="text-xs text-slate-500">({product.reviewCount})</span>
        </div>

        {/* Name */}
        <h3 className="font-medium text-slate-900 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Colors */}
        {availableColors.length > 0 && (
          <div className="flex items-center gap-1 mb-3">
            {availableColors.slice(0, 4).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-slate-200"
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
            {availableColors.length > 4 && (
              <span className="text-xs text-slate-500 ml-1">
                +{availableColors.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-slate-900">
            {formatCurrency(product.price)}
          </span>
          {hasDiscount && (
            <span className="text-sm text-slate-500 line-through">
              {formatCurrency(product.originalPrice!)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}