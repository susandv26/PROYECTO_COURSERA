import React from 'react';
import { Card, Button, Accordion, ListGroup } from 'react-bootstrap';
import { Book, ChevronRight, Calendar, Clock, Person } from 'react-bootstrap-icons';
import { useNavigate } from 'react-router-dom';

type Leccion = {
  id: number;
  nombre: string;
};

type Modulo = {
  id: number;
  nombre: string;
  lecciones: Leccion[];
};

type Curso = {
  id: number;
  nombre: string;
  descripcion: string;
  instructor: string;
  duracion: string;
  fechaInicio: string;
  modulos: Modulo[];
};

const cursoDemostracion: Curso = {
  id: 1,
  nombre: 'Desarrollo Web con React',
  descripcion:
    'Aprende a construir aplicaciones web modernas con React desde cero hasta un nivel avanzado. Este curso te llevará a través de los fundamentos de React, hooks avanzados, y técnicas de optimización para crear aplicaciones web robustas y eficientes.',
  instructor: 'Ana Martínez',
  duracion: '8 semanas',
  fechaInicio: '1 de Junio, 2023',
  modulos: [
    {
      id: 1,
      nombre: 'Fundamentos de React',
      lecciones: [
        { id: 1, nombre: 'Introducción a React' },
        { id: 2, nombre: 'Componentes y Props' },
        { id: 3, nombre: 'Estado y Ciclo de Vida' },
      ],
    },
    {
      id: 2,
      nombre: 'Hooks en React',
      lecciones: [
        { id: 4, nombre: 'Introducción a Hooks' },
        { id: 5, nombre: 'useState y useEffect' },
        { id: 6, nombre: 'Hooks Personalizados' },
        { id: 7, nombre: 'useContext y useReducer' },
      ],
    },
    {
      id: 3,
      nombre: 'Enrutamiento y Navegación',
      lecciones: [
        { id: 8, nombre: 'Configuración de React Router' },
        { id: 9, nombre: 'Navegación Programática' },
        { id: 10, nombre: 'Rutas Anidadas y Protegidas' },
      ],
    },
  ],
};

export default function CursoComponent() {
    const navigate = useNavigate();
    
  const iniciarModulo = (moduloId: number) => {


    console.log(`Iniciando módulo ${moduloId}`);
    navigate(`/modulo`);
    
  };

  return (
    <div className="container-fluid d-flex h-100">
      <div className="row w-100">
        {/* Sidebar */}
        <aside className="col-md-4 col-lg-3 bg-light p-4 border-end sticky-top" style={{ height: '100vh', top: 0 }}>
          <h2 className="h4">{cursoDemostracion.nombre}</h2>
          <div className="mb-3">
            <Person className="me-2" /> Instructor: {cursoDemostracion.instructor}
          </div>
          <div className="mb-3">
            <Clock className="me-2" /> Duración: {cursoDemostracion.duracion}
          </div>
          <div className="mb-3">
            <Calendar className="me-2" /> Inicio: {cursoDemostracion.fechaInicio}
          </div>
          <hr />
          <h3 className="h5">Descripción del Curso</h3>
          <p>{cursoDemostracion.descripcion}</p>
        </aside>

        <main className="col-md-8 col-lg-9 p-4 flex-fill overflow-auto">
          <h2 className="h4 mb-4">Módulos del Curso</h2>
          {cursoDemostracion.modulos.map((modulo) => (
            <Card key={modulo.id} className="mb-3">
              <Card.Header as="h5">{modulo.nombre}</Card.Header>
              <Card.Body>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Book className="me-2" />
                      {modulo.lecciones.length} {modulo.lecciones.length === 1 ? 'lección' : 'lecciones'}
                    </Accordion.Header>
                    <Accordion.Body>
                      <ListGroup variant="flush">
                        {modulo.lecciones.map((leccion) => (
                          <ListGroup.Item key={leccion.id}>
                            {leccion.nombre}
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Button
                  variant="primary"
                  className="mt-3 w-100"
                  onClick={() => iniciarModulo(modulo.id)}
                >
                  Iniciar Módulo <ChevronRight className="ms-2" />
                </Button>
              </Card.Body>
            </Card>
          ))}
        </main>
      </div>
    </div>
  );
}
