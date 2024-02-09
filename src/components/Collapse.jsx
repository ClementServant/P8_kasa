import React, { useState } from 'react'
import arrow from '../assets/arrow_back.svg'

const Collapse = ({ text, collapseText }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openCollapse = () => {
    setIsOpen((open) => !open)
  }

  return (
    <div className="collapse__element">
      <div className="collapse__header" onClick={openCollapse}>
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

export default Collapse
