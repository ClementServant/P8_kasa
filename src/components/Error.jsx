import React from 'react'
import '../style/Error.scss'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className="error">
      <div className="title">
        <h1 className="title__text">404</h1>
      </div>
      <div className="container">
        <p className="container__text">
          Oups! La page que vous demandez n'existe pas.
        </p>
      </div>
      <div>
        <Link className="error-link" to="/">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </main>
  )
}

export default Error
