import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';

export default function CrearCurso() {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    categoria: '',
    precio: '',
    modulos: 0  
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    
  };

  return (
    <Container fluid className="p-4 bg-light mx-auto w-100">
      <Row className="justify-content-center w-100">
        <Col xs={12} md={10} lg={8}>
          <Card className="border-0 shadow-lg mx-auto">
            <Card.Body className="p-0">
              <Row className="g-0 d-flex justify-content-center h-100">
                <Col xs={12} md={6} className="p-4 bg-primary text-white d-flex flex-column justify-content-center rounded-5 mt-3">
                  <h2 className="mb-4">Cree su curso</h2>
                  <p className="mb-0"></p>
                </Col>
                <Col xs={12} md={6}>
                  <Form onSubmit={handleSubmit} className="p-4">
                    <Form.Group className="mb-4" controlId="formTitulo">
                      <Form.Label className="fw-bold">Título</Form.Label>
                      <Form.Control
                        type="text"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange}
                        required
                        className="border-1 border-bottom rounded-2 border"
                        placeholder="Ingrese el título"
                      />
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="formDescripcion">
                      <Form.Label className="fw-bold">Descripción</Form.Label>
                      <Form.Control
                        as="textarea"
                        name="descripcion"
                        value={formData.descripcion}
                        onChange={handleChange}
                        required
                        className="border-1 border-bottom rounded-2"
                        rows={3}
                        placeholder="Ingrese la descripción"
                      />
                    </Form.Group>

                    <Row>
                      <Col xs={12} sm={6}>
                        <Form.Group className="mb-4" controlId="formCategoria">
                          <Form.Label className="fw-bold">Categoría</Form.Label>
                          <Form.Select
                            name="categoria"
                            value={formData.categoria}
                            onChange={handleChange}
                            required
                            className="border-1 border-bottom rounded-1"
                          >
                            <option value="">Seleccione</option>
                            <option value="electronica">Electrónica</option>
                            <option value="ropa">Ropa</option>
                            <option value="hogar">Hogar</option>
                            <option value="deportes">Deportes</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col xs={12} sm={6}>
                        <Form.Group className="mb-4" controlId="formPrecio">
                          <Form.Label className="fw-bold">Precio</Form.Label>
                          <Form.Control
                            type="number"
                            name="precio"
                            value={formData.precio}
                            onChange={handleChange}
                            required
                            className="border-1 border-bottom rounded-1"
                            min="0"
                            step="0.01"
                            placeholder="Ingrese el precio"
                          />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-4" controlId="formModulos">
                      <Form.Label className="fw-bold">Número de Módulos</Form.Label>
                      <Form.Control
                        type="number"
                        name="modulos"
                        value={formData.modulos}
                        onChange={handleChange}
                        required
                        className="border-1 border-bottom rounded-1"
                        min="1"
                        placeholder="Ingrese el número de módulos"
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button variant="primary" type="submit" size="lg" className="mt-4 rounded-pill">
                        Enviar
                      </Button>
                    </div>
                  </Form>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
    