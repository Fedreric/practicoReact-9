import { Container, Col, Row} from "react-bootstrap";
import Cita from "./Cita";

const ContenedorCitas = ({ citas }) => {
  return (
    <section className="row my-5">
      <h4 className="display-5 text-center">Citas pendientes</h4>
          {citas.map((cita) => (
            <article  className="col-md-6 col-lg-4 mb-2">
                <Cita cita={cita}></Cita>
            </article>
          ))}
    </section>
  );
};

export default ContenedorCitas;
