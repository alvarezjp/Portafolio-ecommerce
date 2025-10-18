import React from 'react';
import { Truck, RotateCcw, Shield, Award } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Truck size={32} />,
      title: 'Envío 48h',
      description: 'Entrega rápida y segura en toda Chile'
    },
    {
      icon: <RotateCcw size={32} />,
      title: 'Cambios fáciles',
      description: '30 días para cambios y devoluciones gratuitas'
    },
    {
      icon: <Shield size={32} />,
      title: 'Pago 100% seguro',
      description: 'Transacciones protegidas y datos encriptados'
    },
    {
      icon: <Award size={32} />,
      title: 'Calidad garantizada',
      description: 'Materiales premium con garantía de satisfacción'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-slate-600">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}