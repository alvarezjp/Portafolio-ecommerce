import React from 'react';
import { cn } from '../../lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  icon?: React.ReactNode;
}

export function Input({
  label,
  error,
  helperText,
  icon,
  className,
  id,
  ...props
}: InputProps) {
  const inputId = id || label?.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="w-full">
      {label && (
        <label 
          htmlFor={inputId}
          className="block text-sm font-medium text-slate-700 mb-2"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400">
            {icon}
          </div>
        )}
        <input
          id={inputId}
          className={cn(
            'block w-full px-3 py-2.5 border border-slate-300 rounded-xl shadow-sm placeholder-slate-400 text-slate-900',
            'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500',
            'disabled:bg-slate-50 disabled:text-slate-500 disabled:cursor-not-allowed',
            error && 'border-red-300 focus:border-red-500 focus:ring-red-500',
            icon && 'pl-10',
            className
          )}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600">{error}</p>
      )}
      {helperText && !error && (
        <p className="mt-2 text-sm text-slate-500">{helperText}</p>
      )}
    </div>
  );
}