import React from 'react'
import Slideshow from './Slideshow.jsx'
import { logements } from '../data/logements.js'
import { useParams } from 'react-router-dom'
import '../style/Slideshow.scss'
import '../style/Logement.scss'
import '../style/Rating.scss'
import Collapse from './Collapse.jsx'
import Rating from './Rating.jsx'

const Location = ({ title, location, tags }) => {
  return (
    <div className="location">
      <h1 className="logement__title">{title}</h1>
      <p className="logement__location">{location}</p>
      <div className="logement__tag">
        {tags.map((tags, index) => (
          <p key={index} className="tag">
            {tags}
          </p>
        ))}
      </div>
    </div>
  )
}

const Identity = ({ name, picture }) => {
  return (
    <div className="proprio">
      <p className="proprio__name">{name}</p>
      <img className="proprio__image" src={picture} alt="Photos" />
    </div>
  )
}

const LogementDetail = () => {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  return (
    <main className="home">
      <section className="container">
        <Slideshow pictures={logement.pictures} />
        <div className="info-container">
          <Location
            title={logement.title}
            location={logement.location}
            tags={logement.tags}
          />
          <div className="info__proprio">
            <Identity
              name={logement.host.name}
              picture={logement.host.picture}
            />
            <Rating rating={logement.rating} />
          </div>
        </div>
        <div className="info__logements">
          <div className="collapse">
            <Collapse
              text={<span className="description">Description</span>}
              collapseText={logement.description}
            />
          </div>
          <div className="collapse">
            <Collapse
              text={<span className="equipments">Équipements</span>}
              collapseText={logement.equipments.map((equipment, index) => (
                <span key={index}>{equipment}</span>
              ))}
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default LogementDetail
