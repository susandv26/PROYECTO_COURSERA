
function Footer(){
    return(
        <><footer className="text-center text-lg-start bg-body-tertiary text-muted" >
            
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
            
                <div>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-google"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="" className="me-4 text-reset">
                        <i className="fab fa-github"></i>
                    </a>
                </div>
            
            </section>
            
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    
                    <div className="row mt-3">
                        
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem me-3"></i> Proyecto Coursera
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, dolorem? Suscipit iusto ea ad, ipsum voluptatibus nostrum magnam quae alias laborum impedit dolorum in fugit ex quas autem delectus voluptate.
                            </p>
                        </div>
                        
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            
                            <h6 className="text-uppercase fw-bold mb-4">
                                Products
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">cursos</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">precios</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Compañias</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Instructores</a>
                            </p>
                        </div>
                        
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Pricing</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Settings</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Orders</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Help</a>
                            </p>
                        </div>
                        
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> Tegucigalp,Honduras</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                jonh@done.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                            <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                        </div>
                    
                    </div>
                    
                </div>
            </section>
            
            <div className="text-center p-4" style={{background: "rgba(0, 0, 0, 0.05)"}}>
                © 2024 Copyright:
                <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Coursera.com</a>
            </div>
            
        </footer>
        <Example />
        </>);
}
export default  Footer;


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
<>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body> */}
        <PlaintextExample/>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function PlaintextExample() {
  return (
    <Form className="m-5">
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form>
  );
}

