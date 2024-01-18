import React from 'react'
import '../style/Apropos.scss'
import apropos from '../assets/apropos.png'

function AProposPage() {
  return (
    <main className="home">
      <div>
        <img
          className="container__image"
          src={apropos}
          alt="photos d'un paysage montagneux"
        />
      </div>
      <section className="charte">
        <div className="charte__element">Fiabilité</div>
        <div className="charte__element">Respect</div>
        <div className="charte__element">Service</div>
        <div className="charte__element">sécurité</div>
      </section>
    </main>
  )
}

export default AProposPage
