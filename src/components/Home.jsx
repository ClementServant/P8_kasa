import React from 'react'
import home from '../assets/home.png'
import '../style/Home.scss'
import { logements } from '../data/logements.js'

const Home = () => {
  return (
    <div className="home">
      <div>
        <img className="header-image" src={home} alt="" />
        <p className="header-text">Chez vous, partout et ailleurs</p>
      </div>
      <section className="logements">
        {logements.map((logements) => (
          <div key={logements.id} className="card">
            <img
              className="card__image"
              src={logements.cover}
              alt={logements.title}
            />
            <h2 className="card__title">{logements.title}</h2>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home
