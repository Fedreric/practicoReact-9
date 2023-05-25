import { Button, Card } from "react-bootstrap";
const Cita = () => {
  return (
        <Card>
          <Card.Header>
            <Card.Title>Mascota: Firulais</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Dueño: Pedro
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Card.Text>Fecha: 2023-05-26</Card.Text>
            <Card.Text>Hora: 18:00 hs</Card.Text>
            <Card.Text>
              Sintomas: Debilidad, falta de apetito, dolor al caminar.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button>Borrar</Button>
          </Card.Footer>
        </Card>
  );
};

export default Cita;
