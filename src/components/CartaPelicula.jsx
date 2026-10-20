function CartaPelicula({titulo, poster, calificacion}){
    return(
        <article>
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={titulo} width="200"/>
            <h3>{titulo}</h3>
            <p>⭐ {calificacion.toFixed(1)}</p>
        </article>
    )
}

export default CartaPelicula