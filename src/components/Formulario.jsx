import { Form, Button, Container } from "react-bootstrap";
import { useState } from "react";
const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validacionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (
      validacionEmail.test(email) &&
      nombre.trim() !== "" &&
      apellido.trim() !== "" &&
      dni.trim() !== ""
    ) {
      alert(`nombre: ${nombre}
            apellido: ${apellido}
            dni: ${dni}
            email: ${email}`);
            
            setNombre("");
            setApellido("");
            setDni("");
            setEmail("");
    }else{
        alert('Completa todos los datos')
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Control
            type="text"
            placeholder="Nombre EJ: Federico"
            minLength={3}
            maxLength={30}
            required
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Control
            type="text"
            placeholder="Apellido Ej: Ledesma"
            minLength={3}
            maxLength={30}
            required
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="dni">
          <Form.Control
            type="number"
            placeholder="D.N.I Ej: 44555777"
            min={1111111}
            max={9999999}
            required
            onChange={(e) => setDni(e.target.value)}
            value={dni}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Control
            type="email"
            placeholder="Email Ej: fede@gmail.com"
            minLength={9}
            maxLength={60}
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
