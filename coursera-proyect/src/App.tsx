import { Component, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./componente";
import componente from "./componente";
import Navbar from "./nav-bar";
import UncontrolledExample from "./componentes/Carrusel";
import Slider from "./componentes/Carrusel";
import PopularCourses from "./componentes/PopularCourses";
import Footer from "./componentes/footer";
import Categorias from "./componentes/Categorias";
import ListCourses from "./componentes/CourseCards";



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Slider />
    <PopularCourses />
    <ListCourses tipo="Cursos y certificados profesionales" titulo="Nuevo en Coursera" parrafo="Explora nuestros nuevos programas" />
    <ListCourses tipo="100% gratis" titulo="Comienza a aprender con cursos gratis" parrafo="Explora gratis cursos en linea desde las universidades y compañias top del mundo" />
    <ListCourses tipo="Programs de Certificados" titulo="comienza a certificate hoy" parrafo="con estos programas ,puedes construir habilidades valiosas" />
    <h1 className="text-start m-5">Categorias</h1>
   <Categorias />
    <Footer />
    </>
  );
}

export default App;

