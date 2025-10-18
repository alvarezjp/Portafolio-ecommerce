import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubscribed(true);
    }, 1000);
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
            <CheckCircle size={32} />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            ¡Suscripción exitosa!
          </h3>
          <p className="text-blue-100">
            Te hemos enviado un código de descuento del 10% a tu email.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 text-white rounded-2xl mb-8">
          <Mail size={32} />
        </div>
        
        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          Únete y recibe 10% OFF en tu primera compra
        </h3>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Sé el primero en conocer nuestras novedades, ofertas exclusivas y consejos de estilo.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white placeholder-white/70 focus:bg-white/20"
              />
            </div>
            <Button
              type="submit"
              loading={isLoading}
              className="bg-white text-blue-600 hover:bg-blue-50 font-semibold px-8"
              size="lg"
            >
              Suscribirse
            </Button>
          </div>
          
          <p className="text-sm text-blue-200 mt-4 flex items-center justify-center gap-2">
            <input type="checkbox" required className="rounded" />
            Al suscribirte, aceptas nuestra política de privacidad.
          </p>
        </form>
      </div>
    </section>
  );
}