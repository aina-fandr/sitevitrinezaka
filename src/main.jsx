import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Accueil from './page/accueil'
import TheAreas from './page/the-areas'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/the-areas" element={<TheAreas />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)