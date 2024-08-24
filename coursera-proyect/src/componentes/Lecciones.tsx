import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

// Definimos los tipos de lecciones
type LeccionTexto = {
  tipo: "texto";
  titulo: string;
  contenido: string;
};

type LeccionPregunta = {
  tipo: "pregunta";
  titulo: string;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
};

type Leccion = LeccionTexto | LeccionPregunta;

// Ejemplo de lecciones
const lecciones: Leccion[] = [
  {
    tipo: "texto",
    titulo: "Introducción a React",
    contenido: "React es una biblioteca de JavaScript para construir interfaces de usuario."
  },
  {
    tipo: "pregunta",
    titulo: "Quiz de React",
    pregunta: "¿Qué es JSX?",
    opciones: [
      "Un lenguaje de programación",
      "Una extensión de sintaxis para JavaScript",
      "Un framework de CSS",
      "Un tipo de base de datos"
    ],
    respuestaCorrecta: 1
  },
  // Añade más lecciones aquí...
];

export default function LeccionCard() {
  const [leccionActual, setLeccionActual] = useState(0);
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<number | null>(null);
  const [respuestaComprobada, setRespuestaComprobada] = useState(false);

  const leccion = lecciones[leccionActual];

  const siguienteLeccion = () => {
    if (leccionActual < lecciones.length - 1) {
      setLeccionActual(leccionActual + 1);
      setRespuestaSeleccionada(null);
      setRespuestaComprobada(false);
    }
  };

  const leccionAnterior = () => {
    if (leccionActual > 0) {
      setLeccionActual(leccionActual - 1);
      setRespuestaSeleccionada(null);
      setRespuestaComprobada(false);
    }
  };

  const comprobarRespuesta = () => {
    if (leccion.tipo === "pregunta" && respuestaSeleccionada !== null) {
      setRespuestaComprobada(true);
    }
  };

  return (
    <Card className="w-100 mx-auto mb-4" style={{ maxWidth: "600px", transition: "none", transform: "none" }}>
      <Card.Header>
        <Card.Title>{leccion.titulo}</Card.Title>
      </Card.Header>
      <Card.Body>
        {leccion.tipo === "texto" ? (
          <p>{leccion.contenido}</p>
        ) : (
          <>
            <p className="mb-4">{leccion.pregunta}</p>
            <Form>
              {leccion.opciones.map((opcion, index) => (
                <Form.Check 
                  key={index} 
                  type="radio" 
                  id={`opcion-${index}`} 
                  label={opcion} 
                  checked={respuestaSeleccionada === index}
                  onChange={() => setRespuestaSeleccionada(index)}
                />
              ))}
            </Form>
            {respuestaComprobada && (
              <p className={`mt-4 ${respuestaSeleccionada === leccion.respuestaCorrecta ? 'text-success' : 'text-danger'}`}>
                {respuestaSeleccionada === leccion.respuestaCorrecta ? '¡Correcto!' : 'Incorrecto. Intenta de nuevo.'}
              </p>
            )}
          </>
        )}
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <Button onClick={leccionAnterior} disabled={leccionActual === 0}>
          Anterior
        </Button>
        {leccion.tipo === "pregunta" && (
          <Button onClick={comprobarRespuesta} disabled={respuestaSeleccionada === null || respuestaComprobada}>
            Comprobar
          </Button>
        )}
        <Button onClick={siguienteLeccion} disabled={leccionActual === lecciones.length - 1}>
          Siguiente
        </Button>
      </Card.Footer>
    </Card>
  );
}
