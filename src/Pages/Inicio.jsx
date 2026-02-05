import Navbar from "../Components/Navbar";
import Pregunta from "../Components/Preguntas";
import Persona from "../Components/Persona";
import { persona } from "../Data/Persona";

const preguntasRespuestas = [
  {
    pregunta: "¿Qué es React?",
    respuesta:
      "React es una biblioteca de JavaScript que permite construir interfaces de usuario de forma eficiente mediante componentes."
  },
  {
    pregunta: "¿Qué es la arquitectura de componentes?",
    respuesta:
      "Es una forma de organizar la aplicación dividiéndola en piezas pequeñas y reutilizables llamadas componentes."
  },
  {
    pregunta: "¿Qué es el proceso de transpilación?",
    respuesta:
      "Es el proceso de convertir código moderno de JavaScript o JSX a una versión compatible con los navegadores."
  },
  {
    pregunta: "¿Qué es JSX?",
    respuesta:
      "JSX es una extensión de JavaScript que permite escribir estructuras similares a HTML dentro del código JavaScript."
  },
  {
    pregunta: "¿Qué son los Hooks?",
    respuesta:
      "Los Hooks son funciones que permiten usar estado y otras características de React en componentes funcionales."
  },
  {
    pregunta: "¿Qué es Vite?",
    respuesta:
      "Vite es una herramienta de desarrollo que permite crear proyectos modernos de React de forma rápida."
  },
  {
    pregunta: "¿Qué es el State?",
    respuesta:
      "El state es un objeto que almacena datos que pueden cambiar dentro de un componente."
  },
  {
    pregunta: "¿Qué son los Props?",
    respuesta:
      "Los props son propiedades que permiten pasar información de un componente padre a un componente hijo."
  }
];

function Inicio() {
  return (
    <>
      <Navbar />

      <div className="container layout">

        <div>
          <h1>Inicio</h1>

        

          {preguntasRespuestas.map((item, index) => (
            <Pregunta
              key={index}
              pregunta={item.pregunta}
              respuesta={item.respuesta}
            />
          ))}
        </div>
}
        <Persona {...persona} />
      </div>
    </>
  );
}

export default Inicio;
