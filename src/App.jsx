import { useState , useEffect} from 'react'
import Personajes from './components/Personajes'
import Paginacion from './components/Paginacion'
                                


function App() {
  const [personajes, setPersonajes] = useState([])

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const [info, setInfo] = useState([])
  
function fetchPersonajes(url){
  fetch(url)
  .then(respuesta => respuesta.json())
  .then(datos => {
    setPersonajes(datos.results)
    setInfo(datos.info)
    console.log(datos.info);
  })
  .catch(error => console.log(error));
}

useEffect(() => {
  fetchPersonajes(initialUrl)
}, [])
 
const anterior = ( )=>{
  fetchPersonajes(info.prev)
}

const siguiente = () =>{
  fetchPersonajes(info.next)
}


  return (
    <>
   <Paginacion prev={info.prev} 
   next={info.next}
   siguiente={siguiente}
   anterior={anterior}/>
   <Personajes personajes={personajes}/>
    </>
  )
}

export default App
