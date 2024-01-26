import React from 'react'
import '../style/Apropos.scss'
import apropos from '../assets/apropos.png'
import CollapseElement from './CollapseElement'

function AProposPage() {
  const charteElements = [
    {
      text: 'Fiabilité',
      collapseText:
        'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
    },
    {
      text: 'Respect',
      collapseText:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      text: 'Service',
      collapseText:
        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
    },
    {
      text: 'Sécurité',
      collapseText:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ]

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
        {charteElements.map((element, index) => (
          <CollapseElement
            key={index}
            text={element.text}
            collapseText={element.collapseText}
          />
        ))}
      </section>
    </main>
  )
}

export default AProposPage
