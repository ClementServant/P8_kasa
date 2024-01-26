import React, { useState } from 'react'
import arrow from '../assets/arrow_back.svg'

const CollapseElement = ({ text, collapseText }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openCollapse = () => {
    setIsOpen((open) => !open)
  }

  return (
    <div className="charte__element">
      <div className="charte__header" onClick={openCollapse}>
        {text}
        <img
          className={`arrow ${isOpen ? 'expanded' : ''}`}
          src={arrow}
          alt="Flèche pour afficher la charte"
        />
      </div>
      <div className={`collapse-text ${isOpen ? 'active' : ''}`}>
        {isOpen && <p>{collapseText}</p>}
      </div>
    </div>
  )
}

export default CollapseElement
