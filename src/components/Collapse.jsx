import React from 'react'
import arrow from '../assets/arrow_back.svg'
import '../style/Collapse.scss'

const Collapse = ({ text, collapseText }) => {
  return (
    <>
      <details>
        <summary>
          <span role="term">{text}</span>
          <img
            className="arrow"
            src={arrow}
            alt="Flèche pour afficher la charte"
          />
        </summary>
      </details>
      <div role="definition" className="collapse-text">
        <p>{collapseText}</p>
      </div>
    </>
  )
}

export default Collapse
