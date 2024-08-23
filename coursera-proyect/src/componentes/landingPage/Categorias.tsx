// import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Picture from '../imagenes/Example.png';
function Categorias() {
  return (
    <Container>
      <Row md={4} className="gy-2 mb-4" style={{columnGap:"25px"}}>
        
      <CarCategoria titulo="Desarrollo Web" cantidad="150"/>
<CarCategoria titulo="Ciencia de Datos" cantidad="200"/>
<CarCategoria titulo="Inteligencia Artificial" cantidad="80"/>
<CarCategoria titulo="Marketing Digital" cantidad="120"/>
<CarCategoria titulo="Desarrollo de Apps Móviles" cantidad="90"/>
<CarCategoria titulo="Ciberseguridad" cantidad="60"/>
<CarCategoria titulo="Gestión de Proyectos" cantidad="75"/>
<CarCategoria titulo="Diseño Gráfico" cantidad="130"/>
<CarCategoria titulo="Idiomas" cantidad="180"/>
<CarCategoria titulo="Finanzas Personales" cantidad="110"/>
<CarCategoria titulo="Machine Learning" cantidad="95"/>
<CarCategoria titulo="Blockchain" cantidad="40"/>

 
      </Row>
    </Container>
  );
}


export default Categorias;

interface props{
  titulo?:string;
  cantidad?:string;
}

function CarCategoria(props:props
){
    return(
<Col className="mx-4">
        <div className="card p-0" style={{width: "360px" , height: "80px"}}>
  <div className="row ">
    <div className="col">
        <img src={Picture}className="img-fluid rounded-start w-auto" style={{height:"79px"}}   />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.titulo}</h5>
        <p className="card-text"> {props.cantidad} Lecciones</p>
        
      </div>
    </div>
  </div>
</div>
</Col>
    );
}