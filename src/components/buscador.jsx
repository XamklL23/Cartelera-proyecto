function Buscador({ valor, alCambiar, alBuscar }) {
  function manejarEnvio(evento) {
    evento.preventDefault()
    alBuscar()
  }

  return (
    <form className="buscador" onSubmit={manejarEnvio}>
      <input
        type="text"
        placeholder="Buscar una película..."
        value={valor}
        onChange={(evento) => alCambiar(evento.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>
  )
}

export default Buscador