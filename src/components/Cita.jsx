import { Button, Card } from "react-bootstrap";
const Cita = ({cita}) => {
  return (
        <Card>
          <Card.Header>
            <Card.Title>Mascota: {cita.nombreMascota}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Dueño: {cita.nombreDueño}
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>Fecha: {cita.fecha}</Card.Text>
            <Card.Text>Hora: {cita.hora} hs</Card.Text>
            <Card.Text>
              Sintomas: {cita.sintomas}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button>Borrar</Button>
          </Card.Footer>
        </Card>
  );
};

export default Cita;
