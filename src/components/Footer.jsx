import React from 'react'
import logo from '../assets/LogoFooter.svg'
import '../style/Footer.scss'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__div">
        <img className="footer__logo" src={logo} alt="Logo du site kasa" />
        <p className="footer__text">© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
