import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';


function Perfil() {
    return (
        <Form>
            <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="username" placeholder="Username"/>
            </Form.Group>

            <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="name" placeholder="Nombre completo"/>
            </Form.Group>

            <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Descripcion del perfil</Form.Label>
            <Form.Control type="description" placeholder="Descripcion del perfil"/>
            </Form.Group>

            <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>URL página personal</Form.Label>
            <Form.Control type="url" placeholder="URL página personal"/>
            </Form.Group>

            <Button variant="primary">
                Submit
            </Button>

        </Form>
    );
  }
  
  export default Perfil;