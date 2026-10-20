import { useState, useEffect } from 'react'
import Encabezado from './components/Encabezado'
import { obtenerPeliculasTop } from './services/tmdb'

function App() {
  const [peliculas, setPeliculas] = useState([])

  useEffect(() => {
    obtenerPeliculasTop().then((datos) => {
      setPeliculas(datos)
    })
  }, [])

  return (
    <div>
      <Encabezado />
      <p>Cantidad de películas recibidas: {peliculas.length}</p>
    </div>
  )
}

export default App