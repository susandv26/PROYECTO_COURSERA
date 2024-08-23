import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MisCursos from "./componentes/MisCursos.tsx";
import Perfil from "./componentes/Perfil/perfil.tsx";
import Instructor from "./componentes/Instructor/Instructor.tsx";
import Home from "./componentes/home/home.tsx";
import Landing2 from "./componentes/Landing2/Landing2.tsx";
import Apiclient from "./Apiclient.tsx";
import RegistroUsuarios from "./componentes/RegistroUsuarios.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/landing",
        element: <Landing2 />,
    
      },{
        path: "/miscursos",
        element: <MisCursos />,
      },
      {
        path: "/perfil",
        element: <Perfil />,
      },
      {
        path: "/instructor",
        element: <Instructor />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {path: "/api",
      element: <Apiclient/>},
      
      {path: "/singin",
        element: <RegistroUsuarios/>}
    ]
  }

]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
