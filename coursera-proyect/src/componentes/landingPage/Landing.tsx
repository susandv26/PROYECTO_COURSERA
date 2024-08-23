// import React from 'react'

import Slider from "./Carrusel";
import PopularCourses from "./PopularCourses";
import Footer from "../footer";
import Categorias from "./Categorias";
import ListCourses from "./CourseCards";



export default function landing() {
  return (
    <>
    <Slider></Slider>
    <Slider/>
    <PopularCourses />
    <ListCourses />
        
        <ListCourses tipo={"popular entre los usuarios"} titulo={"Data scince"} parrafo={"Lorem ipsum valoricatum "} />     
    <ListCourses tipo="Cursos y certificados profesionales" titulo="Nuevo en Coursera" parrafo="Explora nuestros nuevos programas" />
    <ListCourses tipo="100% gratis" titulo="Comienza a aprender con cursos gratis" parrafo="Explora gratis cursos en linea desde las universidades y compañias top del mundo" />
    <ListCourses tipo="Programs de Certificados" titulo="comienza a certificate hoy" parrafo="con estos programas ,puedes construir habilidades valiosas" />
    <h1 className="text-start m-5">Categorias</h1>
   <Categorias />
    <Footer />
    </>)
}
