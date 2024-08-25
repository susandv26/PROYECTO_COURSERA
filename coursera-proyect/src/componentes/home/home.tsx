// import React from 'react'

import google from './img/logo-google.png'
import karin from './img/photo_karim.png'
import './css/styles.css'
import { Link } from 'react-router-dom'
import Navbar from '../nav/NavBar'

export default function Home() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Inicio</title>
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
  />
  <link rel="stylesheet" href="./css/styles.css" />
  <nav className="navbar bg-body-tertiary">
  <Navbar/> 
    <div>
      <ul className="nav nav-underline">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/miscursos">
            Mi aprendizaje
          </Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Titulos de grado en linea
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="#">
            Buscar carreras
          </a>
        </li>
      </ul>
    </div>
  </nav>
  <div className="container-fluid" style={{ display: "block" }}>
    <div className="d-flex justify-content-end">
      <p>
        Tu objetivo profesional está{" "}
        <strong style={{ marginRight: 20 }}>pendiente</strong>
        <a href="#">Establece tus objetivos hoy mismo</a>
      </p>
    </div>
    <h2 style={{ marginTop: 50 }}>Recently Viewed Productss</h2>
    <div className="row ">
      <div className="card-deck">
        <div className="col-md-3">
          <div className="card">
            <img
              src={karin}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="icono-texto">
                <p style={{ marginRight: 10 }}>
                  <img
                    src={google}
                    alt=""
                    className="icono-imagen"
                  />{" "}
                  Google
                </p>
              </div>
              <h3 className="card-title">Gestion de proyectos Google</h3>
              <a className="card-text">
                Realiza progresospara realizar un programa de grado.
              </a>
              <p className="card-pie">Certificado Profesional</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
              src={karin}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="icono-texto">
                <p style={{ marginRight: 10 }}>
                  <img
                    src={google}
                    alt=""
                    className="icono-imagen"
                  />{" "}
                  Google
                </p>
              </div>
              <h3 className="card-title">Gestion de proyectos Google</h3>
              <Link to="/inscripcion" className="card-text" >
                Realiza progresospara realizar un programa de grado.
              </Link>
              <p className="card-pie">Certificado Profesional</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img
            src={karin}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <div className="icono-texto">
                <p style={{ marginRight: 10 }}>
                  <img
                    src={google}
                    alt=""
                    className="icono-imagen"
                  />{" "}
                  Google
                </p>
              </div>
              <h3 className="card-title">Gestion de proyectos Google</h3>
              <a className="card-text">
                Realiza progresospara realizar un programa de grado.
              </a>
              <p className="card-pie">Certificado Profesional</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

  )
}
   


