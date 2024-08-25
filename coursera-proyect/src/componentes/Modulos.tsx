import React from "react";
import { Card, Button, Badge } from "react-bootstrap";
import { Book, QuestionCircle } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

// Definimos el tipo para una lección
type Leccion = {
  id: number;
  nombre: string;
  tipo: "texto" | "pregunta";
};

// Lista de lecciones de ejemplo
const lecciones: Leccion[] = [
  { id: 1, nombre: "Introducción a React", tipo: "texto" },
  { id: 2, nombre: "Componentes en React", tipo: "texto" },
  { id: 3, nombre: "Quiz: Fundamentos de React", tipo: "pregunta" },
  { id: 4, nombre: "Estado y Props", tipo: "texto" },
  { id: 5, nombre: "Hooks en React", tipo: "texto" },
  { id: 6, nombre: "Quiz: Hooks y Estado", tipo: "pregunta" },
];

export default function Modulos() {

    const navigate=useNavigate();
  const iniciarLeccion = (id: number) => {
    console.log(`Iniciando lección ${id}`);
    navigate('/leccion');
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <style>
        {`
          .card:hover {
            transform: none !important;
          }
        `}
      </style>
      <Card className="my-3">
        <Card.Header>
          <h3>Lista de Lecciones</h3>
        </Card.Header>
        <Card.Body>
          <ul className="list-unstyled">
            {lecciones.map((leccion) => (
              <li key={leccion.id} className="mb-3">
                <Card>
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      {leccion.tipo === "texto" ? (
                        <Book className="me-3 text-primary" size={20} />
                      ) : (
                        <QuestionCircle className="me-3 text-success" size={20} />
                      )}
                      <div>
                        <h5 className="mb-0">{leccion.nombre}</h5>
                        <Badge bg={"secondary"} >
                          {leccion.tipo === "texto" ? "Lectura" : "Quiz"}
                        </Badge>
                      </div>
                    </div>
                    <Button onClick={() => iniciarLeccion(leccion.id)}>Iniciar</Button>
                  </Card.Body>
                </Card>
              </li>
            ))}
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
}
