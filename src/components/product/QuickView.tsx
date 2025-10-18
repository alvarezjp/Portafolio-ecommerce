import React, { useState } from 'react';
import { X, ShoppingBag, Heart, Star } from 'lucide-react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Product, Color, Size } from '../../types';
import { formatCurrency, formatRating } from '../../lib/utils';
import { cn } from '../../lib/utils';

interface QuickViewProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product, color: Color, size: Size, quantity: number) => void;
}

export function QuickView({ product, isOpen, onClose, onAddToCart }: QuickViewProps) {
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  React.useEffect(() => {
    if (product) {
      const availableColor = product.colors.find(c => c.available);
      const availableSize = product.sizes.find(s => s.available);
      setSelectedColor(availableColor || null);
      setSelectedSize(availableSize || null);
      setCurrentImageIndex(0);
      setQuantity(1);
    }
  }, [product]);

  if (!product) return null;

  const availableColors = product.colors.filter(color => color.available);
  const availableSizes = product.sizes.filter(size => size.available);
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = hasDiscount 
    ? Math.round(((product.originalPrice! - product.price) / product.originalPrice!) * 100)
    : 0;

  const canAddToCart = product.inStock && selectedColor && selectedSize;

  const handleAddToCart = () => {
    if (canAddToCart) {
      onAddToCart(product, selectedColor!, selectedSize!, quantity);
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Images */}
        <div className="space-y-4">
          <div className="aspect-square bg-slate-100 rounded-lg overflow-hidden">
            <img
              src={product.images[currentImageIndex]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          {product.images.length > 1 && (
            <div className="flex gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    'w-16 h-16 rounded-lg overflow-hidden border-2 transition-colors',
                    currentImageIndex === index 
                      ? 'border-blue-600' 
                      : 'border-transparent hover:border-slate-300'
                  )}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
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
            
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-1">
                <span className="text-yellow-400">{formatRating(product.rating)}</span>
                <span className="text-sm text-slate-600">
                  ({product.reviewCount} reseñas)
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold text-slate-900">
                {formatCurrency(product.price)}
              </span>
              {hasDiscount && (
                <span className="text-lg text-slate-500 line-through">
                  {formatCurrency(product.originalPrice!)}
                </span>
              )}
            </div>
          </div>

          {/* Colors */}
          {availableColors.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">
                Color: {selectedColor?.name}
              </label>
              <div className="flex gap-2">
                {availableColors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color)}
                    className={cn(
                      'w-8 h-8 rounded-full border-2 transition-all',
                      selectedColor?.name === color.name
                        ? 'border-slate-900 ring-2 ring-slate-300'
                        : 'border-slate-200 hover:border-slate-400'
                    )}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {availableSizes.length > 0 && (
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="text-sm font-medium text-slate-700">
                  Talla: {selectedSize?.name}
                </label>
                <button className="text-sm text-blue-600 hover:text-blue-700">
                  Guía de tallas
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size.name}
                    onClick={() => size.available && setSelectedSize(size)}
                    disabled={!size.available}
                    className={cn(
                      'py-2 px-3 text-sm border rounded-lg transition-colors',
                      selectedSize?.name === size.name
                        ? 'border-slate-900 bg-slate-900 text-white'
                        : size.available
                        ? 'border-slate-300 hover:border-slate-400'
                        : 'border-slate-200 text-slate-400 cursor-not-allowed'
                    )}
                  >
                    {size.name}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              Cantidad
            </label>
            <div className="flex items-center gap-3">
              <div className="flex items-center border border-slate-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-slate-50"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-slate-50"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <Button
              onClick={handleAddToCart}
              disabled={!canAddToCart}
              className="flex-1"
              size="lg"
              icon={<ShoppingBag size={20} />}
            >
              {!product.inStock ? 'Agotado' : 'Añadir al carrito'}
            </Button>
            <Button
              onClick={() => setIsWishlisted(!isWishlisted)}
              variant="outline"
              size="lg"
              className="px-4"
            >
              <Heart 
                size={20} 
                fill={isWishlisted ? 'currentColor' : 'none'}
                className={isWishlisted ? 'text-red-600' : ''}
              />
            </Button>
          </div>

          {/* Description */}
          <div>
            <p className="text-slate-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* Materials */}
          <div>
            <h4 className="font-medium text-slate-900 mb-2">Materiales</h4>
            <p className="text-sm text-slate-600">{product.materials}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}