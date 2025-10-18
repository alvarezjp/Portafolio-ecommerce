import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

interface Collection {
  id: string;
  name: string;
  description: string;
  image: string;
  itemCount: number;
  href: string;
}

interface FeaturedCollectionsProps {
  onCollectionClick: (collectionId: string) => void;
}

export function FeaturedCollections({ onCollectionClick }: FeaturedCollectionsProps) {
  const collections: Collection[] = [
    {
      id: 'basics',
      name: 'Básicos',
      description: 'Esenciales atemporales para tu guardarropa diario',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
      itemCount: 24,
      href: '/collections/basics'
    },
    {
      id: 'sustainable',
      name: 'Sostenible',
      description: 'Moda consciente con materiales orgánicos y reciclados',
      image: 'https://images.pexels.com/photos/5867364/pexels-photo-5867364.jpeg?auto=compress&cs=tinysrgb&w=800',
      itemCount: 18,
      href: '/collections/sustainable'
    },
    {
      id: 'limited',
      name: 'Edición Limitada',
      description: 'Piezas exclusivas en cantidades limitadas',
      image: 'https://images.pexels.com/photos/4210860/pexels-photo-4210860.jpeg?auto=compress&cs=tinysrgb&w=800',
      itemCount: 12,
      href: '/collections/limited'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Colecciones destacadas
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Descubre nuestras colecciones cuidadosamente curadas para cada ocasión y estilo de vida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="group relative overflow-hidden rounded-2xl bg-slate-100 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              onClick={() => onCollectionClick(collection.id)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="mb-2">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    {collection.itemCount} productos
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                <p className="text-white/90 mb-4">{collection.description}</p>
                
                <Button
                  variant="ghost"
                  className="text-white hover:bg-white/20 backdrop-blur-sm border-white/30 group-hover:translate-x-1 transition-transform duration-300"
                  icon={<ArrowRight size={16} />}
                >
                  Explorar
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}