import React from 'react'
import Slideshow from './Slideshow.jsx'
import { logements } from '../data/logements.js'
import { Navigate, useParams } from 'react-router-dom'
import '../style/Slideshow.scss'
import '../style/Logement.scss'
import '../style/Rating.scss'
import Collapse from './Collapse.jsx'
import Location from './Location.jsx'
import Identity from './Identity.jsx'
import Rating from './Rating.jsx'

const Logements = () => {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  if (!logement) {
    return <Navigate to="/*" />
  }

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

export default Logements
