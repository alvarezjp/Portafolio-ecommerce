import React, { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

interface ToastProps {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info';
  onRemove: (id: string) => void;
}

export function Toast({ id, message, type, onRemove }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, 4000);

    return () => clearTimeout(timer);
  }, [id, onRemove]);

  const icons = {
    success: <CheckCircle size={20} />,
    error: <AlertCircle size={20} />,
    info: <Info size={20} />
  };

  const styles = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  return (
    <div className={cn(
      'flex items-center p-4 border rounded-xl shadow-sm',
      styles[type]
    )}>
      <div className="flex-shrink-0">
        {icons[type]}
      </div>
      <div className="ml-3 flex-1">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={() => onRemove(id)}
        className="ml-4 flex-shrink-0 text-current opacity-70 hover:opacity-100 transition-opacity"
      >
        <X size={16} />
      </button>
    </div>
  );
}