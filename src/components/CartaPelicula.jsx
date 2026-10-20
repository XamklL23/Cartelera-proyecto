function CartaPelicula({titulo, poster, calificacion}){
    return(
        <article className="carta">
            <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={titulo} width="200"/>
            <h3 className="carta__titulo">{titulo}</h3>
            <p className="carta__calificacion">⭐ {calificacion.toFixed(1)}</p>
        </article>
    )
}

export default CartaPelicula