import React from 'react';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Drawer } from '../ui/Drawer';
import { Button } from '../ui/Button';
import { useCart } from '../../hooks/useCart';
import { formatCurrency } from '../../lib/utils';

interface MiniCartProps {
  isOpen: boolean;
  onClose: () => void;
  onViewCart: () => void;
  onCheckout: () => void;
}

export function MiniCart({ isOpen, onClose, onViewCart, onCheckout }: MiniCartProps) {
  const { items, updateQuantity, removeItem, getSubtotal } = useCart();

  const subtotal = getSubtotal();
  const shipping = subtotal > 50000 ? 0 : 5990;
  const total = subtotal + shipping;

  if (items.length === 0) {
    return (
      <Drawer isOpen={isOpen} onClose={onClose} title="Carrito">
        <div className="flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
            <ShoppingBag size={24} className="text-slate-400" />
          </div>
          <h3 className="text-lg font-medium text-slate-900 mb-2">
            Tu carrito está vacío
          </h3>
          <p className="text-slate-600 mb-6">
            Empieza explorando nuestros básicos.
          </p>
          <Button onClick={onClose} className="w-full">
            Seguir comprando
          </Button>
        </div>
      </Drawer>
    );
  }

  return (
    <Drawer isOpen={isOpen} onClose={onClose} title="Carrito">
      <div className="flex flex-col h-full">
        {/* Items */}
        <div className="flex-1 overflow-y-auto px-4 py-2">
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-3 p-3 bg-slate-50 rounded-lg">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg bg-white"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-slate-900 text-sm mb-1 line-clamp-1">
                    {item.product.name}
                  </h4>
                  <div className="flex items-center gap-2 text-xs text-slate-600 mb-2">
                    <span>{item.selectedColor.name}</span>
                    <span>•</span>
                    <span>Talla {item.selectedSize.name}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-white rounded transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-white rounded transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-slate-900 text-sm">
                        {formatCurrency(item.product.price * item.quantity)}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="border-t border-slate-200 p-4 space-y-4">
          {/* Shipping Notice */}
          {subtotal < 50000 && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <p className="text-sm text-blue-800">
                Añade {formatCurrency(50000 - subtotal)} más para envío gratis
              </p>
            </div>
          )}

          {/* Totals */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Subtotal</span>
              <span className="text-slate-900">{formatCurrency(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">Envío</span>
              <span className="text-slate-900">
                {shipping === 0 ? 'Gratis' : formatCurrency(shipping)}
              </span>
            </div>
            <div className="flex justify-between font-semibold text-slate-900 pt-2 border-t border-slate-200">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-2">
            <Button onClick={onCheckout} className="w-full" size="lg">
              Ir a pagar
            </Button>
            <Button 
              onClick={onViewCart} 
              variant="outline" 
              className="w-full"
              size="lg"
            >
              Ver carrito
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
}