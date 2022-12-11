import { NavDropdown, Nav, Navbar, Container } from 'react-bootstrap'

import './Navbar.css';
import mbc from '../assets/img/mbc logo.png'

const NavbarAll = () => {
  return(
  <Navbar bg="light" expand="lg">
    <Container fluid>
      <Navbar.Brand href="#home">
        <a href="main.html" class="navbar-brand"><img src={mbc} alt="mbc logo" width="200" /></a>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">

          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Profile" id='profile'>
            <NavDropdown.Item href='/Dosen'>
              Dosen Pembimbing
            </NavDropdown.Item>
            <NavDropdown.Item href='/Asisten'>
              Asisten
            </NavDropdown.Item>
            <NavDropdown.Item href='/Caas'>
              Calon Asisten
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Division" id="division">
            <NavDropdown.Item href="/cyber">
              CyberSecurity
            </NavDropdown.Item>
            <NavDropdown.Item href="/bigdata">
              Big Data
            </NavDropdown.Item>
            <NavDropdown.Item href="/gis">
              GIS
            </NavDropdown.Item>
            <NavDropdown.Item href='/gametech'>
              GameTech
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavbarAll;