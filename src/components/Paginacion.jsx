import React from 'react'
import "./paginacion.css"

function Paginacion({prev , next , anterior , siguiente}) {

    const handleAnterior = ( ) =>{
        anterior()
    }
    const handleSiguiente = () =>{
        siguiente()
    }



  return (
    <div className='divNav'>
        <div className='divNav'>
        <nav>
            <ul>

                {prev ? (<li><button onClick={handleAnterior}>Anterior</button></li>) : null}
                
                
                    
                { next ? (<li><button onClick={handleSiguiente}>Siguiente</button></li>) : null}

            </ul>
        </nav>
        </div>
    </div>
  )
}

export default Paginacion