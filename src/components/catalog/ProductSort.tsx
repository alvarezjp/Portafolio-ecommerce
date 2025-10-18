import React from 'react';
import { Grid, List, ChevronDown } from 'lucide-react';
import { SortOption, ViewMode } from '../../types';
import { cn } from '../../lib/utils';

interface ProductSortProps {
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  totalResults: number;
}

export function ProductSort({ 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange,
  totalResults 
}: ProductSortProps) {
  const sortOptions = [
    { value: 'relevance' as SortOption, label: 'Relevancia' },
    { value: 'price-asc' as SortOption, label: 'Precio: menor a mayor' },
    { value: 'price-desc' as SortOption, label: 'Precio: mayor a menor' },
    { value: 'newest' as SortOption, label: 'Más nuevos' },
    { value: 'rating' as SortOption, label: 'Mejor valorados' },
  ];

  return (
    <div className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm border border-slate-200">
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-600">
          {totalResults} {totalResults === 1 ? 'producto' : 'productos'}
        </span>
      </div>

      <div className="flex items-center gap-4">
        {/* Sort Dropdown */}
        <div className="relative">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="appearance-none bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 pr-8 text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 pointer-events-none" />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center bg-slate-100 rounded-lg p-1">
          <button
            onClick={() => onViewModeChange('grid')}
            className={cn(
              'p-2 rounded-md transition-colors',
              viewMode === 'grid'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            )}
          >
            <Grid size={16} />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={cn(
              'p-2 rounded-md transition-colors',
              viewMode === 'list'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
            )}
          >
            <List size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}