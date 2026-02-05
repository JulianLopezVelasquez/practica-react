import { useState } from "react";
import Navbar from "../Components/Navbar";
import Persona from "../Components/Persona";
import { persona } from "../Data/Persona";

function IMC() {
  const [nombre, setNombre] = useState("");
  const [altura, setAltura] = useState("");
  const [peso, setPeso] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularIMC = () => {
    const pesoKg = peso / 2.20462;
    const imc = pesoKg / (altura * altura);

    let categoria = "";
    if (imc < 18.5) categoria = "Bajo peso";
    else if (imc < 25) categoria = "Normal";
    else if (imc < 30) categoria = "Sobrepeso";
    else categoria = "Obesidad";

    setResultado({ imc: imc.toFixed(2), categoria });
  };

  return (
    <>
      <Navbar />

      <div className="layout">

        <div className="content">
          <h1>Calculadora IMC</h1>

          <input
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />

          <input
            placeholder="Altura en metros"
            value={altura}
            onChange={(e) => setAltura(e.target.value)}
          />

          <input
            placeholder="Peso en libras"
            value={peso}
            onChange={(e) => setPeso(e.target.value)}
          />

          <button onClick={calcularIMC}>Calcular IMC</button>

          {resultado && (
            <div className="card">
              <p><strong>Nombre:</strong> {nombre}</p>
              <p><strong>IMC:</strong> {resultado.imc}</p>
              <p><strong>Categoría:</strong> {resultado.categoria}</p>
            </div>
          )}
        </div>

        <div className="sidebar">
          <Persona {...persona}
          />
        </div>
      </div>
    </>
  );
}

export default IMC;
