import { Form, Button, Container, InputGroup } from "react-bootstrap";
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
  const [validated, setValidated] = useState(false);
  useEffect(()=>{
    localStorage.setItem('listaCitas',JSON.stringify(citas));
  },[citas])
  const borrarCita = (citaEliminar) =>{
    let citasFiltrada = citas.filter((cita)=> cita !== citaEliminar)
    setCitas(citasFiltrada);
  }
  const handleSubmit = (e) => {
    // const fechaActual = new Date();
    // const fechaElegida = new Date(fecha);
    e.preventDefault(); 
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      alert('Datos erroneos!');
    }else{
      const nuevaCita = {
        "nombreMascota": nombreMascota,
        "nombreDueño": nombreDueño,
        "fecha": fecha,
        "hora": hora,
        "sintomas": sintomas
      }
      setCitas([...citas,nuevaCita])
      setNombreMascota('');
      setNombreDueño('');
      setFecha('');
      setHora('');
      setSintomas('');
    }
    setValidated(true);
  };

  return (
    <Container>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
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
          <Form.Control.Feedback type="invalid">
            Ingresa una fecha valida.
          </Form.Control.Feedback>
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
