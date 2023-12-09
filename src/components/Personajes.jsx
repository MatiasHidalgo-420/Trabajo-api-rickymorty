import React from 'react'
import "./personajes.css"

function Personajes( { personajes} ) {
  return (
    <div className='padreCards'>
        { personajes.map((personaje, indice) =>  (
            <div key={indice} >
                <div className='card'>
                    <img className='imgs' src={personaje.image} alt="personaje" />
                    <div className='titles'>
                        <h3>Nombre: {personaje.name}</h3>
                        <p>Estado: {personaje.status}</p>
                        <p>Especie: {personaje.species}</p>
                        <p>Ubicacion: {personaje.location.name}</p>
                    </div>
                </div>
            </div>

        ) ) }
    </div>
  )
}

export default Personajes