// import React from 'react'

export default function Perfil() {
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
        "\n      .profile-header {\n          padding: 70px;\n          background-color: #f8f9fa;\n          border-bottom: 10px solid #ddd;\n      }\n      .profile-header img {\n          border-radius: 50%;\n          width: 120px;\n          height: 120px;\n      }\n      .section {\n          margin: 60px 0;\n      }\n      .section h2 {\n          text-align: left;\n          border-bottom: 2px solid #0099c8;\n          padding-bottom: 10px;\n          margin-bottom: 20px;\n      }\n      .section ul {\n          text-align: left;\n      }\n  "
    }}
  />
  {/*navegador hecho*/}

  <footer className="text-center text-lg-start bg-body-tertiary text-muted">
    {/* Encabezado del perfil */}
    <div className="profile-header row align-items-center">
      <div className="col-md-3 text-center">
        <img
          src="https://blogs.unah.edu.hn/assets/dircom/blog/8786/_resampled/CroppedFocusedImageWzc1MCw0NTAsIngiLDE1Ml0/vida-unah.jpg"
          alt="Foto de perfil"
        />
      </div>
      <div className="col-md-9">
        <h1>Cristofer Pacheco</h1>
        <p className="lead">
          Pasante Universitario | Administrador de Bases de Datos
        </p>
        <p>
          <strong>Email:</strong> pacheco@gmail.com
        </p>
        <p>
          <strong>Ubicación:</strong> TGU-Honduras
        </p>
      </div>
    </div>
    {/* Cursos Completados */}
    <div className="section">
      <h2>Cursos Completados</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Introduccion a la vida Universitaria</strong> - UNAH
        </li>
        <li className="list-group-item">
          <strong>CCNA1</strong> - Cisco
        </li>
        <li className="list-group-item">
          <strong>Algoritmos y Estructuras de Datos</strong> - UNAH
        </li>
      </ul>
    </div>
    {/* Habilidades */}
    <div className="section">
      <h2>Habilidades</h2>
      <ul className="list-group">
        <li className="list-group-item">Programación en Python</li>
        <li className="list-group-item">Análisis de Datos</li>
        <li className="list-group-item">Desarrollo Web</li>
        <li className="list-group-item">Machine Learning</li>
      </ul>
    </div>
    {/* Certificaciones */}
    <div className="section">
      <h2>Certificaciones</h2>
      <ul className="list-group">
        <li className="list-group-item">
          <strong>Certificación en Ciencia de Datos</strong> - Coursera Online
        </li>
        <li className="list-group-item">
          <strong>Certificación en Desarrollo Web</strong> - Coursera OInline
        </li>
      </ul>
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
