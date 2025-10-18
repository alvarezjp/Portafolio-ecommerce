import React, { useState } from 'react';
import { X, SlidersHorizontal } from 'lucide-react';
import { Button } from '../ui/Button';
import { Drawer } from '../ui/Drawer';
import { Filter } from '../../types';
import { cn } from '../../lib/utils';

interface ProductFiltersProps {
  filters: Filter;
  onFiltersChange: (filters: Filter) => void;
  onClearFilters: () => void;
  isMobile?: boolean;
}

export function ProductFilters({ 
  filters, 
  onFiltersChange, 
  onClearFilters, 
  isMobile = false 
}: ProductFiltersProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const categories = [
    'Camisetas', 'Poleras', 'Pantalones', 'Chaquetas', 'Hoodies', 'Jeans', 'Camisas', 'Calzado'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', '28', '30', '32', '34', '36', '39', '40', '41', '42', '43'];

  const colors = [
    { name: 'Blanco', value: '#FFFFFF' },
    { name: 'Negro', value: '#000000' },
    { name: 'Gris', value: '#9CA3AF' },
    { name: 'Azul', value: '#3B82F6' },
    { name: 'Verde', value: '#10B981' },
    { name: 'Beige', value: '#D2B48C' },
  ];

  const materials = ['Algodón', 'Poliéster', 'Lana', 'Lino', 'Denim'];

  const handleCategoryChange = (category: string) => {
    onFiltersChange({
      ...filters,
      category: filters.category === category ? undefined : category
    });
  };

  const handleSizeToggle = (size: string) => {
    const currentSizes = filters.sizes || [];
    const newSizes = currentSizes.includes(size)
      ? currentSizes.filter(s => s !== size)
      : [...currentSizes, size];
    
    onFiltersChange({
      ...filters,
      sizes: newSizes.length > 0 ? newSizes : undefined
    });
  };

  const handleColorToggle = (colorName: string) => {
    const currentColors = filters.colors || [];
    const newColors = currentColors.includes(colorName)
      ? currentColors.filter(c => c !== colorName)
      : [...currentColors, colorName];
    
    onFiltersChange({
      ...filters,
      colors: newColors.length > 0 ? newColors : undefined
    });
  };

  const handlePriceRangeChange = (min: number, max: number) => {
    onFiltersChange({
      ...filters,
      priceRange: [min, max]
    });
  };

  const handleMaterialToggle = (material: string) => {
    const currentMaterials = filters.materials || [];
    const newMaterials = currentMaterials.includes(material)
      ? currentMaterials.filter(m => m !== material)
      : [...currentMaterials, material];
    
    onFiltersChange({
      ...filters,
      materials: newMaterials.length > 0 ? newMaterials : undefined
    });
  };

  const FiltersContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">Categoría</h3>
        <div className="space-y-2">
          {categories.map(category => (
            <label key={category} className="flex items-center">
              <input
                type="radio"
                checked={filters.category === category}
                onChange={() => handleCategoryChange(category)}
                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-slate-700">{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">Talla</h3>
        <div className="grid grid-cols-4 gap-2">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => handleSizeToggle(size)}
              className={cn(
                'py-2 px-3 text-sm border rounded-lg transition-colors',
                (filters.sizes || []).includes(size)
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-300 hover:border-slate-400'
              )}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color.name}
              onClick={() => handleColorToggle(color.name)}
              className={cn(
                'w-10 h-10 rounded-full border-2 transition-all',
                (filters.colors || []).includes(color.name)
                  ? 'border-slate-900 ring-2 ring-slate-300'
                  : 'border-slate-200 hover:border-slate-400'
              )}
              style={{ backgroundColor: color.value }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">Precio</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <input
              type="number"
              placeholder="Mín"
              value={filters.priceRange?.[0] || ''}
              onChange={(e) => {
                const min = parseInt(e.target.value) || 0;
                const max = filters.priceRange?.[1] || 100000;
                handlePriceRangeChange(min, max);
              }}
              className="w-20 px-2 py-1 border border-slate-300 rounded text-sm"
            />
            <span className="text-slate-500">-</span>
            <input
              type="number"
              placeholder="Máx"
              value={filters.priceRange?.[1] || ''}
              onChange={(e) => {
                const min = filters.priceRange?.[0] || 0;
                const max = parseInt(e.target.value) || 100000;
                handlePriceRangeChange(min, max);
              }}
              className="w-20 px-2 py-1 border border-slate-300 rounded text-sm"
            />
          </div>
        </div>
      </div>

      {/* Materials */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map(material => (
            <label key={material} className="flex items-center">
              <input
                type="checkbox"
                checked={(filters.materials || []).includes(material)}
                onChange={() => handleMaterialToggle(material)}
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="ml-2 text-sm text-slate-700">{material}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Availability */}
      <div>
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={filters.inStock || false}
            onChange={(e) => onFiltersChange({
              ...filters,
              inStock: e.target.checked || undefined
            })}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <span className="ml-2 text-sm text-slate-700">Solo productos disponibles</span>
        </label>
      </div>

      {/* Clear Filters */}
      <Button
        onClick={onClearFilters}
        variant="outline"
        className="w-full"
        icon={<X size={16} />}
      >
        Limpiar filtros
      </Button>
    </div>
  );

  if (isMobile) {
    return (
      <>
        <Button
          onClick={() => setIsDrawerOpen(true)}
          variant="outline"
          icon={<SlidersHorizontal size={16} />}
        >
          Filtros
        </Button>
        <Drawer
          isOpen={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          title="Filtros"
        >
          <div className="p-4">
            <FiltersContent />
          </div>
        </Drawer>
      </>
    );
  }

  return (
    <div className="w-64 bg-white rounded-xl p-6 shadow-sm border border-slate-200 h-fit">
      <h2 className="text-lg font-semibold text-slate-900 mb-6">Filtros</h2>
      <FiltersContent />
    </div>
  );
}