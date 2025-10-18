import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  variant?: 'new' | 'sale' | 'bestseller' | 'limited' | 'out-of-stock';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'new', children, className }: BadgeProps) {
  const variants = {
    new: 'bg-green-100 text-green-800',
    sale: 'bg-red-100 text-red-800',
    bestseller: 'bg-yellow-100 text-yellow-800',
    limited: 'bg-purple-100 text-purple-800',
    'out-of-stock': 'bg-gray-100 text-gray-800'
  };

  return (
    <span className={cn(
      'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
      variants[variant],
      className
    )}>
      {children}
    </span>
  );
}