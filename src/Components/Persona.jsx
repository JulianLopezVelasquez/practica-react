function Persona({ nombre, git, telefono, correo, descripcion, foto }) {
  return (
    <div className="persona-wrapper">
      <div className="persona-card">
        <img src={foto} alt={nombre} className="avatar" />

        <h2 className="persona-name">{nombre}</h2>

        <ul className="persona-info">
          <li>
            <strong>Git:</strong>{" "}
            <a href={git} target="_blank" rel="noreferrer">
              {git}
            </a>
          </li>
          <li><strong>Teléfono:</strong> {telefono}</li>
          <li><strong>Correo:</strong> {correo}</li>
          <li><strong>Descripción:</strong> {descripcion}</li>
        </ul>
      </div>
    </div>
  );
}

export default Persona;
