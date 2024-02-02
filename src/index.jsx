import React from 'react'
import ReactDOM from 'react-dom'
import './style/index.scss'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Logements from './pages/Logements'
import Apropos from './pages/Apropos'
import Error from './pages/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logements/:id" element={<Logements />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
