import React from "react";
import { Outlet } from "react-router-dom";


import Navbar from "./componentes/nav/NavBar";




function App() {

  return (
  <>
  <Navbar />
  <Outlet /> 
  </>
  );
}

export default App