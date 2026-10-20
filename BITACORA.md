# Bitácora: Cartelera de Películas

Proyecto de aprendizaje en React que consume la API de TMDB.
Aquí documento cada avance: qué hice y para qué sirve.

## Tecnologías
React, Vite, JavaScript, HTML, CSS, API de TMDB.

## Avances

1. Se crea Vite de proyecto de Cartelera
|| Guardé mi API key en un archivo .env y lo agregué al .gitignore | Mantener la clave privada y fuera de GitHub |
|| Creé el servicio tmdb.js con fetch, async y await | Separar la comunicación con la API del resto de la interfaz |
|| Usé useState y useEffect en App | Guardar las películas en memoria y pedirlas al cargar la página |
|| Creé CartaPelicula con props y la dibujé con map | Mostrar una tarjeta por película reutilizando un solo componente |
|| Agregué buscarPeliculas al servicio con encodeURIComponent | Hacer una segunda petición a la API según lo que escriba el usuario |
|| Creé el componente Buscador como input controlado | Guardar en estado lo que el usuario escribe y avisar al componente padre |
|| Manejé los estados de cargando, error y sin resultados | Que la app siempre muestre qué está pasando, aunque algo falle |