import React from 'react'

const Identity = ({ name, picture }) => {
  return (
    <div className="proprio">
      <p className="proprio__name">{name}</p>
      <img className="proprio__image" src={picture} alt="Photos" />
    </div>
  )
}

export default Identity
