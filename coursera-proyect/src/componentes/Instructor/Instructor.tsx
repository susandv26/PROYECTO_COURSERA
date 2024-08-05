import React from 'react'

export default function Instructor() {
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Coursera</title>
  <link
    href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="./css/styles.css" />
  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n        .profile-header img {\n            border-radius: 50%;\n            width: 150px;\n            height: 150px;\n        }\n        .bio {\n            margin-top: 20px;\n            text-align: left;\n        }\n        .courses {\n            text-align: left;\n            margin-top: 20px;\n        }\n      .courses ul {\n          text-align: left;\n      }\n      .col-md-9{\n          text-align: left;\n      }\n    "
    }}
  />
  
  <footer className="text-center text-lg-start bg-body-tertiary text-muted">
    <div className="container mt-5">
      {/* Encabezado del perfil */}
      <div className="row profile-header">
        <div className="col-md-3 text-center">
          <img
            src="https://www.canal12misiones.com/wp-content/uploads/2022/08/fausto.jpg"
            alt="Foto del Instructor"
          />
        </div>
        <div className="col-md-9">
          <h1 className="display-4">Fausto García</h1>
          <p className="lead">
            <strong>Cargo:</strong> Máster Internacional de Negocios
          </p>
          <p>
            <strong>Institución:</strong> Universidad Austral
          </p>
        </div>
      </div>
      {/* Biografía */}
      <div className="bio">
        <h2>Biografía</h2>
        <p>
          Soy Ingeniero Industrial, MBA y Doctor por el Politécnico de Milán,
          con mucha afición por la música y la fotografía. Tuve la suerte de
          poder participar en dos películas de cine, y realicé algunos
          documentales cortos. Hace unos años empecé a estudiar cómo se hace
          innovación en la Industria del Entretenimiento. Investigué los
          procesos de creación de servicios en parques de diversiones, hoteles y
          centros comerciales, y de ese trabajo surgió este curso. Me dedico
          desde hace 20 años a enseñar a emprendedores, y dirijo un Máster
          Internacional en una escuela de Negocios. Descubrí en la docencia un
          modo de vida que no quisiera dejar nunca, ya que permite aplicar todo
          tipo de inventiva para ayudar a crecer a la gente. Últimamente he
          creado un programa que involucra arte, tecnología y gestión, juntando
          personas bastante diferentes bajo un mismo techo, que genera sorpresas
          cada vez que nos reunimos. Mi futuro próximo: seguir estudiando casos
          de empresas, desarrollando simuladores de aprendizaje, aprendiendo de
          personas de diferentes países.
        </p>
      </div>
      {/* Cursos impartidos */}
      <div className="courses">
        <h2>Cursos Impartidos</h2>
        <ul className="list-group">
          <li>
            <strong>Diseño de experiancia en servicios</strong> - Aprende a
            juzgar la sustentabilidad de ideas de innovación en el momento de
            aplicarlas a servicios.{" "}
          </li>
          <li>
            <strong>Fundamentos de Aprendizaje Automático</strong> - Explora los
            algoritmos y técnicas fundamentales del aprendizaje automático.
          </li>
        </ul>
      </div>
    </div>
    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      <div className="me-5 d-none d-lg-block">
        <span>Get connected with us on social networks:</span>
      </div>
      <div>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-facebook-f" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-twitter" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-google" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-instagram" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-linkedin" />
        </a>
        <a href="" className="me-4 text-reset">
          <i className="fab fa-github" />
        </a>
      </div>
    </section>
    <section className="">
      <div className="container text-center text-md-start mt-5">
        <div className="row mt-3">
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3" /> Proyecto Coursera
            </h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, dolorem? Suscipit iusto ea ad, ipsum voluptatibus
              nostrum magnam quae alias laborum impedit dolorum in fugit ex quas
              autem delectus voluptate.
            </p>
          </div>
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Products</h6>
            <p>
              <a href="#!" className="text-reset">
                cursos
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                precios
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Compañias
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Instructores
              </a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
            <p>
              <i className="fas fa-home me-3" /> Tegucigalp,Honduras
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              jonh@done.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
    </section>
    <div
      className="text-center p-4"
      style={{ background: "rgba(0, 0, 0, 0.5)" }}
    >
      © 2024 Copyright:
      <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
        Coursera.com
      </a>
    </div>
  </footer>
</>

  )
}
