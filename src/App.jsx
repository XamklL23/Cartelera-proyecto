import { useState, useEffect } from 'react'
import Encabezado from './components/Encabezado'
import CartaPelicula from './components/CartaPelicula'
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
      <section>
        {peliculas.map((pelicula) => (
          <CartaPelicula
            key={pelicula.id}
            titulo={pelicula.title}
            poster={pelicula.poster_path}
            calificacion={pelicula.vote_average}
          />
        ))}
      </section>
    </div>
  )
}

export default App