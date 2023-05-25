import { Form, Button, Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import ContenedorCitas from "./ContenedorCitas";
const Formulario = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [nombreDueño, setNombreDueño] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [sintomas, setSintomas] = useState("");
  let citasLS = JSON.parse(localStorage.getItem("listaCitas")) || [];
  const [citas, setCitas] = useState(citasLS);

  useEffect(() => {
    localStorage.setItem("listaCitas", JSON.stringify(citas));
  }, [citas]);

  const borrarCita = (citaEliminar) => {
    let citasFiltrada = citas.filter((cita) => cita !== citaEliminar);
    setCitas(citasFiltrada);
  };

  const msjError =(errorMascota)=>{

  }

  const validarNombreMascota = (nombreMascota) => {
    let error = '';
    if (nombreMascota.trim() !== "" && nombreMascota.maxLength >= 3) {
      return true;
    }else{
      
      return false;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validarNombreMascota(nombreMascota)) {
      const nuevaCita = {
        nombreMascota: nombreMascota,
        nombreDueño: nombreDueño,
        fecha: fecha,
        hora: hora,
        sintomas: sintomas,
      };
      setCitas([...citas, nuevaCita]);
      setNombreMascota("");
      setNombreDueño("");
      setFecha("");
      setHora("");
      setSintomas("");
    } else {
      alert("ups");
    }
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
      <ContenedorCitas citas={citas} borrarCita={borrarCita}></ContenedorCitas>
    </Container>
  );
};

export default Formulario;
