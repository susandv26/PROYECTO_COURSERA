// import React from 'react'

import principal from './img/imagen-principal.png'
import testimonio1 from "./img/testimonio-1.png"
import ciencias from "./img/ciencias-datos.png"
import google from "./img/logo-google.png"
import karim from "./img/photo_karim.png"
import penn from "./img/penn.png"
import stanford from "./img/logo-stanford.png"
import duke from "./img/logo-duke.png"
import imperial from "./img/imperial.png"
import googlelogo from "./img/google.png"
import illinios from "./img/illinois-logo.png"
import michigan from "./img/michigan-logo.png"
import  ibm from "./img/ibm-logo.png"

export default function Landing2() {
  return (<>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Coursera</title>
    <link
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./css/styles.css" />
    {/*navegador hecho*/}
    {/*carrusel de imagenes*/}
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to={0}
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to={1} />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
              <div className="col-md-6">
                <h1 className="display-4 texto-segundo">
                  Prepárese para el empleo con las nuevas competencias en IA
                </h1>
                <p className="lead">
                  Destaca ante los empleadores con un Certificado Profesional
                  líder en el sector y conocimientos imprescindibles de IA de
                  Google, IBM, Meta, Microsoft, etc.
                </p>
                <div id="botones" style={{ marginLeft: "-50px" }}>
                  <a href="#" className="btn btn-primary btn-lg">
                    Explorar los certificados
                  </a>
                  <a href="#" className="btn btn-outline-primary btn-lg">
                    Únete de forma gratuita
                  </a>
                </div>
              </div>
              <div className="col-md-6 imagen-principal">
                <img
                  src={principal}
                  alt="Imagen 1"
                  className="img-fluid img-principal"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
              <div className="col-md-6">
                <img src="./img/coursera_plus.png" className="logo-plus" alt="" />
                <h1 className="display-4 texto-primero">
                  Alcanza tus objetivos profesionales con Coursera Plus
                </h1>
                <p className="lead">
                  Obtén acceso a más de 7,000 cursos, proyectos prácticos y
                  programas de certificación de Google, Meta, Duke y otras
                  instituciones con una suscripción a Coursera Plus.
                </p>
                <a href="#" className="btn btn-primary btn-lg boton-comenzar">
                  Comenzar la prueba gratuita de 7 días
                </a>
              </div>
              <div className="col-md-6">
                <img
                  src="./img/imagen-persona.png"
                  alt="Imagen 2"
                  className="img-fluid img-persona"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Anterior</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Siguiente</span>
      </a>
    </div>
    <section
      className=""
      style={{
        marginTop: "-257px",
        backgroundColor: "#F5F5F5",
        padding: "64px 64px"
      }}
    >
      <div className="container text-center">
        <h2 className="mb-4">
          Colaboramos con más de 300 universidades y empresas líderes
        </h2>
        <div className="row justify-content-center">
          <div className="col-md-1">
            <img
              src={illinios}
              
              className="img-fluid"
            />
          </div>
          <div className="col-md-1">
            <img src={duke} alt="Duke" className="img-fluid" />
          </div>
          <div className="col-md-1">
            <img src={googlelogo} alt="Google" className="img-fluid" />
          </div>
          <div className="col-md-1">
            <img
              src={michigan}
              alt="Michigan"
              className="img-fluid"
            />
          </div>
          <div className="col-md-1">
            <img src={ibm} alt="IBM" className="img-fluid" />
          </div>
          <div className="col-md-1">
            <img
              src={imperial}
              alt="Imperial College London"
              className="img-fluid"
            />
          </div>
          <div className="col-md-1">
            <img
              src={stanford}
              alt="Stanford"
              className="img-fluid"
            />
          </div>
          <div className="col-md-1">
            <img src={penn} alt="Penn" className="img-fluid" />
          </div>
        </div>
      </div>
    </section>
    <div className="  container-fluid" style={{ display: "block" }}>
      {/* Sección de Certificados más populares */}
      <div className="seccion-cursos">
        <h6 className="text-titulo">
          Programas especializados y Certificados profesionales
        </h6>
        <h1>Certificados más populares</h1>
        <p style={{ fontSize: "1.3rem" }}>
          Explore nuestros programas más populares, prepárese para un trabajo en
          demanda.
        </p>
        <br />
      </div>
      <div className="row ">
        <div className="card-deck">
          <div className="col-md-3">
            <div className="card">
              <img
                src={karim}
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
                src={karim}
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
                src={karim}
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
                src={karim}
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
      <div className="botones-mostrar d-flex">
        <button className="btn btn-primary">Mostrar 8 más</button>
        <a
          href="#"
          className="btn btn-outline-primary"
          style={{ marginLeft: 12 }}
        >
          Ver todo <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
      {/*Cursos y certificados profesionales*/}
      <div className="seccion-cursos">
        <h6 className="text-titulo">Cursos y certificados profesionales</h6>
        <h1>Primera vez en Coursera</h1>
        <p style={{ fontSize: "1.3rem" }}>
          Explora nuestros programas más nuevos, enfocados en el desarrollo de
          habilidades muy demandas.
        </p>
      </div>
      <div className="row ">
        <div className="card-deck">
          <div className="col-md-3">
            <div className="card">
              <img
                src={karim}
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
                src={karim}
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
                src={karim}
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
                src={karim}
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
      <div className="botones-mostrar d-flex">
        <button className="btn btn-primary">Mostrar 8 más</button>
        <a
          href="#"
          className="btn btn-outline-primary"
          style={{ marginLeft: 12 }}
        >
          Ver todo <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
      {/*100 % gratis*/}
      <div className="seccion-cursos">
        <h6 className="text-titulo">100 % gratis</h6>
        <h1>Comienza a aprender con cursos gratis</h1>
        <p style={{ fontSize: "1.3rem" }}>
          Explora cursos en línea gratuitos de las mejores universidades y
          empresas del mundo.
        </p>
      </div>
      <div className="row ">
        <div className="card-deck">
          <div className="col-md-3">
            <div className="card">
              <img
                src={karim}
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
                src={karim}
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
                src={karim}
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
                src={karim}
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
      <div className="botones-mostrar d-flex">
        <button className="btn btn-primary">Mostrar 8 más</button>
        <a
          href="#"
          className="btn btn-outline-primary"
          style={{ marginLeft: 12 }}
        >
          Ver todo <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
      {/*Adelántate y comienza un programa de grado hoy mismo*/}
      <div className="seccion-cursos">
        <h6 className="text-titulo">Programas de grado</h6>
        <h1>Adelántate y comienza un programa de grado hoy mismo</h1>
        <p style={{ fontSize: "1.3rem" }}>
          Con estos programas, puedes desarrollar habilidades valiosas, obtener
          credenciales profesionales y progresar hacia un título incluso antes de
          inscribirte.
        </p>
      </div>
      <div className="row ">
        <div className="card-deck">
          <div className="col-md-3">
            <div className="card">
              <img
                src={karim}
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
                src={karim}
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
                src={karim}
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
                src={karim}
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
      <div className="botones-mostrar d-flex">
        <button className="btn btn-primary">Mostrar 8 más</button>
        <a
          href="#"
          className="btn btn-outline-primary"
          style={{ marginLeft: 12 }}
        >
          Ver todo <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
      <div className="seccion-cursos">
        <h6 className="text-titulo">Programas de grado</h6>
        <h1>Busca un título de grado superior que se ajuste a tus necesidades</h1>
        <p style={{ fontSize: "1.3rem" }}>
          Precios innovadores en títulos de grado 100% en línea de las mejores
          universidades.
        </p>
      </div>
      <div className="row ">
        <div className="card-deck">
          <div className="col-md-3">
            <div className="card">
              <img
                src={karim}
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
                src={karim}
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
                src={karim}
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
                src={karim}
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
      <div className="botones-mostrar d-flex">
        <button className="btn btn-primary">Mostrar 8 más</button>
        <a
          href="#"
          className="btn btn-outline-primary"
          style={{ marginLeft: 12 }}
        >
          Ver todo <i className="fa-solid fa-arrow-right" />
        </a>
      </div>
      {/* Sección explorar*/}
      <div className="seccion-cursos">
        <h1>Explora Coursera</h1>
        <br />
      </div>
      <div className="class row">
        <div className="col-md-3">
          <div className="card-categoria mb-3" style={{ maxWidth: 350 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ciencias}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-cuerpo">
                  <div className="category-name">
                    Ciencia de Datos
                    <br />
                  </div>
                  <div className="category-cursos">
                    <small>425 cursos</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-categoria mb-3" style={{ maxWidth: 350 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ciencias}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-cuerpo">
                  <div className="category-name">
                    Ciencia de Datos
                    <br />
                  </div>
                  <div className="category-cursos">
                    <small>425 cursos</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-categoria mb-3" style={{ maxWidth: 350 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ciencias}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-cuerpo">
                  <div className="category-name">
                    Ciencia de Datos
                    <br />
                  </div>
                  <div className="category-cursos">
                    <small>425 cursos</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-categoria mb-3" style={{ maxWidth: 350 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ciencias}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-cuerpo">
                  <div className="category-name">
                    Ciencia de Datos
                    <br />
                  </div>
                  <div className="category-cursos">
                    <small>425 cursos</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card-categoria mb-3" style={{ maxWidth: 350 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={ciencias}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-cuerpo">
                  <div className="category-name">
                    Ciencia de Datos
                    <br />
                  </div>
                  <div className="category-cursos">
                    <small>425 cursos</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sección testimonios*/}
      <div className="text-center mb-4">
        <h2>De la comunidad de Coursera</h2>
        <p>Más de 124 millones de personas ya se unieron a Coursera</p>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="testimonial-card">
            <img src={testimonio1} alt="Kenia R." />
            <h5>Kenia R.</h5>
            <small>
              Desarrollador web
              <br />
              Estados Unidos
            </small>
            <p>
              “Si inviertes en tu educación y desarrollas tus destrezas, verás un
              crecimiento notable en tu carrera. Unos pocos meses después de
              comenzar a invertir en mí, mi vida cambió para mejor”.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial-card">
            <img src={testimonio1} alt="Ryan L." />
            <h5>Ryan L.</h5>
            <small>
              Graduado de iMBA, Escuela de Negocios Gies de la Universidad de
              Illinois
              <br />
              Corea del Sur
            </small>
            <p>
              “<a href="#">Un curso en línea</a> te ahorra tiempo y, además, ir al
              campus tiene muchos gastos generales asociados. Si lo haces en
              línea, puedes hacerlo desde tu casa. Yo logré completar el programa
              de grado de{" "}
              <a href="#">la maestría de CU Boulder en ciencia de los datos</a>{" "}
              mientras trabajaba diseñando…”
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="testimonial-card">
            <img src={testimonio1} alt="Vishal V." />
            <h5>Vishal V.</h5>
            <small>
              Estudiante del Certificado profesional de Ciencia de datos de IBM
              <br />
              India
            </small>
            <p>
              “Me gustaron mucho mis cursos. Los cuestionarios, videos y
              laboratorios dinámicos me proporcionaron una experiencia práctica
              muy útil. Aprender en Coursera me dio la confianza y capacidad
              necesarias para destacarme en mi profesión. Me encanta esta
              experiencia.”
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  
  )
}
