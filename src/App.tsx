import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Catalog } from './pages/Catalog'
import { SearchResults } from './pages/SearchResults'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
    </Router>
  )
}

export default App
