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

  const minLengthYMaxLenghth = (valor,min, max) =>{
    if(valor.length >= min && valor.length <= max){
      return true;
    }else{
      return false;
    }
  }
  const sumarioValidaciones =(nombreMascota,nombreDueño,sintomas,fecha,hora)=>{ 
    let error = '';
    if(!minLengthYMaxLenghth(nombreMascota,3,30)){
      error += 'Ingresa un nombre de mascota correcto (min:3 max:30 letras)\n';
    }
    if(!minLengthYMaxLenghth(nombreDueño,3,30)){
      error += 'Ingresa un nombre de dueño correcto (min:3 max:30 letras)\n';
    }
    if(!minLengthYMaxLenghth(sintomas,5,60)){
      error += 'Ingresa sintomas correctos (min:5 max:60 letras)\n';
    }
    if(!validarFecha(fecha)){
      error += 'No puedes ingresar una fecha anterior\n';
    }
    if(!validarHora(hora)){
      error += 'La hora ingresada es invalida. (Horario de atencion: 9:00 a 21:00)';
    }
    if(error.length !== 0){
      return error;
    }else{
      return '';
    }
  }

  const validarFecha =(fecha)=>{
    const FECHA_ACTUAL = new Date();
    const FECHA_INGRESADA = new Date(fecha);
    if(FECHA_ACTUAL <= FECHA_INGRESADA){
      return true;
    }else{
      return false;
    }
  }

  const validarHora =(hora)=>{
    const expresionHora = /^(0?9|1[0-9]|20):[0-5][0-9]\s?$/;
    return expresionHora.test(hora);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof(hora))
    let sumario = sumarioValidaciones(nombreMascota,nombreDueño,sintomas,fecha,hora);
    if (sumario.length === 0) {
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
      alert(sumario);
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="nombreMascota">
          <Form.Control
            type="text"
            placeholder="Nombre de mascota"
            // minLength={3}
            // maxLength={30}
            // required
            onChange={(e) => setNombreMascota(e.target.value)}
            value={nombreMascota}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="nombreDueño">
          <Form.Control
            type="text"
            placeholder="Nombre del dueño"
            // minLength={3}
            // maxLength={30}
            // required
            onChange={(e) => setNombreDueño(e.target.value)}
            value={nombreDueño}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="fecha">
          <Form.Control
            type="date"
            // required
            onChange={(e) => setFecha(e.target.value)}
            value={fecha}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="hora">
          <Form.Control
            type="time"
            // required
            onChange={(e) => setHora(e.target.value)}
            value={hora}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sintomas">
          <Form.Control
            type="text"
            placeholder="Sintomas"
            // minLength={5}
            // maxLength={60}
            // required
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
