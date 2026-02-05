function Pregunta({ pregunta, respuesta }) {
  return (
    <div className="card">
      <h3>{pregunta}</h3>
      <p>{respuesta}</p>
    </div>
  );
}

export default Pregunta;
