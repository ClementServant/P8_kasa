import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import '../style/Slideshow.scss'
import { logements } from '../data/logements.js'
import arrowLeft from '../assets/arrowLeft.svg'
import arrowRight from '../assets/arrowRight.svg'

const Slideshow = () => {
  const { id } = useParams()
  const logement = logements.find((logement) => logement.id === id)

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const PrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    )
  }

  const NextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <main className="home">
      <section className="container">
        <div className="slideshow-container">
          <img
            className="arrow left"
            src={arrowLeft}
            alt="Previous"
            onClick={PrevClick}
          />
          <img
            className="pictures"
            src={logement.pictures[currentImageIndex]}
            alt={`${currentImageIndex + 1}`}
          />
          <img
            className="arrow right"
            src={arrowRight}
            alt="Next"
            onClick={NextClick}
          />
        </div>
        <div className="info-container">
          <div className="location">
            <h1 className="logement__title">{logement.title}</h1>
            <p className="logement__location">{logement.location}</p>
            <div className="logement__tag">
              {logement.tags.map((tags, index) => (
                <p key={index} className="tag">
                  {tags}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p>Ici le host</p>
            <p>{logement.rating}</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Slideshow
