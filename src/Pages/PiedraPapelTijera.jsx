import { useState } from "react";
import Navbar from "../Components/Navbar";
import Persona from "../Components/Persona";
import foto from "../Assets/foto.jpeg";

function PiedraPapelTijera() {
  const opciones = ["Piedra", "Papel", "Tijera"];
  const [resultado, setResultado] = useState("");
  const [jugador, setJugador] = useState("");
  const [computadora, setComputadora] = useState("");
  const [victorias, setVictorias] = useState(0);
  const [derrotas, setDerrotas] = useState(0);
  const [empates, setEmpates] = useState(0);

  const jugar = (eleccion) => {
    const cpu = opciones[Math.floor(Math.random() * opciones.length)];
    setJugador(eleccion);
    setComputadora(cpu);

    if (eleccion === cpu) {
      setResultado("🤝 Empate");
      setEmpates(empates + 1);
    } else if (
      (eleccion === "Piedra" && cpu === "Tijera") ||
      (eleccion === "Papel" && cpu === "Piedra") ||
      (eleccion === "Tijera" && cpu === "Papel")
    ) {
      setResultado("🎉 Ganaste");
      setVictorias(victorias + 1);
    } else {
      setResultado("😢 Perdiste");
      setDerrotas(derrotas + 1);
    }
  };

  return (
    <>
      <Navbar />

      <div className="layout">
        {/* COLUMNA IZQUIERDA */}
        <div className="content">
          <h1>Piedra, Papel o Tijera</h1>

          <div className="stats">
            <p>🏆 Victorias: {victorias}</p>
            <p>❌ Derrotas: {derrotas}</p>
            <p>🤝 Empates: {empates}</p>
          </div>

          <div className="actions">
            <button onClick={() => jugar("Piedra")}>🪨 Piedra</button>
            <button onClick={() => jugar("Papel")}>📄 Papel</button>
            <button onClick={() => jugar("Tijera")}>✂️ Tijera</button>
          </div>

          {resultado && (
            <div className="card">
              <p><strong>Tu elección:</strong> {jugador}</p>
              <p><strong>Computadora:</strong> {computadora}</p>
              <h2>{resultado}</h2>
            </div>
          )}
        </div>

        {/* COLUMNA DERECHA */}
        <div className="sidebar">
          <Persona
            nombre="Julián López Velásquez"
            git="https://github.com/JulianLopezVelasquez"
            telefono="310 575 8301"
            correo="julian.lopezv@autonoma.edu.co"
            descripcion="Estudiante de Ingeniería de Sistemas"
            foto={foto}
          />
        </div>
      </div>
    </>
  );
}

export default PiedraPapelTijera;
