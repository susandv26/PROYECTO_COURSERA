import React, { Component, ChangeEvent, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

// Alias para cubrir todos los tipos posibles de elementos de formulario
type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface RegistroUsuariosProps {
  // Si tienes props, puedes definirlas aquí
}

interface RegistroUsuariosState {
  nombre: string;
  email: string;
  tipoUsuario: string;
  contrasena: string;
}

export class RegistroUsuarios extends Component<RegistroUsuariosProps, RegistroUsuariosState> {
  constructor(props: RegistroUsuariosProps) {
    super(props);
    this.state = {
      nombre: '',
      email: '',
      tipoUsuario: '1', // Valor inicial por defecto
      contrasena: ''
    };
  }

  // Manejar cambios en los campos del formulario
  handleChange = (e: ChangeEvent<FormElement>) => {
    this.setState({
      [e.target.name]: e.target.value
    } as Pick<RegistroUsuariosState, keyof RegistroUsuariosState>);
  };

  // Manejar el envío del formulario
  handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { nombre, email, tipoUsuario, contrasena } = this.state;
    
    // Endpoint de la API (debes cambiar esta constante cuando tengas el endpoint real)
    const API_ENDPOINT = 'https://api.ejemplo.com/registro';

    // Datos que se enviarán en el cuerpo del POST
    const data = {
      nombre,
      email,
      tipoUsuario,
      contrasena
    };


    console.log('JSON a enviar:', JSON.stringify(data, null, 2)); //no mas para verificar el envio de datos
    
    
    // Envío de los datos mediante una petición POST
    fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Puedes agregar lógica adicional aquí, como redireccionar al usuario
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  render() {
    return (
      <div className=' border-5 border-primary mx-auto m-200px'>
        <Stack as="form" onSubmit={this.handleSubmit} className="mx-auto mt-5 border-2 border border-opacity-10 border-primary " gap={3} style={{ width: "500px", padding: "15px", borderRadius: "5px" }}>
          <div>
            <Form.Label htmlFor="nombre">Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingresa tu nombre"
              name="nombre"
              value={this.state.nombre}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div>
            <Form.Label htmlFor="tipoUsuario">Rol</Form.Label>
            <Form.Select
              name="tipoUsuario"
              value={this.state.tipoUsuario}
              onChange={this.handleChange}
              required
            >
              <option value="1">Estudiante</option>
              <option value="2">Instructor</option>
            </Form.Select>
          </div>
          <div>
            <Form.Label htmlFor="contrasena">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="contrasena"
              value={this.state.contrasena}
              onChange={this.handleChange}
              required
            />
          </div>
          <Button variant="primary" className=" w-25" type="submit">Registrar</Button>
        </Stack>
      </div>
    );
  }
}

export default RegistroUsuarios;
