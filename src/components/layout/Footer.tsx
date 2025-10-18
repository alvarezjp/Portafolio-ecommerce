import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  const sections = [
    {
      title: 'Ayuda',
      links: [
        { name: 'Preguntas frecuentes', href: '/faq' },
        { name: 'Contacto', href: '/contact' },
        { name: 'Talla y ajuste', href: '/size-guide' },
        { name: 'Cuidado de prendas', href: '/care-guide' }
      ]
    },
    {
      title: 'Pedidos',
      links: [
        { name: 'Envíos', href: '/shipping' },
        { name: 'Devoluciones', href: '/returns' },
        { name: 'Seguir pedido', href: '/track' },
        { name: 'Garantía', href: '/warranty' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Sobre NORD', href: '/about' },
        { name: 'Sostenibilidad', href: '/sustainability' },
        { name: 'Trabajo', href: '/careers' },
        { name: 'Prensa', href: '/press' }
      ]
    }
  ];

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="py-12 border-b border-slate-200">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">
              Únete y recibe 10% OFF en tu primera compra
            </h3>
            <p className="text-slate-600 mb-6">
              Sé el primero en conocer nuestras novedades y ofertas exclusivas.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-2.5 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <button
                type="submit"
                className="px-6 py-2.5 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
              >
                Suscribirse
              </button>
            </form>
            <p className="text-xs text-slate-500 mt-3">
              Al suscribirte, aceptas nuestra política de privacidad.
            </p>
          </div>
        </div>

        {/* Links */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-4">NORD Wear</h3>
            <p className="text-slate-600 mb-6 text-sm">
              Básicos que combinan con todo. Diseño minimalista, calidad premium.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-slate-900 mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-slate-600 hover:text-slate-900 transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="py-6 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; 2024 NORD Wear. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <a href="/privacy" className="hover:text-slate-900 transition-colors">
              Privacidad
            </a>
            <a href="/terms" className="hover:text-slate-900 transition-colors">
              Términos
            </a>
            <a href="/cookies" className="hover:text-slate-900 transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}