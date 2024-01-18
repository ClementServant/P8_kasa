import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/LOGO.svg'
import '../style/Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo du site kasa" />
      </div>
      <nav className="header__nav">
        <Link className="nav-accueil" to="/">
          Accueil
        </Link>
        <Link className="nav-apropos" to="/apropos">
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
