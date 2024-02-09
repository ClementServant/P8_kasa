import React from 'react'
import home from '../assets/home.png'
import '../style/Home.scss'
import { logements } from '../data/logements.js'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <img
          className="header__image"
          src={home}
          alt="Photos d'un paysage montagneux"
        />
        <p className="header__text">Chez vous, partout et ailleurs</p>
      </div>
      <section className="logements">
        <div className="logements__container">
          {logements.map((logements) => (
            <Link
              to={`/Logements/${logements.id}`}
              key={logements.id}
              className="card"
            >
              <img
                className="card__image"
                src={logements.cover}
                alt={logements.title}
              />
              <h2 className="card__title">{logements.title}</h2>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
