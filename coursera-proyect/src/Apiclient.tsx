import React, { useState, useEffect } from 'react';
import axios, { AxiosError } from 'axios';




export default function Apiclient() {
    const [data, setData] = useState<unknown>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<AxiosError | null>(null);


 
  
  
      // Datos que deseas enviar en la solicitud POST
      
      
      useEffect(() => {
        
        const postData = {
          dni: '123456a78A',
          nombre: 'Juan',
          apellido: 'Pérez',
          email: 'juan.perez@example.com',
          telefono: '123456789',
          contrasena: 'password123',
          tipo: 1,
        };
  
          // Realizar la solicitud POST con Axios
          axios.post('http://localhost:8080/usuarios/crear', postData);
        
        
      
      const apiUrl = 'http://localhost:8080/usuarios/verTodos';
  
      axios.get(apiUrl)
        .then((response) => {
          setData(response.data);
          setLoading(false);
        })
        .catch((error: AxiosError) => {
          setError(error);
          setLoading(false);
        });

        
    }, []);
  
    if (loading) {
      return <div>Cargando...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    // Asegúrate de que `data` es un arreglo de objetos con `id` y `title`
    const posts = Array.isArray(data) ? data : [];
  
    return (
      <div>
        <h1>Datos de la API</h1>
        <ul>
          {posts.map((item) => (
            <><li>{(item as any).nombre}</li>
            <li>{(item as any).dni}</li>
            <li>{(item as any).apellido}</li>
            <li>{(item as any).tipo}</li>
            </>
          ))}
        </ul>
      </div>
    );
 
}
