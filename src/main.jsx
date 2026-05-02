import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Layout from './component/layout/layout'
import Accueil from './page/accueil'
import TheAreas from './page/the-areas'
import Apropos from './page/apropos'
import Contact from './page/contact'
import Service from './page/service'
import Gallery from './page/gallery'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Toutes les routes utilisent Layout pour le Footer uniquement */}
        <Route path="/" element={<Layout><Accueil /></Layout>} />
        <Route path="/the-areas" element={<Layout><TheAreas /></Layout>} />
        <Route path="/apropos" element={<Layout><Apropos /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/service" element={<Layout><Service /></Layout>} />
        <Route path="/gallery" element={<Layout><Gallery /></Layout>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
