import React from 'react';
import { Button, Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { ArrowLeft, Clock, Calendar, CheckCircle, Book } from 'react-bootstrap-icons';
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';

type Curso = {
  id: number;
  nombre: string;
  descripcion: string;
  instructor: string;
  duracion: string;
  fechaInicio: string;
  temas: string[];
};

const curso: Curso = {
  id: 1,
  nombre: 'Desarrollo Web con React',
  descripcion:
    'Aprende a construir aplicaciones web modernas con React desde cero hasta un nivel avanzado. Este curso te llevará a través de los fundamentos de React, hooks avanzados, y técnicas de optimización para crear aplicaciones web robustas y eficientes.',
  instructor: 'Ana Martínez',
  duracion: '8 semanas',
  fechaInicio: '1 de Junio, 2023',
  temas: [
    'Componentes de React',
    'Hooks',
    'Estado y Props',
    'Enrutamiento',
    'Optimización de Rendimiento',
    'Integración con APIs',
  ],
};

export default function InscripcionCursoPage() {
  const navigate=useNavigate();
    const inscribirse = () => {
    console.log('Inscripción al curso iniciada');
    navigate('/miscursos');
    
  };

  return (
    <div className="min-vh-100 bg-light">
   

      <main className="container py-5">
        <h1 className="display-4 mb-4">{curso.nombre}</h1>
        <p className="lead text-muted mb-4">{curso.descripcion}</p>

        <Row className="mb-5">
          <Col md={4}>
            <h2 className="h4 mb-4">Detalles del curso</h2>
            <ListGroup>
              <ListGroup.Item className="d-flex align-items-center">
                <Book className="me-2" />
                Instructor: {curso.instructor}
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <Clock className="me-2" />
                Duración: {curso.duracion}
              </ListGroup.Item>
              <ListGroup.Item className="d-flex align-items-center">
                <Calendar className="me-2" />
                Fecha de inicio: {curso.fechaInicio}
              </ListGroup.Item>
            </ListGroup>
          </Col>

          <Col md={8}>
            <h2 className="h4 mb-4">Temas del curso</h2>
            <ListGroup>
              {curso.temas.map((tema, index) => (
                <ListGroup.Item key={index} className="d-flex align-items-center">
                  <CheckCircle className="me-2 text-success" />
                  {tema}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
        </Row>

        <hr className="my-4" />

        <div className="text-center">
          <Button variant="primary" size="lg" onClick={inscribirse} className="py-3 px-5">
            Inscribirse ahora
          </Button>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            Al inscribirte, tendrás acceso inmediato al material del curso y podrás comenzar tu aprendizaje en React.
            Si tienes alguna pregunta, no dudes en contactar con nuestro equipo de soporte.
          </p>
        </div>
      </main>

     <Footer/>
    </div>
  );
}
