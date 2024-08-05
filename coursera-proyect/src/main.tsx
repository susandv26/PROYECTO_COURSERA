import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Landing from "./componentes/landingPage/Landing.tsx";
import MisCursos from "./componentes/MisCursos.tsx";
import Perfil from "./componentes/Perfil/perfil.tsx";
import Instructor from "./componentes/Instructor/Instructor.tsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
      {
        path: "/",
        element: <Landing />,
    
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
      }
    ]
  },

]);


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
