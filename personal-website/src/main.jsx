import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import React from 'react'

import App from './App.jsx'
import Projects from './Routes/Projects.jsx'
import Contact from './Routes/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<App />} />
        <Route path="projects" element={<Projects />} />
        <Route path="contact" element={<Contact />} />
        
      </Routes>

    </BrowserRouter>

  </StrictMode>
)
