import React from 'react'
import { createRoot } from 'react-dom/client'
import './style/index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Logements from './pages/Logements'
import Apropos from './pages/Apropos'
import Error from './pages/Error'

const container = document.getElementById('root')

const root = createRoot(container)
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
