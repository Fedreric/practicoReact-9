import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import './App.css'
import Formulario from './components/Formulario';

function App() {
  return (
    <>
      <section className='mt-4'>
        <Container>
          <Formulario></Formulario>
        </Container>
      </section>
    </>
  )
}

export default App
