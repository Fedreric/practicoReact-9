import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDueño, setNombreDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombreMascota">
          <Form.Control
            type="text"
            placeholder="Nombre de mascota"
            minLength={3}
            maxLength={30}
            required
            onChange={(e) => setNombreMascota(e.target.value)}
            value={nombreMascota}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="nombreDueño">
          <Form.Control
            type="text"
            placeholder="Nombre del dueño"
            minLength={3}
            maxLength={30}
            required
            onChange={(e) => setNombreDueño(e.target.value)}
            value={nombreDueño}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fecha">
          <Form.Control
            type="date"
            required
            onChange={(e) => setFecha(e.target.value)}
            value={fecha}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="hora">
          <Form.Control
            type="time"
            required
            onChange={(e) => setHora(e.target.value)}
            value={hora}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sintomas">
          <Form.Control
            type="text"
            placeholder="Sintomas"
            minLength={5}
            maxLength={60}
            required
            onChange={(e) => setSintomas(e.target.value)}
            value={sintomas}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default Formulario;
