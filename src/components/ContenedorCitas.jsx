import { Container } from "react-bootstrap";
import Cita from "./Cita";

const ContenedorCitas = () => {
    return (
        <Container className="row my-5">
            <h4 className="display-5 text-center">Citas pendientes</h4>
            <Cita></Cita>
        </Container>
    );
};

export default ContenedorCitas;