// import React from 'react';

import picture from './imagenes/Example.png';
import { Button } from 'react-bootstrap';
import Footer from './footer';
import { Link } from 'react-router-dom';

export default function MisCursos() {
  return (<>
  <h1 className='m-5'>Mi aprendizaje</h1>
    <ul className="nav nav-pills m-5 rounded-5">
  <li className="nav-item">
    <a className="nav-link active" aria-current="page" data-bs-toggle="pill" href="#">En curso  </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#" data-bs-toggle="pill">Completado</a>
  </li>
 
</ul>

    <MisCursosCard titulo={'React'} descripcion={"Aprende a dominar React"} tipo={"curso"} empresa={"coursera"}/>
    <MisCursosCard 
  titulo={"Inglés Básico"} 
  descripcion={"Aprende y certifica tus habilidades en el idioma inglés desde nivel básico."} 
  tipo={"curso"} 
  empresa={"UNAH"} 
/>

<MisCursosCard 
  titulo={"Certificación en Marketing Digital"} 
  descripcion={"Obtén una certificación reconocida en el campo del marketing digital."} 
  tipo={"certificado"} 
  empresa={"INFOP"} 
/>

<MisCursosCard 
  titulo={"Programa de Desarrollo Web"} 
  descripcion={"Domina las habilidades necesarias para convertirte en un desarrollador web full stack."} 
  tipo={"programa"} 
  empresa={"UNAH"} 
/>

<MisCursosCard 
  titulo={"Curso de Excel Avanzado"} 
  descripcion={"Perfecciona tus habilidades en Excel con este curso avanzado, ideal para profesionales."} 
  tipo={"curso"} 
  empresa={"INFOP"} 
/>
<Footer />
  </>
  )
}
 
interface props{
    titulo:string;
    descripcion:String;
    tipo:String;
    empresa:String;

};

function MisCursosCard(props:props) {
    return (
      <div className="card m-5" style={{height: "150px"}}>
    <div className="row g-0">
      <div className="col-md-2">
     <img src={picture} className="img-fluid rounded-start-2" style={{height:"149px"}}/>
     
      </div>
      <div className="col-md-6 border-end border-opacity-25 border-black border-1 m-1">
        <div className="card-body">
        <div className="mb-2 text-muted">{props.tipo} | {props.empresa} </div>
          <h5 className="card-title " style={{paddingTop:"8px"}}>{props.titulo}</h5>
        
        <div>
          {props.descripcion}
        </div>
        </div>
      </div>
      <div className='col-md-3'>   
        <div className="align-items-center  flex-column d-flex mt-4">
      <Link to='/curso'>
      <button className="btn btn-primary mb-2">Ir al curso</button>
      </Link>
      <Button variant="outline-primary" >Fijar fecha de finalizacion</Button>
    </div>
    </div>
    </div>
  </div>
    );
  }
