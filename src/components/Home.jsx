import React from 'react'
import home from '../assets/home.png'
import '../style/Home.scss'
import { logements } from '../data/logements.js'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="home">
      <div>
        <img className="header__image" src={home} alt="" />
        <p className="header__text">Chez vous, partout et ailleurs</p>
      </div>
      <section className="logements">
        {logements.map((logements) => (
          <Link
            to={`/Logements${logements.id}`}
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
      </section>
    </div>
  )
}

export default Home
