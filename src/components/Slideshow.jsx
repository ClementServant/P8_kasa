import React, { useState } from 'react'
import arrowLeft from '../assets/arrowLeft.svg'
import arrowRight from '../assets/arrowRight.svg'

const Slideshow = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const PrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  const NextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="slideshow-container">
      {pictures.length > 1 && (
        <img
          className="arrow left"
          src={arrowLeft}
          alt="Previous"
          onClick={PrevClick}
        />
      )}

      <img
        className="pictures"
        src={pictures[currentImageIndex]}
        alt={`${currentImageIndex + 1}`}
      />
      {pictures.length > 1 && (
        <p className="picture__number">
          {currentImageIndex + 1} / {pictures.length}
        </p>
      )}

      {pictures.length > 1 && (
        <img
          className="arrow right"
          src={arrowRight}
          alt="Next"
          onClick={NextClick}
        />
      )}
    </div>
  )
}

export default Slideshow
