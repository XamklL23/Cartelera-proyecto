import { useState, useEffect } from 'react'
import Encabezado from './components/Encabezado'
import Buscador from './components/buscador'
import CartaPelicula from './components/CartaPelicula'
import { obtenerPeliculasTop, buscarPeliculas } from './services/tmdb'

function App() {
  const [peliculas, setPeliculas] = useState([])
  const [texto, setTexto] = useState('')
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    obtenerPeliculasTop()
      .then((datos) => setPeliculas(datos))
      .catch(() => setError(true))
      .finally(() => setCargando(false))
  }, [])

  async function manejarBusqueda() {
    const consulta = texto.trim()
    setCargando(true)
    setError(false)

    try {
      const datos =
        consulta === ''
          ? await obtenerPeliculasTop()
          : await buscarPeliculas(consulta)
      setPeliculas(datos)
    } catch {
      setError(true)
    } finally {
      setCargando(false)
    }
  }

  return (
    <div>
      <Encabezado />
      <Buscador valor={texto} alCambiar={setTexto} alBuscar={manejarBusqueda} />

      {cargando && <p className="mensaje">Cargando películas...</p>}
      {error && <p className="mensaje">Ocurrió un error al cargar las películas.</p>}
      {!cargando && !error && peliculas.length === 0 && (
        <p className="mensaje">No se encontraron películas.</p>
      )}

      <section className="cartelera">
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