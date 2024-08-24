"use client"

import { useState } from "react"
import axios from 'axios'
import { Button, Form, InputGroup } from 'react-bootstrap'

export default function CrearLeccion() {
  const [tipoLeccion, setTipoLeccion] = useState("texto")
  const [contenido, setContenido] = useState("")
  const [pregunta, setPregunta] = useState("")
  const [respuestas, setRespuestas] = useState(["", "", "", ""])
  const [respuestaCorrecta, setRespuestaCorrecta] = useState("0")

  const handleRespuestaChange = (index: number, valor: string) => {
    const nuevasRespuestas = [...respuestas]
    nuevasRespuestas[index] = valor
    setRespuestas(nuevasRespuestas)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Construir el payload según el tipo de lección
    const payload = {
      tipoLeccion,
      contenido: tipoLeccion === "texto" ? contenido : { pregunta, respuestas, respuestaCorrecta }
    }
    
    try {
      // Aquí puedes cambiar la URL por la de tu API
      const response = await axios.post('/api/lecciones', payload)
      console.log('Lección guardada:', response.data)
    } catch (error) {
      console.error('Error al guardar la lección:', error)
    }
  }

  return (
    <Form onSubmit={handleSubmit} className="space-y-3 w-full max-w-2xl mx-auto p-4 bg-light rounded-lg shadow-sm">
      <Form.Group controlId="tipo-leccion">
        <Form.Label>Tipo de Lección</Form.Label>
        <Form.Select value={tipoLeccion} onChange={(e) => setTipoLeccion(e.target.value)}>
          <option value="texto">Texto</option>
          <option value="pregunta">Pregunta</option>
        </Form.Select>
      </Form.Group>

      {tipoLeccion === "texto" ? (
        <Form.Group controlId="contenido">
          <Form.Label>Contenido de la Lección</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Escribe el contenido de la lección aquí"
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
            className="min-h-[200px]"
          />
        </Form.Group>
      ) : (
        <>
          <Form.Group controlId="pregunta">
            <Form.Label>Pregunta</Form.Label>
            <Form.Control
              type="text"
              placeholder="Escribe la pregunta aquí"
              value={pregunta}
              onChange={(e) => setPregunta(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Respuestas</Form.Label>
            {respuestas.map((respuesta, index) => (
              <InputGroup className="mb-2" key={index}>
                <InputGroup.Radio
                  aria-label={`Respuesta ${index + 1}`}
                  checked={respuestaCorrecta === index.toString()}
                  onChange={() => setRespuestaCorrecta(index.toString())}
                />
                <Form.Control
                  type="text"
                  placeholder={`Respuesta ${index + 1}`}
                  value={respuesta}
                  onChange={(e) => handleRespuestaChange(index, e.target.value)}
                />
              </InputGroup>
            ))}
          </Form.Group>
        </>
      )}

      <Button type="submit" variant="primary">Guardar Lección</Button>
    </Form>
  )
}
