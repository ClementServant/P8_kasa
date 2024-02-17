import React from 'react'

const Location = ({ title, location, tags }) => {
  return (
    <div className="location">
      <h1 className="logement__title">{title}</h1>
      <p className="logement__location">{location}</p>
      <div className="logement__tag">
        {tags.map((tag, index) => (
          <p key={index} className="tag">
            {tag}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Location
