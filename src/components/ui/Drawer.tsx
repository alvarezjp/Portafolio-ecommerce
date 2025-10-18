import React, { useEffect } from 'react';
import { cn } from '../../lib/utils';
import { X } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  position?: 'left' | 'right';
  className?: string;
}

export function Drawer({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  position = 'right',
  className 
}: DrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const positionClasses = {
    left: {
      container: 'justify-start',
      drawer: 'transform transition-transform duration-300 ease-in-out',
      open: 'translate-x-0',
      closed: '-translate-x-full'
    },
    right: {
      container: 'justify-end',
      drawer: 'transform transition-transform duration-300 ease-in-out',
      open: 'translate-x-0',
      closed: 'translate-x-full'
    }
  };

  return (
    <div 
      className={cn(
        'fixed inset-0 z-50 overflow-hidden transition-opacity duration-300',
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />
      <div className={cn('relative h-full flex', positionClasses[position].container)}>
        <div className={cn(
          'h-full w-96 max-w-full bg-white shadow-xl flex flex-col',
          positionClasses[position].drawer,
          isOpen ? positionClasses[position].open : positionClasses[position].closed,
          className
        )}>
          {title && (
            <div className="flex items-center justify-between p-4 border-b border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900">
                {title}
              </h3>
              <button
                onClick={onClose}
                className="text-slate-400 hover:text-slate-600 transition-colors p-1"
              >
                <X size={20} />
              </button>
            </div>
          )}
          <div className="flex-1 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}