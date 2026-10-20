const API_KEY= import.meta.env.VITE_API_KEY
const BASE_URL='https://api.themoviedb.org/3'


export async function obtenerPeliculasTop(){
    const respuesta = await fetch(
    `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=es-ES`
    )
    const datos = await respuesta.json()
    return datos.results
}

export async function buscarPeliculas(texto) {
  const respuesta = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=es-ES&query=${encodeURIComponent(texto)}`
  )
  const datos = await respuesta.json()
  return datos.results
}
