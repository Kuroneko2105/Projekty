import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav-custom shadow-sm mx-auto p-2 px-5 gap-5">
              <Nav.Link href="#oferty">Oferty</Nav.Link>
              <Nav.Link href="#pomoctechniczna">Pomoc techniczna</Nav.Link>
              <Nav.Link href="#oprogramowanie">Oprogramowanie</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="center-section">
        <h1 className="text-center">
          Wejdź na <br /><span className="highlight">wyższy</span> level
        </h1>
        <div className="images-custom">
          <div className="product-wrapper">
            <div className="shadow-ellipse"></div>
            <Image className="image-custom" src="słuchawki.png" />
          </div>
          <div className="product-wrapper">
            <div className="shadow-ellipse"></div>
            <Image className="img-main-custom" src="klawiatura.png" />
          </div>
          <div className="product-wrapper">
            <div className="shadow-ellipse"></div>
            <Image className="image-custom" src="mysz.png" />
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-4">
        <Button className="button-custom px-5 shadow-sm">Przeglądaj ofertę</Button>
      </div>
    </div>
  );
}

export default App;
