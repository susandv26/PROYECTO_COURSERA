import React, { Component } from 'react';
import { Accordion, Button } from 'react-bootstrap';

interface CrearModulosProps {
  cantidad: number;
}

export default class CrearModulos extends Component<CrearModulosProps> {
  render() {
    const { cantidad } = this.props;

    // Generar los items del acordeón de acuerdo a la cantidad proporcionada
    const items = [];
    for (let i = 0; i < cantidad; i++) {
      items.push(
        <Accordion.Item eventKey={i.toString()} key={i}>
          <Accordion.Header>{`Modulo #${i + 1}`}</Accordion.Header>
          <Accordion.Body className=" d-flex justify-content-end gap-2"> 
          <Button variant="primary"  >Agregar Leccion</Button>{' '}
          <Button variant="outline-danger">Borrar modulo</Button>{' '}
          </Accordion.Body>
        </Accordion.Item>
      );
    }

    return (
      <Accordion defaultActiveKey="0">
        {items}
      </Accordion>
    );
  }
}
