import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '../ui/Button';

interface HeroProps {
  onShopNow: () => void;
  onViewCollection: () => void;
}

export function Hero({ onShopNow, onViewCollection }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Content */}
          <div className="relative z-10 space-y-8">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                Nueva colección disponible
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Básicos que
                <br />
                <span className="text-blue-600">combinan</span>
                <br />
                con todo.
              </h1>
            </div>
            
            <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
              Descubre nuestra colección de esenciales minimalistas. 
              Diseño atemporal, calidad premium y comodidad excepcional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onShopNow}
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                icon={<ArrowRight size={20} />}
              >
                Comprar ahora
              </Button>
              <Button 
                onClick={onViewCollection}
                variant="outline" 
                size="lg"
                className="border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300"
                icon={<Play size={18} />}
              >
                Ver colección
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-slate-200">
              <div>
                <div className="text-2xl font-bold text-slate-900">50k+</div>
                <div className="text-sm text-slate-600">Clientes satisfechos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">4.8★</div>
                <div className="text-sm text-slate-600">Rating promedio</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-900">100%</div>
                <div className="text-sm text-slate-600">Materiales sostenibles</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Modelo vistiendo ropa minimalista NORD Wear"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-100 rounded-full opacity-60"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-100 rounded-full opacity-40"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
          </div>
        </div>
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
    </section>
  );
}