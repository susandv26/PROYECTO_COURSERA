import React, { Component, ChangeEvent, FormEvent } from 'react';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import logo from './home/img/coursera-logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import Footer from './footer';

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

interface RegistroUsuariosProps {
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
            tipoUsuario: '1', 
            contrasena: ''
        };
    }
    
    handleChange = (e: ChangeEvent<FormElement>) => {
        this.setState({
            [e.target.name]: e.target.value
        } as Pick<RegistroUsuariosState, keyof RegistroUsuariosState>);
    };
    
    handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

    const { nombre, email, tipoUsuario, contrasena } = this.state;
    
    const API_ENDPOINT = 'apiurl';

    const data = {
      nombre,
      email,
      tipoUsuario,
      contrasena
    };


    console.log('JSON a enviar:', JSON.stringify(data, null, 2)); 

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
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  render() {
    return (<>
    <Link to="/landing">
          <img src={logo} alt="Description" className='m w-25 h-25' style={{margin:'20px 550px '}}  />
          </Link>
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
          <Link to='/landing'>
          <Button variant="primary" className=" w-25" type="submit" >Registrar</Button>
          </Link>
        </Stack>
      </div>
      <Footer/>
                </>
    );
  }
}

export default RegistroUsuarios;
