import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../Cardwidget/Cardwidget';
import { Link } from 'react-router-dom';
import { getCategories } from '../../services';


const NavBarComponent = () => {
    const { categories } = useGetCategories();

    return(
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
            <Link to="/">ART Cuadros personalizados</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">contacto</Nav.Link>
                <NavDropdown title="categorias" id="basic-nav-dropdown">
                {
                    categories.map((category, index) => {
                        return(
                            <NavDropdown.Item key={index}><Link key={index} to={'/category/${category}'}>{category}</Link></NavDropdown.Item>
                        )
                    })
                
                } 
                
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            <CartWidget/>
            </Container>
        </Navbar>
    
    )
}
export default NavBarComponent;