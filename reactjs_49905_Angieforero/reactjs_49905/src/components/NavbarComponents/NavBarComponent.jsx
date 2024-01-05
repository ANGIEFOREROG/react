import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';

const NavBarComponent = () => {
    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Navbar.Brand href="#home">ART Cuadros personalizados</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">contacto</Nav.Link>
                <NavDropdown title="Tienda" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">cuadros de caricaturas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                    Cuadro familiar
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">cuadro personalizado </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                    cuadros en madera
                    </NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
            </Container>
        </Navbar>
    
    )
}
export default NavBarComponent;