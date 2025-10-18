import React, { useState } from 'react';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';

type Page = 'home' | 'catalog';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'catalog':
        return <Catalog />;
      default:
        return <Home />;
    }
  };

  // In a real app, this would be handled by a router like React Router
  // For now, we'll show the home page with navigation capability
  return (
    <div>
      {renderPage()}
      
      {/* Navigation Helper - Hidden but available for testing */}
      <div className="fixed bottom-4 right-4 bg-white rounded-lg shadow-lg p-2 opacity-90 z-50">
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentPage('home')}
            className={`px-3 py-1 rounded text-sm ${
              currentPage === 'home' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('catalog')}
            className={`px-3 py-1 rounded text-sm ${
              currentPage === 'catalog' 
                ? 'bg-blue-600 text-white' 
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Catalog
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;