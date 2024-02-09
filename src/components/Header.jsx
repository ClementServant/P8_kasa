import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/LogoHeader.svg'
import '../style/Header.scss'

const Header = () => {
  return (
    <header className="header">
      <div>
        <img src={logo} alt="logo du site kasa" />
      </div>
      <nav className="header__nav">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'nav-accueil active' : 'nav-accueil'
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/apropos"
          className={({ isActive }) =>
            isActive ? 'nav-apropos active' : 'nav-apropos'
          }
        >
          A Propos
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
