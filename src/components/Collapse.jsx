import React, { useState } from 'react'
import arrow from '../assets/arrow_back.svg'

const Collapse = ({ text, collapseText }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleCollapse = () => {
    setIsOpen((open) => !open)
  }

  return (
    <details className={`collapse__element ${isOpen ? 'open' : ''}`}>
      <summary className="collapse__header" onClick={toggleCollapse}>
        {text}
        <img
          className={`arrow ${isOpen ? 'expanded' : ''}`}
          src={arrow}
          alt="Flèche pour afficher la charte"
        />
      </summary>
      <div className="collapse-text">{isOpen && <p>{collapseText}</p>}</div>
    </details>
  )
}

export default Collapse
