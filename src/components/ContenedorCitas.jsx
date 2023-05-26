import { Container, Col, Row} from "react-bootstrap";
import Cita from "./Cita";

const ContenedorCitas = ({ citas, borrarCita }) => {
  return (
    <section className="row my-5">
      <h4 className="display-5 text-center my-5">Citas pendientes</h4>
          {citas.map((cita,index) => (
            <article key={index} className="col-md-6 col-lg-4 mb-2">
                <Cita cita={cita} borrarCita={borrarCita}></Cita>
            </article>
          ))}
    </section>
  );
};

export default ContenedorCitas;
