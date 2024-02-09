import React from 'react'
import '../style/Rating.scss'

const Rating = ({ rating }) => {
  const maxStars = 5
  const filledStars = rating || 0

  return (
    <div className="rating">
      {[...Array(maxStars)].map((_, index) => (
        <span key={index} className={index < filledStars ? 'filled' : 'max'}>
          {'\u2605'}
        </span>
      ))}
    </div>
  )
}

export default Rating
